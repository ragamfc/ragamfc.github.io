import HeadingOne from "@/components/internals/heading-one";
import HeroSection from "./_components/hero-section";
import ParticipantsSection from "./_components/participants-section";
import SponsorsSection from "./_components/sponsors-section";
import { MatchScore } from "../../components/internals/match-score";
import Link from "next/link";
import { MatchDay } from "../../components/internals/match-day";

export default function Page() {
  return (
    <>
      <HeroSection />

      <SponsorsSection />

      <div className="px-4 container pt-12">
        {/* Schedule */}
        <section>
          <HeadingOne>Jadwal Pertandingan</HeadingOne>
          <div className="flex flex-col lg:flex-row gap-4 justify-center py-4">
            <MatchDay />
            <MatchDay />
          </div>
        </section>
      </div>

      <div className="bg-red-700">
        <div className="px-4 container my-8 py-12">
          {/* Match Result */}
          <section>
            <HeadingOne className="text-white">
              Hasil Pertandingan Terbaru
            </HeadingOne>
            <div className="max-w-5xl mx-auto text-center text-white text-xl pt-8">
              Sabtu, 5 November 2024
            </div>
            <div className="flex flex-wrap justify-center gap-4 py-4 max-w-5xl mx-auto">
              <MatchScore />
              <MatchScore />
              <MatchScore />
              <MatchScore />
            </div>
            <div className="max-w-5xl mx-auto text-center">
              <Link href="/fun-football-community-league-2024/hasil-pertandingan">
                <span className="font-semibold px-2 py-1 text-lg text-white">
                  selengkapnya
                </span>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <div className="px-4 container">
        <ParticipantsSection />
      </div>
    </>
  );
}


