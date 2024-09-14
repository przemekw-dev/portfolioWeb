import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Przemek's Portfolio",
  description: "Showcase Przemek's work and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrains.className}>
        <Header />
        <StairTransition>{children}</StairTransition>
        {/* <PageTransition>{children}</PageTransition> */}
      </body>
    </html>
  );
}
