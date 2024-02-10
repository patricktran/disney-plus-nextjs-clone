import { Metadata, ResolvingMetadata } from "next";

import VideoPlayer from "@/components/video-player";
import { getTvDetail } from "@/lib/get-media";

type Props = {
  params: {
    id: string;
  };
};

async function Video({ params: { id } }: Props) {
  const details = await getTvDetail(id);

  return (
    <VideoPlayer
      titleId={details.id}
      title={details.name}
      url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      type="tv"
    />
  );
}

export async function generateMetadata(
  { params: { id } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // dont worry about calling this fetch again - nextjs dedups/caches
  const details = await getTvDetail(id);

  return {
    title: `Playing: ${details.name} - ${(await parent).title?.absolute}`,
    description: details.overview,
  };
}

export default Video;
