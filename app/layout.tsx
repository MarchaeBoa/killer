import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BRAND, BRAND_DESCRIPTION, BRAND_TAGLINE } from "@/lib/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND} — ${BRAND_TAGLINE}`,
  description: BRAND_DESCRIPTION,
  openGraph: {
    title: `${BRAND} — ${BRAND_TAGLINE}`,
    description: BRAND_DESCRIPTION,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
