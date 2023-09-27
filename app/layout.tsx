import Navigation from "@/components/inHouse/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Footer from "@/components/inHouse/Footer";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["300", "400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
