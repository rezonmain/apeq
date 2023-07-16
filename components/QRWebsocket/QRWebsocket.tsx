"use client";
import { useLocalStore } from "@/hooks/useLocalStore";
import { usePubSub } from "@/hooks/usePubSub";
import { PubSubEvents } from "@/pubsub";
import { useRouter } from "next/navigation";

type QRWebsocketProps = {
  channel: string;
};

export default function QRWebsocket({ channel }: QRWebsocketProps) {
  return <Sub channel={channel} />;
}

const Sub = ({ channel }: { channel: string }) => {
  const { store } = useLocalStore();
  const router = useRouter();
  usePubSub({
    channel,
    sub: [
      { e: PubSubEvents.Test, cb: (msg) => console.log(msg) },
      {
        e: PubSubEvents.SuccessfulAuth,
        cb: (userId) => {
          store.uid = userId;
          router.push("/");
        },
      },
    ],
  });
  return <></>;
};
