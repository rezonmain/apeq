import { QRChallenge } from "@/services/QRChallenge";
import { Button } from "@/ui/Button/Button";
import Code from "@/ui/Code/Code";
import GoBackButton from "@/ui/components/GoBackButton/GoBackButton";
import { useTranslations } from "next-intl";
import { QRCodeSVG } from "qrcode.react";

export default function SignInTv() {
  const t = useTranslations("SignInTv");
  const qr = new QRChallenge(5);
  const logInCallback = `${process.env.HOST}/sign-in?c=${qr.token}`;
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center gap-8">
      <div className="max-w-[40ch] tracking-wide">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg leading-8">
          {t.rich("subtitle", {
            url: `${process.env.HOST}/sign-in`,
            token: qr.token,
            code: (chunks) => <Code>{chunks}</Code>,
          })}
        </p>
        <GoBackButton href="/get-started" />
      </div>
      <div className="p-4 bg-white rounded-lg">
        <QRCodeSVG value={logInCallback} size={240} />
      </div>
    </div>
  );
}
