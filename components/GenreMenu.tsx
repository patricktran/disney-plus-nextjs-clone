"use client";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Genres } from "@/lib/types";

function GenreMenu({ data }: { data: Genres }) {
  //need to useState - otherwise clicking the Link in DropdownMenuItem won't close the DropdownMenu
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={(open) => setOpen(open)}>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genre <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-80 overflow-y-auto scrollbar-hide">
        {data.genres.map((genre) => (
          <DropdownMenuItem key={genre.id} onClick={() => setOpen(false)}>
            <Link
              className="w-full block"
              href={`/genre/${genre.id}?genre=${genre.name}`}
            >
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreMenu;
