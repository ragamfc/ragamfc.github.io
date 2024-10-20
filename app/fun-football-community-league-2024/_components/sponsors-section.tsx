"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    <section className="px-10 py-4 bg-gray-100">
      <div className="container">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {sponsors.map((sponsor, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <Image
                  src={sponsor.filename}
                  width={300}
                  height={200}
                  alt={sponsor.name}
                  title={sponsor.name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
