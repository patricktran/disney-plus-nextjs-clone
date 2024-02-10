import {
  Genres,
  SearchResults,
  MovieDetail,
  TvSearchResults,
  TvDetail,
  SeasonDetail,
} from "./types";

const baseUrl = "https://api.themoviedb.org/3";
type GenreId = string;

async function fetchFromTMDB<T>(url: URL, cacheTime?: number) {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as T;
  return data;
}

async function fetchMoviesFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");

  if (!url.searchParams.get("sort_by"))
    url.searchParams.set("sort_by", "popularity.desc");

  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24, // 24 hours
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;
  return data.results;
}

export function getUpcomingMovies() {
  const url = new URL(`${baseUrl}/discover/movie`);
  url.searchParams.set("certification_country", "US");
  url.searchParams.set("region", "US");
  url.searchParams.set(
    "release_date.gte",
    new Date().toISOString().replace(/T.*/, "").split("-").join("-")
  );
  url.searchParams.set("vote_average.gte", "0");

  url.searchParams.set("vote_count.gte", "0");
  url.searchParams.set("watch_region", "US");
  url.searchParams.set("with_release_type", "3");
  url.searchParams.set("with_runtime.gte", "0");
  return fetchMoviesFromTMDB(url);
}

export function getTopRatedMovies() {
  return fetchMoviesFromTMDB(new URL(`${baseUrl}/movie/top_rated`));
}

export function getPopularMovies() {
  return fetchMoviesFromTMDB(new URL(`${baseUrl}/movie/popular`));
}

export function getTrendingMovies() {
  return fetchMoviesFromTMDB(new URL(`${baseUrl}/trending/movie/day`));
}

export function getDiscoverMovies(id?: GenreId, keywords?: string) {
  const url = new URL(`${baseUrl}/discover/movie`);

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);
  return fetchMoviesFromTMDB(url);
}

export function getSearchedMovies(term: string) {
  const url = new URL(`${baseUrl}/search/movie`);
  url.searchParams.set("query", term);
  return fetchMoviesFromTMDB(url);
}

export function getGenres() {
  return fetchFromTMDB<Genres>(
    new URL(`${baseUrl}/genre/movie/list?language=en`)
  );
}

export function getMovieDetail(id: string) {
  return fetchFromTMDB<MovieDetail>(
    new URL(`${baseUrl}/movie/${id}?language=en-US`)
  );
}

export async function getTrendingTvShows(timeWindow: "day" | "week" = "day") {
  const res = await fetchFromTMDB<TvSearchResults>(
    new URL(`${baseUrl}/trending/tv/${timeWindow}?language=en-US`)
  );
  return res.results;
}

export function getTvDetail(id: string) {
  return fetchFromTMDB<TvDetail>(new URL(`${baseUrl}/tv/${id}?language=en-US`));
}

export function getTvSeason(tvSeriesId: number, season: number) {
  return fetchFromTMDB<SeasonDetail>(
    new URL(`${baseUrl}/tv/${tvSeriesId}/season/${season}?language=en-US`)
  );
}
