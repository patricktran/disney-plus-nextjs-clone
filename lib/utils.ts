import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Movie, MovieDetail, TV, TvDetail } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImagePath(imagePath?: string, fullSize?: boolean) {
  return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "/missing-image.png";
}

export function isMovie(media: Movie | TV): media is Movie {
  return media.media_type === "movie" || !media.media_type; // assume movie by default
}

export function isMovieDetails(
  media: MovieDetail | TvDetail
): media is MovieDetail {
  return "title" in media;
}

export const delay = (timeMs: number) =>
  new Promise((res) => setTimeout(res, timeMs));
