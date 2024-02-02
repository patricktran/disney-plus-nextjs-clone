"use client";
import Link from "next/link";
import { Movie } from "@/lib/types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

Autoplay.globalOptions = {
  delay: 8000,
};

function BannerCarousel({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay(),
  ]);

  return (
    <div className="overflow-hidden relative " ref={emblaRef}>
      <div className="flex animate-[fadeIn_450ms_ease-in]">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full min-w-0 relative">
            <Link href={`/detail/movie/${movie.id}`}>
              <div className="relative">
                <Image
                  className="w-full"
                  key={movie.id}
                  src={getImagePath(movie.backdrop_path, true)}
                  alt=""
                  width={1920}
                  height={1080}
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-dark-background"></div>
              </div>
              <div className="hidden lg:inline absolute mt-0 top-0 pt-60 xl:pt-80 left-0 bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white z-20">
                <h2 className="text-5xl font-bold max-w-xl z-50 text-shadow-sm shadow-gray-900">
                  {movie.title}
                </h2>
                <p className="max-w-xl line-clamp-3 text-shadow shadow-gray-900">
                  {movie.overview}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerCarousel;
