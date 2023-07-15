import { Button } from "@/components/ui/Button/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function GoBackButton({ href }: { href: string }) {
  const t = useTranslations("GoBackButton");
  return (
    <Link href={href}>
      <Button className="mt-5" variant="primary-outline">
        {t("button")}
      </Button>
    </Link>
  );
}
