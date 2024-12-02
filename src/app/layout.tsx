import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const proximaNova = localFont({
  src: "./fonts/ProximaNovaFont.woff",
  variable: "--font-proxima-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});
export const metadata: Metadata = {
  title: "Plus Production",
  description: "Plus Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaNova.variable} font-proxima antialiased`}>
        <NextTopLoader color="#431A40" />

        {children}
      </body>
    </html>
  );
}
