import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";

import { getMovieDetail } from "@/lib/get-media";

// prevent a document undefined error
// https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr
const VideoPlayer = dynamic(() => import("@/components/video-player"), {
  ssr: false,
});

type Props = {
  params: {
    id: string;
  };
};

async function Video({ params: { id } }: Props) {
  const details = await getMovieDetail(id);

  return (
    <VideoPlayer
      titleId={details.id}
      title={details.title}
      url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      type="movie"
    />
  );
}

export async function generateMetadata(
  { params: { id } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // dont worry about calling this fetch again - nextjs dedups/caches
  const details = await getMovieDetail(id);

  return {
    title: `${details.title} - ${(await parent).title?.absolute}`,
    description: details.overview,
  };
}

export default Video;
