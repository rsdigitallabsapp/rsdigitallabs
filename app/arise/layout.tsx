import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARISE — Speak to Yourself First | RS Digital Labs",
  description:
    "ARISE is a ten-second morning affirmation ritual. One statement, spoken aloud, three times, before the world speaks to you. Built and shipped by RS Digital Labs.",
  openGraph: {
    title: "ARISE — Speak to Yourself First",
    description:
      "Before the world speaks to you, speak to yourself. One affirmation, three times, ten seconds.",
    url: "https://rsdigitallabs.com/arise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARISE — Speak to Yourself First",
    description:
      "Before the world speaks to you, speak to yourself. One affirmation, three times, ten seconds.",
  },
};

export default function AriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
