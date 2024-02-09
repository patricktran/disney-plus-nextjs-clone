"use client";

import { useRef, useEffect } from "react";

import MediaCard from "@/components/media-card";
import { Episode } from "@/lib/types";

type Props = {
  episodes: Episode[];
};

function EpisodeCarousel({ episodes }: Props) {
  const scrollDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollDivRef.current?.scrollTo({
      left: 0,
    });
  }, [episodes]);

  return (
    <div ref={scrollDivRef} className="episode-carousel-container">
      {episodes?.map((ep) => (
        <MediaCard
          key={ep.id}
          size="small"
          media={{
            id: ep.id,
            title: `${ep.episode_number}. ${ep.name}`,
            imagePath: ep.still_path,
            overview: ep.overview,
          }}
          displayMode="episode"
        />
      ))}
    </div>
  );
}

export default EpisodeCarousel;
