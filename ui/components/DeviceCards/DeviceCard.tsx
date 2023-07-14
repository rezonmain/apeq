"use client";
import Link from "next-intl/link";

interface DeviceCardProps {
  description: string;
  href: string;
  type: "player" | "controller";
}

const DeviceCard = ({ description, href, type }: DeviceCardProps) => {
  return (
    <Link href={href}>
      <button
        onClick={() => localStorage.setItem("deviceIs", type)}
        className="appearance-none flex justify-center items-center h-40 w-40 md:h-80 md:w-80 p-8 border border-gray-600 rounded-md hover:ring-4 focus:ring-4 hover:ring-blue-800 focus:ring-blue-800 focus:outline-none"
      >
        <span className="block md:text-lg">{description}</span>
      </button>
    </Link>
  );
};

export default DeviceCard;
