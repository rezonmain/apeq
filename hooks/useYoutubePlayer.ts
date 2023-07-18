"use client";
import { PubSubEvents } from "@/pubsub";
import { RefObject, useEffect, useRef, useState } from "react";
import YouTubePlayer from "youtube-player";
import {
  Options,
  YouTubePlayer as IYouTubePlayer,
} from "youtube-player/dist/types";
import { SubCallbacks, usePubSub } from "./usePubSub";
import { useEssentials } from "./useEssentials";

const useControlledYoutubePlayer = (
  ref?: RefObject<HTMLElement>,
  channel?: string,
  options?: Options
) => {
  const { get } = useEssentials();
  const loadedRef = useRef(false);
  const player = useRef<IYouTubePlayer>();
  const [callbacks, setCallbacks] = useState<SubCallbacks[]>();

  usePubSub({
    channel: channel ?? get("uid"),
    sub: callbacks,
  });

  useEffect(() => {
    if (!ref?.current) return;
    player.current = YouTubePlayer(ref.current.id, options);
    setCallbacks([
      { e: PubSubEvents.Pause, cb: player.current?.pauseVideo },
      { e: PubSubEvents.Play, cb: player.current?.playVideo },
    ]);
    () => player.current?.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { player: player.current, loaded: loadedRef.current };
};

export { useControlledYoutubePlayer };
