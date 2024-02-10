import type { Metadata, ResolvingMetadata } from "next";

import BackgroundImage from "@/components/background-image";
import { getMovieDetail } from "@/lib/get-media";
import { getImagePath } from "@/lib/utils";

import MetaInfo from "../../components/meta-info";

type Props = {
  params: {
    id: string;
  };
};

async function Detail({ params: { id } }: Props) {
  const details = await getMovieDetail(id);

  return (
    <main className="min-h-screen">
      <BackgroundImage
        imagePath={getImagePath(details.backdrop_path, true)}
        alt={details.title}
      />
      <div className="absolute mt-0 top-0 pt-52 left-0 p-10 space-y-4 text-white ">
        <MetaInfo details={details} />
      </div>
    </main>
  );
}

export default Detail;
