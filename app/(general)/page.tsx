import BannerCarouselWrapper from "@/components/BannerCarouselWrapper";
import Brands from "@/components/Brands";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

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
        <Brands />
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={trendingMovies} title="Trending" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
