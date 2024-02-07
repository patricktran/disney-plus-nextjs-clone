"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import {
  Player as ShakaPlayer,
  polyfill as ShakaPolyfill,
  ui as ShakaUI,
  // @ts-ignore
} from "shaka-player/dist/shaka-player.ui";
import { cn } from "@/lib/utils";
import useShowOverlayIdle from "./hooks/use-show-overlay-idle";
import uiConfig from "./config/ui";
import CreatePortal from "../CreatePortal";

import "shaka-player/dist/controls.css";
import "shaka-player-ui-controls/dist/main.css";
import Loader from "../loader";
import TitleBug from "./title-bug";
import OverlayLoader from "../overlay-loader";

type Props = {
  url: string;
  titleId: number;
  title: string;
};

function VideoPlayer({ url, title, titleId }: Props) {
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);
  /*const [videoElementRef, setVideoElementRef] = useState<
    HTMLVideoElement | undefined
  >(undefined);*/
  const containerRef = useRef<HTMLDivElement>(null);
  //const [player, setPlayer] = useState<ShakaPlayer>(null);
  // placing inside useState instead of useRef because we want to trigger re-renders
  const [spinnerContainerRef, setSpinnerContainerRef] =
    useState<HTMLDivElement>();
  const [videoPaused, setVideoPaused] = useState(false);
  const [initOverlay, setInitOverlay] = useState(false);

  /* useEffect(() => {
    if (isVisible) {
      ShakaPolyfill.installAll();
      // Initialize shaka player
      const player = new ShakaPlayer(videoRef.current);
      setPlayer(player);

      const play = async () => {
        await player.load(url);

        // Setting up shaka player UI
        const ui = new ShakaUI.Overlay(
          player,
          containerRef.current,
          videoRef.current
        );

        ui.configure(uiConfig); // configure UI
        videoRef.current!.volume = 0.5;
        videoRef.current!.play();
      };

      if (player) {
        play();
      }

      return () => {
        player.destroy();
      };
    }
  }, [url, isVisible]);*/

  /*useEffect(() => {
    function setIsPaused() {
      setVideoPaused(true);
    }

    function unSetIsPaused() {
      setVideoPaused(false);
    }

    function onLoadedData() {
      // add fake delay
      setTimeout(() => {
        setIsVisible(true);
        setInitOverlay(true);
      }, 500);
    }

    var ref = videoRef.current!;

    ref.addEventListener("pause", setIsPaused);
    ref.addEventListener("play", unSetIsPaused);
    ref.addEventListener("loadeddata", onLoadedData);

    return () => {
      ref.removeEventListener("pause", setIsPaused);
      ref.removeEventListener("play", unSetIsPaused);
      ref.removeEventListener("loadeddata", onLoadedData);
    };
  });*/

  const setIsPaused = useCallback(() => {
    setVideoPaused(true);
  }, []);

  const unSetIsPaused = useCallback(() => {
    setVideoPaused(false);
  }, []);

  const onLoadedData = useCallback(() => {
    // add fake delay
    setTimeout(() => {
      setIsPlayerLoaded(true);
      setInitOverlay(true);
    }, 500);
  }, []);

  const showOverlay = useShowOverlayIdle({
    elementRef: containerRef,
  });

  const videoRef = useCallback(
    async (videoElement: HTMLVideoElement) => {
      if (videoElement) {
        ShakaPolyfill.installAll();
        const shakPlayer = new ShakaPlayer(videoElement);

        const play = async () => {
          await shakPlayer.load(url);

          // Setting up shaka player UI
          const ui = new ShakaUI.Overlay(
            shakPlayer,
            containerRef.current,
            videoElement
          );

          ui.configure(uiConfig); // configure UI
          videoElement.volume = 0.5;
          videoElement.play();
        };

        if (shakPlayer) {
          play();
        }

        videoElement.addEventListener("pause", setIsPaused);
        videoElement.addEventListener("play", unSetIsPaused);
        videoElement.addEventListener("loadeddata", onLoadedData);
      }
    },
    [onLoadedData, setIsPaused, unSetIsPaused, url]
  );

  // custom spinner ui
  useEffect(() => {
    if (isPlayerLoaded) {
      const match = containerRef.current!.getElementsByClassName(
        "shaka-spinner-container"
      );

      if (match.length > 0) {
        setSpinnerContainerRef(match[0] as HTMLDivElement);
      }
    }
  }, [isPlayerLoaded]);

  //don't need this since we are using SSR and not SPA
  /*useEffect(() => {
    return () => {
      console.log("calling cleanup", videoElementRef);
      videoElementRef?.removeEventListener("pause", setIsPaused);
      videoElementRef?.removeEventListener("play", unSetIsPaused);
      videoElementRef?.removeEventListener("loadeddata", onLoadedData);
      //videoElementRef?.destroy();
    };
  }, [onLoadedData, videoElementRef, setIsPaused, unSetIsPaused]);*/

  return (
    <>
      <OverlayLoader loading={!isPlayerLoaded} />
      <div
        className={cn(
          "video-player-container relative flex items-center w-full opacity-0 transition-[opacity] duration-[200ms] ease-in-out",
          isPlayerLoaded && "opacity-100"
        )}
        ref={containerRef}
      >
        <video
          className="w-max-[100%] w-full h-max-[100%]"
          ref={videoRef}
          autoPlay
        />
        {isPlayerLoaded && spinnerContainerRef && (
          <CreatePortal portalContainerRef={spinnerContainerRef}>
            <Loader loading={true} />
          </CreatePortal>
        )}
        <CreatePortal portalContainerRef={containerRef.current!}>
          <div
            className={cn(
              `w-full h-full absolute top-0 bg-[rgba(0,0,0,.4)] opacity-0 transition-[opacity] duration-[250ms] ease-in-out`,
              (showOverlay || videoPaused) && "opacity-100"
            )}
          >
            <TitleBug title={title} titleId={titleId} />
          </div>
        </CreatePortal>
      </div>
    </>
  );
}

export default VideoPlayer;
