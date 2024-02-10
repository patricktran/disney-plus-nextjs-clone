export function getMovieDetailLink(id: number) {
  return `/detail/movie/${id}`;
}

export function getMovieVideoLink(id: number) {
  return `/video/movie/${id}`;
}

export function getTvDetailLink(id: number) {
  return `/detail/tv/${id}`;
}

export function getTvVideoLink(id: number) {
  return `/video/tv/${id}`;
}

export function getSearchLink(term: string) {
  return `/search/${term}`;
}

export function getGenreLink(id: number, name: string) {
  return `/genre/${id}?genre=${name}`;
}
