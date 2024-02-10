import BackgroundImage from "@/components/background-image";
import { getTvDetail } from "@/lib/get-media";
import { getImagePath } from "@/lib/utils";

import EpisodesTab from "../../components/episodes-tab";
import MetaInfo from "../../components/meta-info";

type Props = {
  params: {
    id: string;
  };
};

async function TvDetail({ params: { id } }: Props) {
  const details = await getTvDetail(id);

  return (
    <main className="min-h-screen">
      <BackgroundImage
        imagePath={getImagePath(details.backdrop_path, true)}
        alt={details.name}
      />
      <div className="absolute w-full mt-0 top-0 pt-52 left-0">
        <MetaInfo details={details} />

        <EpisodesTab
          tvSeriesId={details.id}
          seasons={details.seasons.filter(
            (x) => x.season_number > 0 && new Date(x.air_date) < new Date()
          )}
        />
      </div>
    </main>
  );
}

export default TvDetail;
