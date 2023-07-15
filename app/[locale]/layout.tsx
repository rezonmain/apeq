import "@/app/globals.css";
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
    <ClerkProvider>
      <html lang={locale} className="bg-black text-white">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
