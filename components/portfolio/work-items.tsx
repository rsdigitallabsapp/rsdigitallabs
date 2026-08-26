import Image from "next/image";
import { ArisePhoneMockup } from "@/components/portfolio/ArisePhoneMockup";
import { RestaurantConcept } from "@/components/portfolio/RestaurantConcept";
import { MedicalConcept } from "@/components/portfolio/MedicalConcept";

export type WorkItem = {
  id: string;
  title: string;
  kind: "Website Concept" | "App Product";
  status: string;
  description: string;
  href: string;
  isExternal?: boolean;
  color: string;
  preview: React.ReactNode;
  // A real screenshot used only for the desktop cursor-trail effect — a
  // lightweight thumbnail, not the live preview component.
  trailImage: string;
};

// Single source of truth for the "Selected Work" showcase — the static grid,
// desktop reveal canvas, and mobile carousel all read from this list so the
// real, accessible content behind each experience can never drift apart.
export const workItems: WorkItem[] = [
  {
    id: "restaurant",
    title: "Restaurant Concept",
    kind: "Website Concept",
    status: "Concept",
    description: "A warm, appetite-first homepage built to drive reservations.",
    href: "/website",
    color: "#C4714E",
    trailImage: "/trail/restaurant.png",
    preview: (
      <div inert aria-hidden="true" className="w-full h-full flex items-center justify-center">
        <RestaurantConcept />
      </div>
    ),
  },
  {
    id: "medical",
    title: "Medical/Dental Concept",
    kind: "Website Concept",
    status: "Concept",
    description: "A calm, trustworthy layout built to drive appointment requests.",
    href: "/website",
    color: "#22D3EE",
    trailImage: "/trail/medical.png",
    preview: (
      <div inert aria-hidden="true" className="w-full h-full flex items-center justify-center">
        <MedicalConcept />
      </div>
    ),
  },
  {
    id: "arise",
    title: "ARISE",
    kind: "App Product",
    status: "Coming Soon",
    description:
      "Your morning affirmation ritual. One statement, spoken aloud, three times, in under ten seconds.",
    href: "/arise",
    color: "#8AAF8E",
    trailImage: "/trail/arise.png",
    preview: (
      <div inert aria-hidden="true" className="w-full h-full flex items-center justify-center">
        <div className="scale-[0.46] origin-top">
          <ArisePhoneMockup />
        </div>
      </div>
    ),
  },
  {
    id: "chiq",
    title: "CHIQ",
    kind: "App Product",
    status: "Coming Soon",
    description:
      "A premium dating app for Gen X LGBTQ+ women seeking meaningful relationships and intentional connections — not another swipe-and-forget feed.",
    href: "https://chiqdating.com",
    isExternal: true,
    color: "#A855F7",
    trailImage: "/trail/chiq.png",
    preview: (
      <div inert aria-hidden="true" className="relative w-full h-full">
        <Image
          src="/chiq-preview.png"
          alt="CHIQ interface preview"
          fill
          sizes="400px"
          className="object-contain"
        />
      </div>
    ),
  },
];
