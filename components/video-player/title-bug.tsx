import Link from "next/link";

import { getMovieDetailLink, getTvDetailLink } from "@/lib/nav";

type Props = {
  titleId: number;
  title: string;
  type: "movie" | "tv";
};

function TitleBug({ titleId, title, type }: Props) {
  return (
    <Link
      className="relative z-[100] inline-flex items-center gap-3 opacity-60 pt-5 pr-3 pb-3 pl-6 hover:opacity-100 hover:cursor-pointer"
      href={
        type === "movie"
          ? getMovieDetailLink(titleId)
          : getTvDetailLink(titleId)
      }
    >
      <span
        className="relative before:relative 
            before:border-solid before:content-[''] before:border-t-[3px] before:border-r-[3px] before:border-b-0 before:border-l-0
            before:inline-block before:align-top before:w-[17px] 
            before:h-[17px] before:top-[4.5px] before:left-[3px] before:rotate-[-135deg]"
      />
      <h1 className="capitalize text-[27px] leading-[56px] tracking-[.25px]">
        {title}
      </h1>
    </Link>
  );
}

export default TitleBug;
