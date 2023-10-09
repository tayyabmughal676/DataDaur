import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/header/Header";
import HomeFooter from "@/components/homeFooter/HomeFooter";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataDaur",
  description: "A software company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <Header></Header>
        {children}
        <HomeFooter></HomeFooter>
      </body>
    </html>
  );
}
