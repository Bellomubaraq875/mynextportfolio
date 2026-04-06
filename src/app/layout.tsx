import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mubarak Bello | Frontend Developer",
  description: "Portfolio of Mubarak Bello, a Frontend Developer specialized in sleek UI/UX.",
  icons: {
    icon: "/logo/favicon.png",
    shortcut: "/logo/favicon.png",
    apple: "/logo/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="en" className={`${jost.variable} scroll-smooth`}>
     
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}