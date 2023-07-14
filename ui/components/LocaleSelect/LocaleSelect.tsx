import { getAvailableLocales } from "@/i18n";
import Select from "@/ui/Select/Select";
import { useLocale } from "next-intl";

export default async function LocaleSelect() {
  const locales = await getAvailableLocales();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();
  return (
    <Select
      label="Language"
      value={locale}
      options={locales.map((locale) => ({
        value: locale,
        label: locale === "en" ? "en 🇬🇧" : "es 🇪🇸",
      }))}
    />
  );
}
