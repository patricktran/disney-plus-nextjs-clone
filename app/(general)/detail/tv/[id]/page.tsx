import { Play } from "lucide-react";
import Link from "next/link";

import BackgroundImage from "@/components/background-image";
import { Button } from "@/components/ui/button";
import { getTvDetail } from "@/lib/get-media";
import { getImagePath } from "@/lib/utils";

import EpisodesTab from "../../components/episodes-tab";

type Props = {
  params: {
    id: string;
  };
};

async function TvDetail({ params: { id } }: Props) {
  const details = await getTvDetail(id);

  const releaseYear = details.first_air_date?.split("-")?.[0];
  const genres = details.genres.map((g) => g.name);
  const numSeasons = details.number_of_seasons;

  return (
    <main className="min-h-screen">
      <BackgroundImage
        imagePath={getImagePath(details.backdrop_path, true)}
        alt={details.name}
      />
      <div className="absolute w-full mt-0 top-0 pt-52 left-0">
        <article className="p-10 space-y-4 text-white">
          <h1 className="text-5xl font-bold max-w-xl text-shadow-sm shadow-gray-900">
            {details.name}
          </h1>
          <div className="text-sm max-w-xl text-shadow shadow-gray-900 flex flex-row gap-1.5 items-center">
            <span>{releaseYear}</span>
            {numSeasons && (
              <>
                <span className="rounded-full h-1.5 w-1.5 bg-white"></span>
                <span>{numSeasons} seasons</span>
              </>
            )}
            {genres.length && (
              <>
                <span className="rounded-full h-1.5 w-1.5 bg-white"></span>
                <span>{genres.join(", ")}</span>
              </>
            )}
          </div>
          <div className="pt-6 flex gap-6">
            <Link href={`/video/tv/${id}`}>
              <Button
                className="flex gap-1.5 items-center text-base font-light"
                size={"lg"}
              >
                <Play fill="#000" /> PLAY
              </Button>
            </Link>
            <Button
              className="flex gap-1.5 items-center text-base font-light border-white border-[1px] bg-black bg-opacity-35 hover:bg-black hover:bg-opacity-55"
              size={"lg"}
              variant={"ghost"}
            >
              <Play fill="#fff" /> TRAILER
            </Button>
          </div>
          <p className="pt-10 max-w-xl text-xl text-shadow shadow-gray-900 capitalize font-bold italic">
            {details.tagline ?? ""}
          </p>
          <p className="max-w-3xl text-xl text-gray-200 text-shadow shadow-gray-900">
            {details.overview}
          </p>
          <div className="pt-10"></div>
        </article>

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
