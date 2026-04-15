import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "KingsCarNotAutomobile - ",
  description: "Platform for automobile",
  icons: {
    icon: "/images/favicon1.png",
    shortcut: "/images/favicon1.png",
    apple: "/images/favicon1.png",
    other: [
      { rel: "icon", url: "/images/favicon1.png", sizes: "32x32" }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.className}>
      <body className="antialiased bg-white text-gray-900">
        
            {/* Next.js automatically wraps children in Suspense using loading.tsx */}
            {children}

            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          
      </body>
    </html>
  );
}