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
  title: "RS Digital Labs — Building Apps That Make Life Easier",
  description:
    "RS Digital Labs creates practical software products that solve real-world problems. Meet CHIQ, Plannie, OLIVIA, and more.",
  keywords: ["RS Digital Labs", "CHIQ", "Plannie", "OLIVIA", "software", "apps"],
  openGraph: {
    title: "RS Digital Labs",
    description: "Building Apps That Make Life Easier.",
    type: "website",
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
