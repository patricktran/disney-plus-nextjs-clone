import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);
  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <>
      <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
      <MoviesCarousel title="Movies" movies={movies} isVertical />
      <MoviesCarousel title="You may also like" movies={popularMovies} />
    </>
  );
}

export default SearchPage;
