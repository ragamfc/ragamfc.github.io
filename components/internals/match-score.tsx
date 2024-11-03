import Image from "next/image";

export function MatchScore() {
  return (
    <div className="flex flex-grow-0 bg-white justify-between py-4 px-4 md:px-8 rounded-sm min-w-[416px]">
      <div className="flex flex-1 items-center gap-2 leading-none">
        <div>
          <Image
            width={32}
            height={32}
            src={`/images/participants/daacab-football-club.png`}
            alt={"club"}
            title={"title"} />
        </div>
        <div className="text-2xl">BGY</div>
      </div>
      <div className="text-2xl px-2 bg-red-700 rounded-sm text-white font-bold">
        0 - 0
      </div>
      <div className="flex flex-1  items-center gap-2 leading-none justify-end">
        <div>
          <Image
            width={32}
            height={32}
            src={`/images/participants/daacab-football-club.png`}
            alt={"club"}
            title={"title"} />
        </div>
        <div className="text-2xl">BGY</div>
      </div>
    </div>
  );
}
