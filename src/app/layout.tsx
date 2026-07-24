import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "TheFoxLabs — Building AI, Web & Software Solutions for Modern Businesses",
  description:
    "TheFoxLabs is a premium software studio building AI automation, web platforms, SaaS products, and mobile apps for modern businesses.",
  metadataBase: new URL("https://thefoxlabs.tech"),
  openGraph: {
    title: "TheFoxLabs — Building AI, Web & Software Solutions",
    description:
      "Premium AI, web, and software development studio for modern businesses.",
    url: "https://thefoxlabs.tech",
    siteName: "TheFoxLabs",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Loader />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
