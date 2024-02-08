import { Suspense } from "react";

import BannerCarouselWrapper from "@/components/banner-carousel-wrapper";
import Brands from "@/components/brands";
import { BrandsLoader } from "@/components/brands-loader";
import MoviesCarousel from "@/components/movies-carousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "@/lib/get-movies";

export default async function Home() {
  const upcomingMoviesReq = getUpcomingMovies();
  const topRatedMoviesReq = getTopRatedMovies();
  const popularMoviesReq = getPopularMovies();
  const trendingMoviesReq = getTrendingMovies();

  const [upcomingMovies, topRatedMovies, popularMovies, trendingMovies] =
    await Promise.all([
      upcomingMoviesReq,
      topRatedMoviesReq,
      popularMoviesReq,
      trendingMoviesReq,
    ]);

  return (
    <main className="">
      <div className="flex flex-col mb-12">
        <BannerCarouselWrapper />
        <Suspense fallback={<BrandsLoader skeletons={5} />}>
          <Brands />
        </Suspense>
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={trendingMovies} title="Trending" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
