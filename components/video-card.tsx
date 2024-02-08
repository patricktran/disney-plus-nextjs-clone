import Image from "next/image";

type Props = {
  imagePath: string;
  videoPath: string;
};

function VideoCard({ videoPath, imagePath }: Props) {
  return (
    <div className="group relative flex-shrink-0">
      {/* <div className="absolute z-10 inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-dark-background/80 rounded-lg border-2 border-[#f9f9f9]/10 " /> */}
      <div className="video-card">
        <Image
          className="absolute inset-0 object-cover z-10 w-full h-full"
          src={imagePath}
          width={320}
          height={240}
          alt=""
        />
        <video
          className="absolute scale-[1.1] w-[105%] h-[105%] z-0 opacity-0 group-hover:opacity-100 inset-0"
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
        >
          <source src={videoPath} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoCard;
