import Image from "next/image";

import { getImagePath, cn } from "@/lib/utils";
type Size = "small" | "medium" | "large";

type Props = {
  media: {
    id: number;
    title: string;
    overview?: string;
    imagePath?: string;
  };
  size?: Size;
  displayMode?: "simple" | "episode";
};

function MediaCard({ media, size = "medium", displayMode = "simple" }: Props) {
  return (
    <div
      className={cn(
        "relative flex-shrink-0 max-w-[240px] cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg",
        size === "medium" && "max-w-[300px]",
        size === "large" && "max-w-[375px]"
      )}
    >
      <div
        className={cn(
          "absolute z-10 inset-0",
          displayMode === "simple" &&
            "bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-dark-background/80"
        )}
      />
      {displayMode === "simple" && (
        <p className="absolute z-20 bottom-5 left-5 text-shadow-sm shadow-gray-900">
          {media.title}
        </p>
      )}
      <Image
        className={cn(
          "w-fit min-w-[240px] h-[134px] object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm",
          size === "medium" && "min-w-[300px] h-[168px]",
          size === "large" && "min-w-[375px] h-48"
        )}
        src={getImagePath(media.imagePath)}
        alt={media.title}
        width={1920}
        height={1080}
        key={media.id}
      />
      {displayMode === "episode" && (
        <div className="flex flex-col gap-2 mt-3">
          <p className="text-shadow-sm shadow-gray-900">{media.title}</p>
          <p className="text-slate-400 text-shadow-sm shadow-gray-900 line-clamp-3 text-xs">
            {media.overview}
          </p>
        </div>
      )}
    </div>
  );
}

export default MediaCard;
