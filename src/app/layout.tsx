import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Providers } from "../lib/providers"; 

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mubarak Bello | Frontend Developer",
  description: "Portfolio of Mubarak Bello, a Frontend Developer specialized in sleek UI/UX.",
  icons: {
    icon: "/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jost.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-port-sky/30">
        {/* Use the Client Component wrapper here */}
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}