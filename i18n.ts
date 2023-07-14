import fs from "fs/promises";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));

const getAvailableLocales = async () => {
  const files = await fs.readdir("./messages");
  return files.map((file) => file.replace(".json", ""));
};

export { getAvailableLocales };
