export type Brand = {
  id: string;
  imagePath: string;
  videoPath: string;
};

export type SearchResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type TvSearchResults = {
  page: number;
  results: TV[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TV = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name: string;
  media_type: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
};

export type MovieDetail = Omit<Movie, "genre_ids"> & {
  genres: Genre[];
  runtime: number;
  revenue: number;
  status: string;
  tagline: string;
};

export type TvDetail = Omit<TV, "genre_ids"> & {
  number_of_seasons: number;
  seasons: Season[];
  genres: Genre[];
  status: string;
  tagline: string;
  type: string;
};

export type Season = {
  id: number;
  name: string;
  overview: string;
  air_date: string;
  season_number: number;
  episode_count: number;
};

export type SeasonDetail = {
  id: number;
  air_date: string;
  name: string;
  season_number: number;
  episodes: Episode[];
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  overview: string;
  runtime: number;
  season_number: number;
  episode_number: number;
  still_path: string;
};
