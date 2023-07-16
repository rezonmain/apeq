"use client";
import { Button } from "@/components/ui/Button";
import { usePubSub } from "@/hooks/usePubSub";
import { PubSubEvents } from "@/pubsub";
import { useRouter } from "next/navigation";
import { useState } from "react";

type QRWebsocketProps = {
  channel: string;
};
type Conditional = { pub?: true; sub?: never } | { pub?: never; sub?: true };
type Props = QRWebsocketProps & Conditional;

export default function QRWebsocket({ channel, pub }: Props) {
  return pub ? <Pub channel={channel} /> : <Sub channel={channel} />;
}

const Pub = ({ channel }: { channel: string }) => {
  const { pub } = usePubSub({ channel });
  return (
    <Button
      variant="primary-outline"
      onClick={() => pub["client-test"]("deeez nuuuuts")}
    >
      Client test
    </Button>
  );
};

const Sub = ({ channel }: { channel: string }) => {
  const router = useRouter();
  const [clientTest, setClientTest] = useState("");
  usePubSub({
    channel,
    sub: [
      { e: PubSubEvents.Test, cb: setClientTest },
      {
        e: PubSubEvents.SuccessfulAuth,
        cb: setClientTest,
      },
    ],
  });
  return <span>Client says: {clientTest}</span>;
};
