import { MatchDay } from "@/components/internals/match-day";

export default function JadwalPage() {
  return (
    <>
      <section className="px-4 md:px-8 py-8 container">
        <h1 className="text-3xl font-extrabold">Jadwal Pertandingan</h1>
        <div className="border-4 border-ragam_red rounded-full max-w-sm"></div>
      </section>
      <div>
        <div className="container px-8 py-8 grid gap-4 grid-cols-1 lg:grid-cols-2">
          <MatchDay className="shadow-lg" />
          <MatchDay className="shadow-lg" />
          <MatchDay className="shadow-lg" />
          <MatchDay className="shadow-lg" />
        </div>
      </div>
    </>
  );
}
