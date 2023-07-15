"use client";
import { PubSubEvents } from "@/pubsub";
import Pusher from "pusher-js";
import type { Channel } from "pusher-js";
import { useEffect, useRef } from "react";

interface usePubSubProps {
  token: string;
}

const usePubSub = ({ token }: usePubSubProps) => {
  const channelRef = useRef<Channel>();

  console.log(channelRef);

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY ?? "", {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER ?? "us3",
      forceTLS: true,
    });
    const channel = pusher.subscribe(`private-${token}`);
    channelRef.current = channel;
    return () => pusher.unsubscribe(`private-${token}`);
  }, [token]);

  const pub: Record<PubSubEvents, (data: string) => void> = {
    [PubSubEvents.SuccessfulAuth]: (data: string) =>
      channelRef.current?.trigger(PubSubEvents.SuccessfulAuth, data),
    [PubSubEvents.Test]: (data: string) =>
      channelRef.current?.trigger(PubSubEvents.Test, data),
  };

  const sub: Record<PubSubEvents, (cb: (data: string) => void) => void> = {
    [PubSubEvents.SuccessfulAuth]: (cb) =>
      channelRef.current?.bind(PubSubEvents.SuccessfulAuth, cb),
    [PubSubEvents.Test]: (cb) =>
      channelRef.current?.bind(PubSubEvents.Test, cb),
  };

  return { pub, sub };
};

export { usePubSub };
