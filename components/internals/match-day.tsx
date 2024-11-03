import { cn } from "@/lib/utils";
import Image from "next/image";

type MatchDataProps = React.HTMLAttributes<HTMLDivElement>;

export function MatchDay({ className }: MatchDataProps) {
  return (
    <div
      className={cn("flex-1 pb-2 border-b-4 bg-white rounded-md", className)}
    >
      <h2 className="text-2xl">
        <div className="bg-gradient-to-r from-ragam_red to-red-600 py-1 px-4 rounded-sm text-stone-50 space-y-4 sm:flex sm:space-y-0 sm:items-end sm:justify-between lg:block">
          <h3>Matchday 5</h3>
          <div className="space-y-1 sm:flex sm:space-y-0 sm:gap-4 text-right sm:text-left lg:text-right lg:justify-end">
            <div className="text-lg leading-none">01 November 2024</div>
            <div className="text-lg leading-none">Lapangan Mini Soccer Sky</div>
          </div>
        </div>
      </h2>
      <section className="pt-2 max-w-lg mx-auto bg-white">
        <div>
          <div className="text-center text-lg py-2">15:00 WIB</div>
          <div>
            <div className="flex items-center gap-2 leading-none">
              <div>
                <Image
                  width={32}
                  height={32}
                  src={`/images/participants/daacab-football-club.png`}
                  alt={"club"}
                  title={"title"}
                />
              </div>
              <div className="text-2xl">Bagayor FC</div>
            </div>
            <div className="text-center leading-none">vs</div>
            <div className="flex items-center gap-2 justify-end">
              <div className="text-2xl">Bagayor FC</div>
              <div>
                <Image
                  width={32}
                  height={32}
                  src={`/images/participants/daacab-football-club.png`}
                  alt={"club"}
                  title={"title"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
