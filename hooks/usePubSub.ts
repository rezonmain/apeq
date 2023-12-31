"use client";
import { PubSubEvents } from "@/pubsub";
import Pusher from "pusher-js";
import type { Channel } from "pusher-js";
import { useEffect, useRef, useState } from "react";

export type SubCallbacks = {
  e: PubSubEvents;
  cb: (data: string) => void;
};

type PubFns = Record<PubSubEvents, (data: string) => void>;

interface usePubSubProps {
  channel: string;
  sub?: SubCallbacks[] | (() => SubCallbacks[]);
}

const usePubSub = ({ channel: token, sub }: usePubSubProps) => {
  const channelRef = useRef<Channel>();
  const pubRef = useRef<PubFns>(
    Object.values(PubSubEvents).reduce(
      (acc, e) => ({
        ...acc,
        [e]: (data: string) => channelRef.current?.trigger(e, data),
      }),
      {} as PubFns
    )
  );

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
      typeof sub === "object"
        ? sub.forEach(({ e, cb }) => channel.bind(e, cb))
        : sub().forEach(({ e, cb }) => channel.bind(e, cb));
    }
    channelRef.current = channel;
    return () => pusher.unsubscribe(`private-${token}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, JSON.stringify(sub)]);

  return { pub: pubRef.current };
};

export { usePubSub };
