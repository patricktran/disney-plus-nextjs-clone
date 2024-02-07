"use client";
import { useState } from "react";
import Image from "next/image";
import useScrollPosition from "@react-hook/window-scroll";
import { cn } from "@/lib/utils";

type Props = {
  imagePath: string;
  alt: string;
};

function BackgroundImage({ imagePath, alt }: Props) {
  const scrollY = useScrollPosition();
  const bgOpacity = Math.max(1 - (scrollY / 100) * 0.3, 0.2);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      style={{ opacity: bgOpacity }}
      className={cn(
        `fixed inset-0 -z-10 invisible`,
        isImageLoaded && "animate-[fadeIn_450ms_ease-in] visible"
      )}
    >
      <div className="relative">
        <Image
          className="w-screen"
          src={imagePath}
          alt={alt}
          width={1920}
          height={1080}
          onLoad={(e) => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-vingette"></div>
      </div>
    </div>
  );
}

export default BackgroundImage;
