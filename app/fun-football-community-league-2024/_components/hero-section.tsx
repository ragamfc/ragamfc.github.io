import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full text-white">
      <div className="relative z-[10] h-screen 2xl:h-[720px] bg-cover bg-no-repeat bg-[url('/images/dominik-kuhn-kEHp1gUJNO8-unsplash.webp')] bg-[#d01144] bg-blend-multiply">
        <div className="container">
          <div className="absolute left-0 top-0 z-[20] h-full w-full bg-[rgba(0,0,0,0.5)]"></div>
          <div className="absolute z-[40] top-10 space-y-4 px-8 sm:top-24 xl:px-36">
            <div className="flex gap-2 items-center">
              <div className="h-32 w-32 sm:h-48 sm:w-48 p-2 bg-white rounded-full">
                <Image
                  src="/images/ragam-fc-removebg-preview-shadow.png"
                  width={516}
                  height={516}
                  alt="ragam-fc-logo"
                />
              </div>
              <div className="h-32 w-32 sm:h-48 sm:w-48 p-2 bg-white rounded-full">
                <Image
                  src="/images/ragam-mini-soccer-removebg-preview-shadow.png"
                  width={516}
                  height={516}
                  alt="ragam-fc-mini-soccer-logo"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Fun Football Community League 2024 Pontianak
              </h1>
              <div className="text-2xl md:text-3xl">
                12 Oktober 2024 s/d 12 Desember 2024
              </div>
              <div className="max-w-[480px] text-base">
                FFCL 2024 merupakan kompetisi mini soccer amatir yang
                diselenggarakan oleh Ragam Football Club dengan peserta 20 club
                dari Pontianak dan sekitar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
