import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";

const iranSans = localFont({
  src: [
    { path: "../public/iransans/IRANSansXFaNum-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/iransans/IRANSansXFaNum-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-iransans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "سیتی رپ",
  description: "سیتی رپ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${iranSans.className} antialiased [direction:rtl]`}
      >
        <div className="bg-linear-[180deg,_#000000_25.42%,_#2B2B2B_100%] w-full min-h-[100svh]">
          <Header />
        {children}

        </div>
      </body>
    </html>
  );
}
