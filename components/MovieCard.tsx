import Image from "next/image";
import { Movie } from "@/lib/types";
import { getImagePath, cn } from "@/lib/utils";
type Size = "medium" | "large";

type Props = {
  movie: Movie;
  size?: Size;
};

function MovieCard({ movie, size = "medium" }: Props) {
  return (
    <div className="relative flex-shrink-0 min-w-[240px] cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      <div className="absolute z-10 inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-dark-background/80" />
      <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>
      <Image
        className={cn(
          "w-fit lg:min-w-[300px] h-[168px] object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm",
          size === "large" && "lg:min-w-[375px] h-48"
        )}
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />
    </div>
  );
}

export default MovieCard;
