import React from "react";

import { Metadata, ResolvingMetadata } from "next";

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

export async function generateMetadata(
  { searchParams: { genre } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `Results for ${genre} - ${(await parent).title?.absolute}`,
  };
}

export default Genre;
