import HeadingOne from "@/components/internals/heading-one";
import Image from "next/image";

const participantLogos: {
  club: string;
  filename: string;
}[] = [
  { club: "Bagayo JR", filename: "bagayo-jr.png" },
  { club: "BBF FC", filename: "bbf-fc.png" },
  { club: "Daacab Football Club", filename: "daacab-football-club.png" },
  { club: "Farmasi Football Club", filename: "farmasi-football-club.png" },
  { club: "Glory Football Club", filename: "glory-football-club.png" },
  { club: "Graha Akasia", filename: "graha-akasia.png" },
  { club: "Kampong Luar", filename: "kampong-luar.png" },
  {
    club: "Karya Tani Football Club",
    filename: "karya-tani-football-club.png",
  },
  { club: "ML Reborn", filename: "ml-reborn.png" },
  { club: "PFM", filename: "pfm.png" },
  { club: "Rafeda The Brothers", filename: "rafeda-the-brothers.png" },
  { club: "Ragam FC", filename: "ragam-fc.png" },
  {
    club: "Selly Mitra Abadi Football Club",
    filename: "selly-mitra-abadi-football-club.png",
  },
  { club: "Sperta 28 Football", filename: "sperta-28-football.png" },
  { club: "The Veteran FC", filename: "the-veteran-fc.png" },
];

export default function ParticipantsSection() {
  return (
    <section className="py-4">
      <HeadingOne>Proud Participants</HeadingOne>

      <ul className="py-8 flex flex-wrap justify-center">
        {participantLogos.map((participantLogo) => (
          <li
            key={participantLogo.club}
            className="shrink-0 items-center w-40 p-4"
          >
            <Image
              width={160}
              height={160}
              src={`/images/participants/${participantLogo.filename}`}
              alt={participantLogo.club}
              title={participantLogo.club}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
