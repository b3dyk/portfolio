import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/Header/Header";
import { firacode } from "@/helpers/fonts";

export const metadata: Metadata = {
  title: "Oleksandr Perlov",
  description: "Oleksandr Perlov Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firacode.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
