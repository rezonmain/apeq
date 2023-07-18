import { useRef, useState } from "react";
import YouTubePlayer from "youtube-player";
import { Options } from "youtube-player/dist/types";

type useYoutubePlayerProps = {
  /**
   * The id of the element where the player will be rendered
   */
  id: string;
  options?: Options;
};

const useYoutubePlayer = ({ id, options }: useYoutubePlayerProps) => {
  const player = useRef(YouTubePlayer(id, options));

  return { player: player.current };
};

export { useYoutubePlayer };
