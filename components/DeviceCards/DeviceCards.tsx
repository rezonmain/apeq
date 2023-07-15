import { useTranslations } from "next-intl";
import DeviceCard from "./DeviceCard";

export default function DeviceCards() {
  const t = useTranslations("DeviceCards");

  return (
    <div className="flex justify-center flex-wrap gap-8">
      <DeviceCard description={t("player")} href="/sign-in/tv" type="player" />
      <DeviceCard
        description={t("controller")}
        href="/sign-in"
        type="controller"
      />
    </div>
  );
}
