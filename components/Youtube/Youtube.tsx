import { useControlledYoutubePlayer } from "@/hooks/useYoutubePlayer";
import { useRef } from "react";

type YoutubeProps = {
  webSocketChannel: string;
  activeList: string;
};

export default function Youtube({
  webSocketChannel,
  activeList,
}: YoutubeProps) {
  const ytRef = useRef<HTMLDivElement>(null);
  useControlledYoutubePlayer(ytRef, webSocketChannel, {
    playerVars: {
      list: activeList,
    },
  });

  return <div id="yt" ref={ytRef}></div>;
}
