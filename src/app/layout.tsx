import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import StairTransition from "../components/ui/StairTransition";
import Header from "@components/ui/Header";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnelDisplay",
  subsets: ["latin"],
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
