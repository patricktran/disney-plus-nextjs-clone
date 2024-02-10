import React from "react";

import MediaCarousel from "@/components/media-carousel";
import { getDiscoverMovies } from "@/lib/get-media";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function Genre({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovies(id);

  return (
    <>
      <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
      <MediaCarousel title="Genre" media={movies} isVertical />
    </>
  );
}

export default Genre;
