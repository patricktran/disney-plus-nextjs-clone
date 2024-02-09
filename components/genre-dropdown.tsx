import { getGenres } from "@/lib/get-media";

import GenreMenu from "./genre-menu";

async function GenreDropdown() {
  const data = await getGenres();
  // client component
  return <GenreMenu data={data} />;
}

export default GenreDropdown;
