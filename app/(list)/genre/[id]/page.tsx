import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";

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
      <MoviesCarousel title="Genre" movies={movies} isVertical />
    </>
  );
}

export default Genre;
