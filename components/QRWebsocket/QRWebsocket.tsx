"use client";
import { Button } from "@/components/ui/Button";
import { usePubSub } from "@/hooks/usePubSub";
import { PubSubEvents } from "@/pubsub";
import { useState } from "react";

type QRWebsocketProps = {
  token: string;
};
type Conditional = { pub?: true; sub?: never } | { pub?: never; sub?: true };
type Props = QRWebsocketProps & Conditional;

export default function QRWebsocket({ token, pub }: Props) {
  return pub ? <Pub token={token} /> : <Sub token={token} />;
}

const Pub = ({ token }: { token: string }) => {
  const { pub } = usePubSub({ token });
  return (
    <Button
      variant="primary-outline"
      onClick={() => pub["client-test"]("deeez nuuuuts")}
    >
      Client test
    </Button>
  );
};

const Sub = ({ token }: { token: string }) => {
  const [clientTest, setClientTest] = useState("");
  usePubSub({
    token,
    sub: [{ e: PubSubEvents.Test, cb: setClientTest }],
  });
  return <span>Client says: {clientTest}</span>;
};
