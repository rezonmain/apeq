import "@/app/globals.css";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🦍 ApeQ",
  description: "My super cool mvp app",
};

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          card: "border border-gray-700 bg-black",
          socialButtons: "bg-[#19191A]",
          formButtonPrimary:
            "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-blue-400 disabled:dark:bg-blue-500 disabled:cursor-not-allowed capitalize",
        },
      }}
    >
      <html lang={locale} className="bg-black text-white">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
