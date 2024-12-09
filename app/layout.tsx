import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header2 from "./component/Header2";
import Footer from "./component/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Foodtuck",
  description: "Developed by Ayesha Shahzaib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header2></Header2>
        {children}
       < Footer/>
      </body>
    </html>
  );
}
