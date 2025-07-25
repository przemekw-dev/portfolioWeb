import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StairTransition from "../components/ui/StairTransition";

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
      <body className={`${funnelDisplay.variable} antialiased `}>
        <main className="relative min-h-screen overflow-hidden bg-slate-50">
          {/* Infinite vertical background lines from bottom-right */}
          <div className="absolute inset-0 z-0 bg-[url('/assets/curve_long_background.svg')] bg-right  opacity-40 pointer-events-none" />

          {/* White semi-transparent overlay */}
          {/* <div className="absolute inset-0 bg-white/80 z-0 pointer-events-none" /> */}

          {/* Foreground content */}
          <div className="relative z-10">
            <StairTransition>{children}</StairTransition>
          </div>
        </main>
      </body>
    </html>
  );
}
