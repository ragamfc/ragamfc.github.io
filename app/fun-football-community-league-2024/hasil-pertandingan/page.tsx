import { MatchScore } from "@/components/internals/match-score";

export default function HasilPertandingan() {
  return (
    <>
      <nav className="flex flex-col md:flex-row md:justify-between md:h-20 bg-gradient-to-l from-red-900 to-rose-900">
        <div className="px-4 py-2 h-full flex items-center">Ragam FC</div>
        <ul className="flex gap-8 px-4 py-2 h-full text-white overflow-x-scroll text-nowrap items-center font-bold">
          <li>Home</li>
          <li>Klasemen</li>
          <li>Jadwal</li>
          <li>Hasil Pertandingan</li>
        </ul>
      </nav>

      <section className="px-4 md:px-8 py-8 container">
        <h1 className="text-3xl font-extrabold">Hasil Pertandingan</h1>
        <div className="border-4 border-ragam_red rounded-full max-w-sm"></div>
      </section>

      <div className="bg-gradient-to-r from-red-700 to-rose-800">
        <div className="container px-8 py-8">
          <div className="text-center text-white text-xl pb-4">
            Sabtu, 5 November 2024
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            <MatchScore />
            <MatchScore />
            <MatchScore />
            <MatchScore />
            <MatchScore />
            <MatchScore />
          </div>
        </div>
      </div>
    </>
  );
}
