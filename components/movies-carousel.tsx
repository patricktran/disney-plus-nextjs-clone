import Link from "next/link";

import { Movie } from "@/lib/types";
import { cn } from "@/lib/utils";

import MovieCard from "./movie-card";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function MoviesCarousel({ title, movies, isVertical }: Props) {
  return (
    <div className="z-20">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
      <div
        className={cn(
          "flex space-x-6 overflow-scroll px-5 lg:px-10 pt-4 pb-12 scrollbar-hide snap-mandatory snap-x",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? movies?.map((movie) => (
              <Link
                key={movie.id}
                href={`/detail/movie/${movie.id}`}
                className="flex flex-col space-y-2 mb-5 items-start lg:flex-row space-x-5"
              >
                <MovieCard movie={movie} size="large" />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title}{" "}
                    {movie.release_date && (
                      <>({movie.release_date?.split("-")[0]})</>
                    )}
                  </p>
                  <hr className="mb-3" />
                  <p className="line-clamp-4">{movie.overview}</p>
                </div>
              </Link>
            ))
          : movies?.map((movie) => (
              <Link
                className="snap-center snap-always"
                key={movie.id}
                href={`/detail/movie/${movie.id}`}
              >
                <MovieCard movie={movie} />
              </Link>
            ))}
      </div>
    </div>
  );
}

export default MoviesCarousel;
