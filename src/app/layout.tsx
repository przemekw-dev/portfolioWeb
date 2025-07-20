import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StairTransition from "../components/ui/StairTransition";
import Header from "@components/ui/Header";

const funnelDisplay = Inter({
  variable: "--font-funnelDisplay",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Przemek's Portfolio",
  description: "Mobile & Website development with scalable cloud backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${funnelDisplay.variable} antialiased`}>
        <Header />

        <StairTransition>{children}</StairTransition>
      </body>
    </html>
  );
}
