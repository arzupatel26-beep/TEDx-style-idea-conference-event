import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "IDEAS THAT MOVE THE WORLD | Beyond Boundaries",
    template: "%s | IDEAS THAT MOVE THE WORLD",
  },
  description:
    "A three-day independent international ideas conference in Belagavi, India. 19–21 February 2027. Think Beyond. Speak Boldly. Inspire Change.",
  keywords: [
    "ideas conference",
    "Belagavi",
    "innovation",
    "entrepreneurship",
    "technology",
    "sustainability",
    "India conference 2027",
  ],
  openGraph: {
    title: "IDEAS THAT MOVE THE WORLD",
    description: "Beyond Boundaries – Ideas That Shape Tomorrow. 19–21 February 2027, Belagavi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
