import Image from "next/image";

export default function SubPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
        <ul className="flex gap-8 px-4 py-2 h-full text-white overflow-x-scroll text-nowrap items-center font-bold">
          <li>
            <a href="/fun-football-community-league-2024">Home</a>
          </li>
          <li>
            <a href="/fun-football-community-league-2024/klasemen">Klasemen</a>
          </li>
          <li>
            <a href="/fun-football-community-league-2024/jadwal">Jadwal</a>
          </li>
          <li>
            <a href="/fun-football-community-league-2024/hasil-pertandingan">
              Hasil Pertandingan
            </a>
          </li>
        </ul>
      </nav>

      <section>
        {children}
      </section>
    </>
  );
}
