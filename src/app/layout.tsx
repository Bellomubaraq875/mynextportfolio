import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Added 300 for that extra light elegant look
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}