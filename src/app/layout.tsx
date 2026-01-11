import type { Metadata } from "next";
import { Exo_2, Montserrat } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import StairTransition from "../components/ui/StairTransition";

const exo_2 = Exo_2({
  variable: "--font-exo_2",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "React Software Engineer",
  description: "Mobile & Website development with scalable cloud backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo_2.variable} antialiased `}>
        {/* <main className="relative min-h-screen overflow-hidden bg-slate-50"> */}
        {/* Infinite vertical background lines from bottom-right */}
        {/* <div className="absolute inset-0 z-0 bg-[url('/assets/curve_long_background.svg')] bg-right  opacity-40 pointer-events-none" /> */}
        {/* <div
          style={{
            background:
              "linear-gradient(to right, var(--text-light), var(--accent-green))",
          }}
        /> */}

        {/* White semi-transparent overlay */}
        {/* <div className="absolute inset-0 bg-white/80 z-0 pointer-events-none" /> */}

        {/* Foreground content */}
        <div className={`relative z-10 ${montserrat.variable}`}>
          {/* <StairTransition> */}
          {children}
          {/* </StairTransition> */}
        </div>
        {/* </main> */}
      </body>
    </html>
  );
}
