import { Noto_Sans, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import DrawerProvider from "@/components/drawer/drawer-provider";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair_display",
});

const ciroplasteSymbols = localFont({
  src: "./fonts/ciroplaste-symbols.woff2",
  variable: "--font-symbols",
});

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: {
      template: "%s | Ciroplaste",
      default: `${t("Purpose of Ciroplaste")} | Ciroplaste`,
    },
    description: t("Reason for this website"),
    generator: "Next.js",
    applicationName: "Ciroplaste",
    referrer: "origin-when-cross-origin",
    keywords: ["Central Asia", "Journalism", "Investigation"],
    creator: "Evan Gruère",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

type RootLayoutProps = PropsWithChildren & {
  params: Promise<{ locale: "fr" | "en" }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className={`${notoSans.variable} ${playfairDisplay.variable} ${ciroplasteSymbols.variable}`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            <DrawerProvider>{children}</DrawerProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
