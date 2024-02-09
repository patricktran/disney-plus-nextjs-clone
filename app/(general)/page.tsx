import { Suspense } from "react";

import BannerCarouselWrapper from "@/components/banner-carousel-wrapper";
import Brands from "@/components/brands";
import { BrandsLoader } from "@/components/brands-loader";
import MediaCarousel from "@/components/media-carousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
  getTrendingTvShows,
} from "@/lib/get-media";

export default async function Home() {
  const upcomingMoviesReq = getUpcomingMovies();
  const topRatedMoviesReq = getTopRatedMovies();
  const popularMoviesReq = getPopularMovies();
  const trendingMoviesReq = getTrendingMovies();
  const trendingTvShowsReq = getTrendingTvShows();

  const [
    upcomingMovies,
    topRatedMovies,
    popularMovies,
    trendingMovies,
    trendingTvShows,
  ] = await Promise.all([
    upcomingMoviesReq,
    topRatedMoviesReq,
    popularMoviesReq,
    trendingMoviesReq,
    trendingTvShowsReq,
  ]);

  return (
    <main className="">
      <div className="flex flex-col mb-12">
        <BannerCarouselWrapper />
        <Suspense fallback={<BrandsLoader skeletons={5} />}>
          <Brands />
        </Suspense>
        <MediaCarousel media={upcomingMovies} title="Upcoming Movies" />
        <MediaCarousel media={trendingMovies} title="Trending Movies" />
        <MediaCarousel media={trendingTvShows} title="Trending TV" />
        <MediaCarousel media={topRatedMovies} title="Top Rated Movies" />
        <MediaCarousel media={popularMovies} title="Popular Movies" />
      </div>
    </main>
  );
}
