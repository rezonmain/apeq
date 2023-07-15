"use client";
import { PubSubEvents } from "@/pubsub";
import Pusher from "pusher-js";
import type { Channel } from "pusher-js";
import { useEffect, useRef } from "react";

type SubCallbacks = {
  e: PubSubEvents;
  cb: (data: string) => void;
};
interface usePubSubProps {
  token: string;
  sub?: SubCallbacks[];
}

const usePubSub = ({ token, sub }: usePubSubProps) => {
  const channelRef = useRef<Channel>();

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY ?? "", {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER ?? "us3",
      forceTLS: true,
      channelAuthorization: {
        endpoint: "/api/pusher/auth",
        transport: "ajax",
      },
    });

    const channel = pusher.subscribe(`private-${token}`);
    if (sub) {
      sub.forEach(({ e, cb }) => channel.bind(e, cb));
    }
    channelRef.current = channel;
    return () => pusher.unsubscribe(`private-${token}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, JSON.stringify(sub)]);

  const pub: Record<PubSubEvents, (data: string) => void> = {
    [PubSubEvents.SuccessfulAuth]: (data: string) =>
      channelRef.current?.trigger(PubSubEvents.SuccessfulAuth, data),
    [PubSubEvents.Test]: (data: string) =>
      channelRef.current?.trigger(PubSubEvents.Test, data),
  };

  return { pub };
};

export { usePubSub };
