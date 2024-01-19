import { getDiscoverMovies } from "@/lib/getMovies";
import BannerCarousel from "./BannerCarousel";

type Props = {
  id?: string;
  keywords?: string;
};

async function BannerCarouselWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);

  //client component
  //https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#moving-client-components-down-the-tree
  //If you fetch data in a Server Component, you may want to pass data down as props to Client Components.
  //Props passed from the Server to Client Components need to be serializable by React.
  return <BannerCarousel movies={movies} />;
}

export default BannerCarouselWrapper;
