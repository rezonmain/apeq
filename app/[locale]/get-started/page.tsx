import DeviceCards from "@/ui/components/DeviceCards/DeviceCards";
import { useTranslations } from "next-intl";

export default function GetStartedPage() {
  const t = useTranslations("GetStarted");
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-8 md:text-3xl text-center">
        {t("title")}
      </h1>
      <DeviceCards />
    </div>
  );
}
