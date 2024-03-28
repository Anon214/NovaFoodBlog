import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const font = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Nova Food Reviews",
  description: "Food reviews at Northern Virginia/DC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
