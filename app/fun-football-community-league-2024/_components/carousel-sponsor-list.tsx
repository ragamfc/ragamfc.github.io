import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function CarouselSponsorList({
  sponsors
}: {
  sponsors: {
    name: string;
    filename: string;
  }[]
}) {
  return (
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
  );
}