import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ReduxProvider from "@/redux/lib/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexGen Lab — Web Development & Digital Products",
  description:
    "NexGen Lab builds high-performance websites, web apps and ready-to-sell digital products with Next.js, React & TypeScript. Hire us to build your idea, or buy a product off the shelf.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ReduxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
