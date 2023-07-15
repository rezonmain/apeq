import { NextResponse } from "next/server";
import Pusher from "pusher";

// https://pusher.com/docs/channels/server_api/authorizing-users/#implementing-the-authorization-endpoint-for-a-private-channel

const pusher = new Pusher({
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID ?? "",
  key: process.env.NEXT_PUBLIC_PUSHER_KEY ?? "",
  secret: process.env.PUSHER_SECRET ?? "",
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER ?? "us3",
  useTLS: true,
});

export async function POST(req: Request) {
  const data = await req.formData();
  const socketId = data.get("socket_id")?.toString();
  const channel = data.get("channel_name")?.toString();
  if (!socketId || !channel) {
    return new Response("Missing socket_id or channel_name", {
      status: 403,
    });
  }
  const auth = pusher.authorizeChannel(socketId, channel);
  return NextResponse.json(auth);
}
