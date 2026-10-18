import { Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageBackground } from "@/components/layout/PageBackground";
import { site } from "@/lib/content";
import "./globals.css";

// Self-hosted equivalent of Google Fonts `Outfit:wght@100..900&display=swap` (variable font).
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "variable", // full 100-900 axis
  display: "swap",
});

export const metadata = {
  title: "Trivyah Tech - Digital product studio",
  description: site.description,
};

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={outfit.variable}>
      <body>
        <a
          href="#main"
          className="sr-only rounded-full bg-white px-4 py-2 text-b3 font-medium text-black focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
        >
          Skip to content
        </a>
        <PageBackground />
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
