"use client";

import { useRef, useState, useCallback } from "react";
import {
  Player as ShakaPlayer,
  polyfill as ShakaPolyfill,
  ui as ShakaUI,
  // @ts-ignore
} from "shaka-player/dist/shaka-player.ui";
import "shaka-player/dist/controls.css";
import "shaka-player-ui-controls/dist/main.css";

import uiConfig from "./config/ui";

type Props = {
  url: string;
  title?: string;
  onTitleBugClick?: () => void;
};

function VideoPlayer({ url, title, onTitleBugClick }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  //const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  //const [player, setPlayer] = useState<ShakaPlayer>(null);
  const [videoPaused, setVideoPaused] = useState(false);
  const [initOverlay, setInitOverlay] = useState(false);
  const [audioOptionsShown, setAudioOptionsShown] = useState(false);

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
      setIsVisible(true);
      setInitOverlay(true);
    }, 500);
  }, []);

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

        shakPlayer.addEventListener("pause", setIsPaused);
        shakPlayer.addEventListener("play", unSetIsPaused);
        shakPlayer.addEventListener("loadeddata", onLoadedData);
      }
    },

    [onLoadedData, setIsPaused, unSetIsPaused, url]
  );

  /* don't need this since we are using SSR and not SPA
  useEffect(() => {
    return () => {
      console.log("calling cleanup", player);
      player?.removeEventListener("pause", setIsPaused);
      player?.removeEventListener("play", unSetIsPaused);
      player?.removeEventListener("loadeddata", onLoadedData);
      player?.destroy();
    };
  }, [onLoadedData, player, setIsPaused, unSetIsPaused]);
  */

  return (
    <div ref={containerRef}>
      <video ref={videoRef} autoPlay />
    </div>
  );
}

export default VideoPlayer;
