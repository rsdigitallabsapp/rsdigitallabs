import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plannie — Plan Smarter, Execute Faster | RS Digital Labs",
  description:
    "Plannie helps couples discover restaurants, coffee shops, activities, and spontaneous date ideas in seconds. Built and shipped by RS Digital Labs.",
  openGraph: {
    title: "Plannie — Plan Smarter, Execute Faster",
    description:
      "Never wonder where to go again. Discover date ideas nearby in seconds.",
    url: "https://rsdigitallabs.com/plannie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plannie — Plan Smarter, Execute Faster",
    description:
      "Never wonder where to go again. Discover date ideas nearby in seconds.",
  },
};

export default function PlannieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
