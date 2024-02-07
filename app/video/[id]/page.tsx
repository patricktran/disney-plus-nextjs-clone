import VideoPlayer from "@/components/video-player";
import { getMovieDetail } from "@/lib/get-movies";

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
    />
  );
}

export default Video;
