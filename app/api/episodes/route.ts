import { type NextRequest } from "next/server";

import { getTvSeason } from "@/lib/get-media";
import { delay } from "@/lib/utils";

/**
 * This next api route is created so that it can be called by a client-component without throwing a CORs error
 */
export async function GET(request: NextRequest) {
  const fakeDelay = Math.floor(Math.random() * 1000);
  await delay(fakeDelay < 500 ? 500 : fakeDelay);
  const seriesId = request.nextUrl.searchParams.get("seriesId");
  const season = request.nextUrl.searchParams.get("season");

  const res = await getTvSeason(
    parseInt(seriesId ?? "0"),
    parseInt(season ?? "0")
  );

  // only return episodes that have aired
  const episodes = res.episodes.filter(
    (e) => new Date(e.air_date) < new Date()
  );

  return Response.json({
    episodes,
  });
}
