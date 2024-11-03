import HeadingOne from "@/components/internals/heading-one";
import HeroSection from "./_components/hero-section";
import ParticipantsSection from "./_components/participants-section";
import SponsorsSection from "./_components/sponsors-section";
import { MatchScore } from "../../components/internals/match-score";
import Link from "next/link";
import { MatchDay } from "../../components/internals/match-day";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <HeroSection />

      <div>
        <SponsorsSection />
      </div>

      <div
        id="stickyNavbar"
        className="fixed top-0 left-0 right-0 bg-white shadow-lg transition-transform duration-300 transform"
      >
        <nav className="flex flex-col md:flex-row md:justify-between md:h-20 bg-gradient-to-l from-red-900 to-rose-700">
          <div className="px-4 py-2 h-full flex gap-2 items-center">
            <Image
              src="/images/ragam-fc-removebg-preview-shadow.png"
              width={64}
              height={64}
              alt="ragam-fc-logo"
              className="bg-white rounded-full"
            />
            <div>
              <div className="text-xl leading-tight font-bold text-white">
                Ragam Football Club
              </div>
              <div className="text-lg leading-none font-bold text-white">
                Fun Football Community League 2024
              </div>
            </div>
          </div>
          <ul className="flex gap-8 px-4 py-2 h-full text-white overflow-x-auto text-nowrap items-center font-bold">
            <li>
              <Link href="/fun-football-community-league-2024">Home</Link>
            </li>
            <li>
              <Link href="/fun-football-community-league-2024/klasemen">
                Klasemen
              </Link>
            </li>
            <li>
              <Link href="/fun-football-community-league-2024/jadwal">
                Jadwal
              </Link>
            </li>
            <li>
              <Link href="/fun-football-community-league-2024/hasil-pertandingan">
                Hasil Pertandingan
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="px-4 container pt-32">
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
