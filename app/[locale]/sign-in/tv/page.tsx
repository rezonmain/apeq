import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { QRChallenge } from "@/services/QRChallenge";
import Code from "@/components/ui/Code/Code";
import { QRCodeSVG } from "qrcode.react";
import GoBackButton from "@/components/GoBackButton/GoBackButton";
import QRWebsocket from "@/components/QRWebsocket/QRWebsocket";
import { Net } from "@/services/Net";

export default function SignInTv() {
  const t = useTranslations("SignInTv");
  const qr = new QRChallenge(6);
  const localIP =
    process.env.NODE_ENV === "development" ? new Net().getLocalIP() : undefined;
  const logInCallback = `${localIP ? "http://" : "https://"}${
    localIP ?? process.env.HOST
  }${localIP ? ":3000" : ""}/sign-in?t=${qr.token}`;

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center gap-8">
      <div className="max-w-[40ch] tracking-wide">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg leading-8">
          {t.rich("subtitle", {
            url: `${localIP ?? process.env.HOST}/sign-in`,
            token: qr.token,
            code: (chunks) => <Code>{chunks}</Code>,
          })}
        </p>
        <GoBackButton href="/get-started" />
        <Link href={logInCallback} target="_blank" rel="noreferrer noopener">
          Clickable
        </Link>
      </div>
      <div className="p-4 bg-white rounded-lg">
        <QRCodeSVG value={logInCallback} size={240} />
      </div>
      <QRWebsocket sub token={qr.token} />
    </div>
  );
}
