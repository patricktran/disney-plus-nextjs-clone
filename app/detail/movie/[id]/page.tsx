import React from "react";
import { getMovieDetail } from "@/lib/getMovies";
import { getImagePath } from "@/lib/utils";
import BackgroundImage from "./components/BackgroundImage";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

type Props = {
  params: {
    id: string;
  };
};

async function Detail({ params: { id } }: Props) {
  const details = await getMovieDetail(id);
  console.log(details);

  const releaseYear = details.release_date?.split("-")?.[0];
  const genres = details.genres.map((g) => g.name);

  return (
    <main className="min-h-screen">
      <BackgroundImage
        imagePath={getImagePath(details.backdrop_path, true)}
        alt={details.title}
      />
      <div className="absolute mt-0 top-0 pt-52 left-0 p-10 space-y-4 text-white ">
        <h1 className="text-5xl font-bold max-w-xl text-shadow-sm shadow-gray-900">
          {details.title}
        </h1>
        <p className="text-sm max-w-xl text-shadow shadow-gray-900 flex flex-row gap-1.5 items-center">
          {releaseYear}{" "}
          <span className="rounded-full h-1.5 w-1.5 bg-white"></span>{" "}
          {genres.join(", ")}
        </p>
        <div className="pt-6 flex gap-6">
          <Button
            className="flex gap-1.5 items-center text-base font-light"
            size={"lg"}
          >
            <Play fill="#000" /> PLAY
          </Button>
          <Button
            className="flex gap-1.5 items-center text-base font-light border-white border-[1px] bg-black bg-opacity-35 hover:bg-black hover:bg-opacity-55"
            size={"lg"}
            variant={"ghost"}
          >
            <Play fill="#fff" /> TRAILER
          </Button>
        </div>
        <p className="pt-10 max-w-xl text-xl text-shadow shadow-gray-900 capitalize font-bold italic">
          {details.tagline ?? ""}
        </p>
        <p className="max-w-xl text-xl text-gray-200 text-shadow shadow-gray-900">
          {details.overview}
        </p>
      </div>
    </main>
  );
}

export default Detail;
