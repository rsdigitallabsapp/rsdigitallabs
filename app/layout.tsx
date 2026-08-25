import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rsdigitallabs.com"),
  title: "RS Digital Labs — Product Design & Development Studio",
  description:
    "RS Digital Labs designs and builds premium digital products end to end — from first sketch to shipped app. See the proof in ARISE, CHIQ, Plannie, and OLIVIA, then bring us your project.",
  keywords: [
    "RS Digital Labs",
    "product design studio",
    "web design and development",
    "app development studio",
    "CHIQ",
    "Plannie",
    "OLIVIA",
    "ARISE",
  ],
  openGraph: {
    title: "RS Digital Labs — Product Design & Development Studio",
    description:
      "We design, build, and ship premium digital products end to end. See the proof, then bring us your project.",
    type: "website",
    url: "https://rsdigitallabs.com",
    siteName: "RS Digital Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Digital Labs — Product Design & Development Studio",
    description:
      "We design, build, and ship premium digital products end to end. See the proof, then bring us your project.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="antialiased noise-bg">{children}</body>
    </html>
  );
}
