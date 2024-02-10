import Link from "next/link";

import { getMovieDetailLink, getTvDetailLink } from "@/lib/nav";
import { Movie, TV } from "@/lib/types";
import { cn, isMovie } from "@/lib/utils";

import MediaCard from "./media-card";

type Props = {
  title?: string;
  media: Movie[] | TV[];
  isVertical?: boolean;
};

function MediaCarousel({ title, media, isVertical }: Props) {
  return (
    <div className="z-20">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
      <div
        className={cn(
          "flex space-x-6 overflow-scroll px-8 lg:px-10 pt-4 pb-12 scrollbar-hide snap-mandatory snap-x",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? media?.map((m) => (
              <Link
                key={m.id}
                href={
                  isMovie(m) ? getMovieDetailLink(m.id) : getTvDetailLink(m.id)
                }
                className="flex flex-col space-y-8 mb-5 items-start lg:flex-row space-x-5"
              >
                <MediaCard
                  media={{
                    id: m.id,
                    imagePath: m.backdrop_path || m.poster_path,
                  }}
                  size="large"
                />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {isMovie(m) ? m.title : m.name}{" "}
                    {isMovie(m) && m.release_date && (
                      <>({m.release_date?.split("-")[0]})</>
                    )}
                    {!isMovie(m) && m.first_air_date && (
                      <>({m.first_air_date?.split("-")[0]})</>
                    )}
                  </p>
                  <hr className="mb-3" />
                  <p className="line-clamp-4">{m.overview}</p>
                </div>
              </Link>
            ))
          : media?.map((m) => (
              <Link
                className="snap-center snap-always"
                key={m.id}
                href={
                  isMovie(m) ? getMovieDetailLink(m.id) : getTvDetailLink(m.id)
                }
              >
                <MediaCard
                  media={{
                    id: m.id,
                    title: isMovie(m) ? m.title : m.name,
                    imagePath: m.backdrop_path || m.poster_path,
                  }}
                />
              </Link>
            ))}
      </div>
    </div>
  );
}

export default MediaCarousel;
