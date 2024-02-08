import { type NextRequest } from "next/server";

import { Brand } from "@/lib/types";

const Brands = [
  {
    id: "disney",
    imagePath: `${process.env.HOST}/brands/disney-brand.png`,
    videoPath: `${process.env.HOST}/videos/disney.mp4`,
  },
  {
    id: "pixar",
    imagePath: `${process.env.HOST}/brands/pixar-brand.png`,
    videoPath: `${process.env.HOST}/videos/pixar.mp4`,
  },
  {
    id: "marvel",
    imagePath: `${process.env.HOST}/brands/marvel-brand.png`,
    videoPath: `${process.env.HOST}/videos/marvel.mp4`,
  },
  {
    id: "starwars",
    imagePath: `${process.env.HOST}/brands/star-wars-brand.png`,
    videoPath: `${process.env.HOST}/videos/star-wars.mp4`,
  },
  {
    id: "natgeo",
    imagePath: `${process.env.HOST}/brands/nat-geo-brand.png`,
    videoPath: `${process.env.HOST}/videos/nat-geo.mp4`,
  },
] as Brand[];

const delay = (timeMs: number) => new Promise((res) => setTimeout(res, timeMs));

export async function GET(request: NextRequest) {
  const fakeDelay = Math.floor(Math.random() * 1000) + 150;
  await delay(fakeDelay);
  return Response.json(Brands);
}
