import { useTranslations } from "next-intl";
import { QRCodeSVG } from "qrcode.react";

export default function SignInTv() {
  const t = useTranslations("SignInTv");
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center gap-8">
      <div className="max-w-[40ch] tracking-wide">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p>{t("subtitle", { url: "https://wee.com", code: "1337" })}</p>
      </div>
      <div className="p-4 bg-white rounded-lg">
        <QRCodeSVG value="https://rezonmain.dev" size={240} />
      </div>
    </div>
  );
}
