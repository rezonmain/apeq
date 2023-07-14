import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export default function DeviceCards() {
  const t = useTranslations("DeviceCards");
  return (
    <div className="flex justify-center flex-wrap gap-8">
      <DeviceCard description={t("player")} href="/sign-in/tv" />
      <DeviceCard description={t("controller")} href="/sign-in" />
    </div>
  );
}

interface DeviceCardProps {
  description: string;
  href: string;
}

const DeviceCard = ({ description, href }: DeviceCardProps) => {
  return (
    <Link href={href}>
      <button className="appearance-none flex justify-center items-center h-40 w-40 md:h-80 md:w-80 p-8 border border-gray-600 rounded-md hover:ring-4 focus:ring-4 hover:ring-blue-800 focus:ring-blue-800 focus:outline-none">
        <span className="block md:text-lg">{description}</span>
      </button>
    </Link>
  );
};
