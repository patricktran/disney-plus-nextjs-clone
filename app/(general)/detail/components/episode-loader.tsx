import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  skeletons: number;
};

function EpisodeLoader({ skeletons }: Props) {
  return (
    <div className="episode-carousel-container">
      {[...Array(skeletons)].map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-[134px] w-[240px] rounded-sm" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-[125px]" />
            <Skeleton className="h-2 w-[240px]" />
            <Skeleton className="h-2 w-[240px]" />
            <Skeleton className="h-2 w-[240px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default EpisodeLoader;
