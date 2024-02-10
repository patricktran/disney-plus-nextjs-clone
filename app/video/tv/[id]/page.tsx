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

export default Video;
