import { Season } from "@/lib/types";

import SeasonNav from "./season-nav";

type Props = {
  tvSeriesId: number;
  activeSeason?: number;
  seasons: Season[];
};

function EpisodesTab({ tvSeriesId, activeSeason = 1, seasons }: Props) {
  if (!seasons.length) return null;

  return (
    <div className="w-full">
      <div className="flex mx-10 mt-4 border-solid border-b-2 border-[rgba(249,249,249,0.2)]">
        <div
          className="relative cursor-pointer pb-2 inline-block mr-10 uppercase text-lg tracking-[1.5px]
            after:content-[''] after:absolute after:left-0 after:bottom-0 rounded-[50px 50px 0 0] after:w-full after:bg-white after:h-[3px]"
        >
          Episodes
        </div>
      </div>
      <SeasonNav
        tvSeriesId={tvSeriesId}
        activeSeason={activeSeason}
        seasons={seasons}
      />
    </div>
  );
}

export default EpisodesTab;
