import type { Metadata } from "next";
import { site } from "@/src/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: `Personal portfolio of ${site.name}. Edit src/content/site.ts to personalize.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
