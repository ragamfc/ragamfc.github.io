"use client";

import MarqueeSponsorList from "./marquee-sponsor-list";

const sponsors: {
  name: string;
  filename: string;
}[] = [
  {
    name: "Sponsor One",
    filename: "https://placehold.co/300x120/92400e/FFFFFF.png",
  },
  {
    name: "Sponsor Two",
    filename: "https://placehold.co/300x120.png",
  },
  {
    name: "Sponsor Three",
    filename: "https://placehold.co/300x120/1a2e05/FFFFFF.png",
  },
  {
    name: "Sponsor Four",
    filename: "https://placehold.co/300x120/1e3a8a/FFFFFF.png",
  },
  {
    name: "Sponsor Five",
    filename: "https://placehold.co/300x120.png",
  },
  {
    name: "Sponsor Six",
    filename: "https://placehold.co/300x120/111827/FFFFFF.png",
  },
];

export default function SponsorsSection() {
  return (
    <section className="py-4 relative z-[10] bg-cover bg-gray-100">
      <MarqueeSponsorList sponsors={sponsors} />
    </section>
  );
}
