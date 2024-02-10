import React from "react";

import { Play, Plus, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getMovieVideoLink, getTvVideoLink } from "@/lib/nav";
import { MovieDetail, TvDetail } from "@/lib/types";
import { isMovieDetails } from "@/lib/utils";

type Props = {
  details: MovieDetail | TvDetail;
};

function MetaInfo({ details }: Props) {
  const releaseYear = isMovieDetails(details)
    ? details.release_date?.split("-")?.[0]
    : details.first_air_date?.split("-")?.[0];

  const genres = details.genres.map((g) => g.name);
  const numSeasons = !isMovieDetails(details) ? details.number_of_seasons : 0;

  return (
    <article className="p-10 space-y-4 text-white">
      <h1 className="text-5xl font-bold max-w-xl text-shadow-sm shadow-gray-900">
        {isMovieDetails(details) ? details.title : details.name}
      </h1>
      <div className="text-sm max-w-xl text-shadow shadow-gray-900 flex flex-row gap-1.5 items-center">
        <span>{releaseYear}</span>
        {numSeasons > 0 && (
          <>
            <span className="rounded-full h-1.5 w-1.5 bg-white"></span>
            <span>{numSeasons} seasons</span>
          </>
        )}
        {genres.length > 0 && (
          <>
            <span className="rounded-full h-1.5 w-1.5 bg-white"></span>
            <span>{genres.join(", ")}</span>
          </>
        )}
      </div>
      <div className="pt-6 flex gap-6">
        <Link
          href={
            isMovieDetails(details)
              ? getMovieVideoLink(details.id)
              : getTvVideoLink(details.id)
          }
        >
          <Button
            className="flex gap-1.5 items-center text-base font-light"
            size={"lg"}
          >
            <Play fill="#000" /> PLAY
          </Button>
        </Link>
        <Button
          className="flex gap-1.5 items-center text-base font-light border-white border-[1px] bg-black bg-opacity-35 hover:bg-black hover:bg-opacity-55"
          size={"lg"}
          variant={"ghost"}
        >
          <Play fill="#fff" /> TRAILER
        </Button>
        <Plus
          className="bg-black/60 ring-1 rounded-full ring-white"
          size={38}
          strokeWidth={1}
        />
        <Users
          className="bg-black/60 ring-1 rounded-full ring-white"
          size={38}
          strokeWidth={1}
        />
      </div>
      <p className="pt-10 max-w-xl text-xl text-shadow shadow-gray-900 capitalize font-bold italic">
        {details.tagline ?? ""}
      </p>
      <p className="max-w-3xl text-xl text-gray-200 text-shadow shadow-gray-900">
        {details.overview}
      </p>
      <div className="pt-10"></div>
    </article>
  );
}

export default MetaInfo;
