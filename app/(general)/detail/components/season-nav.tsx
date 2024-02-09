"use client";
import { useState } from "react";

import useSWR from "swr";

import { Button } from "@/components/ui/button";
import { Episode, Season } from "@/lib/types";
import { cn } from "@/lib/utils";

import EpisodeCarousel from "./episode-carousel";
import EpisodeLoader from "./episode-loader";

type Props = {
  tvSeriesId: number;
  activeSeason?: number;
  seasons: Season[];
};

const fetchEpisodes = async (tvSeriesId: number, selectedSeason: number) => {
  const res = await fetch(
    `/api/episodes?seriesId=${tvSeriesId}&season=${selectedSeason}`
  ).then((res) => res.json());

  return res.episodes;
};

function SeasonNav({ tvSeriesId, activeSeason = 1, seasons }: Props) {
  const [selectedSeason, setSelectedSeason] = useState(activeSeason);
  const [episodeCount, setEpisodeCount] = useState(() => {
    const seasonDetails = seasons.find(
      (s) => s.season_number === selectedSeason
    );
    return seasonDetails!.episode_count;
  });

  const { data: episodes, isLoading } = useSWR<Episode[]>(
    ["/api/episodes", tvSeriesId, selectedSeason],
    ([url, tvSeriesId, selectedSeason]) =>
      fetchEpisodes(tvSeriesId as number, selectedSeason as number)
  );

  const onSeasonClick =
    (season: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      setSelectedSeason(season);

      const seasonDetails = seasons.find((s) => s.season_number === season);
      setEpisodeCount(seasonDetails!.episode_count);
    };

  return (
    <div>
      <div className="flex mx-10 space-x-10 overflow-scroll pt-5 scrollbar-hide snap-mandatory snap-x">
        {seasons.map((season) => (
          <Button
            key={season.id}
            variant={"link"}
            className={cn(
              "w-auto text-left text-sm uppercase text-[#cacaca] hover:no-underline px-0",
              season.season_number === selectedSeason &&
                "font-bold text-white pointer-events-none"
            )}
            value={season.season_number}
            onClick={onSeasonClick(season.season_number)}
          >
            Season {season.season_number}
          </Button>
        ))}
      </div>
      {isLoading ? (
        <EpisodeLoader skeletons={episodeCount} />
      ) : (
        <EpisodeCarousel episodes={episodes ?? []} />
      )}
    </div>
  );
}

export default SeasonNav;
