import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeSponsorList({
  sponsors,
}: {
  sponsors: {
    name: string;
    filename: string;
  }[];
}) {
  return (
    <Marquee>
      {sponsors.map((sponsor, index) => (
        <Image
          key={index}
          src={sponsor.filename}
          width={300}
          height={200}
          alt={sponsor.name}
          title={sponsor.name}
          className="px-2"
        />
      ))}
    </Marquee>
  );
}
