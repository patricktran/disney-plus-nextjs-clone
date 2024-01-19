import { getGenres } from "@/lib/getMovies";
import GenreMenu from "./GenreMenu";

async function GenreDropdown() {
  const data = await getGenres();
  //client component
  return <GenreMenu data={data} />;
}

export default GenreDropdown;
