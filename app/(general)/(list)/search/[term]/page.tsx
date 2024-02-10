import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import MediaCarousel from "@/components/media-carousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/get-media";

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
      <MediaCarousel title="Movies" media={movies} isVertical />
      <MediaCarousel title="You may also like" media={popularMovies} />
    </>
  );
}

export async function generateMetadata(
  { params: { term } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `Results for ${decodeURI(term)} - ${(await parent).title?.absolute}`,
  };
}

export default SearchPage;
