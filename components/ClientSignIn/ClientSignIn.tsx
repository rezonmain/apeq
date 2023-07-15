"use client";
import { SignIn } from "@clerk/nextjs";
import QRWebsocket from "../QRWebsocket/QRWebsocket";

export default function ClientSignIn({ t }: { t: string | undefined }) {
  return (
    <>
      <div>
        <SignIn />
      </div>
      {t && <QRWebsocket pub token={t} />}
    </>
  );
}
