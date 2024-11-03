import Image from "next/image";

const teams: {
  position: number;
  club: {
    name: string;
    logo: string;
  };
  played: number;
  win: number;
  draw: number;
  lose: number;
  goalStat: {
    scored: number;
    conceded: number;
  };
  gd: number;
  points: number;
}[] = [
  {
    position: 1,
    club: {
      name: "Farmasi FC",
      logo: "/images/participants/daacab-football-club.png",
    },
    played: 4,
    win: 4,
    draw: 4,
    lose: 4,
    goalStat: {
      scored: 20,
      conceded: 5,
    },
    gd: 15,
    points: 12,
  },
];

export default function KlasemenPage() {
  return (
    <>
      <section className="px-4 md:px-8 py-8 container">
        <h1 className="text-3xl font-extrabold">Klasemen Liga</h1>
        <div className="border-4 border-ragam_red rounded-full max-w-sm"></div>
      </section>
      <div className="bg-gradient-to-r from-red-700 to-rose-800">
        <div className="container px-8 py-8">
          <div className="bg-white rounded-sm p-4">
            <table className="w-full ">
              <thead>
                <tr className="border-b-2 border-ragam_red rounded-full">
                  <th>Posisi</th>
                  <th>Tim</th>
                  <th>Played</th>
                  <th>Win</th>
                  <th>Draw</th>
                  <th>Lose</th>
                  <th>+/-</th>
                  <th>GD</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.position} className="text-lg h-16 border-b-2 border-red-900">
                    <td className="text-center">{team.position}</td>
                    <td className="font-bold">
                      <div className="flex items-center gap-2">
                        <div>
                          <Image
                            width={32}
                            height={32}
                            src={`/images/participants/daacab-football-club.png`}
                            alt={"club"}
                            title={"title"}
                          />
                        </div>
                        <div>{team.club.name}</div>
                      </div>
                    </td>
                    <td className="text-center">{team.played}</td>
                    <td className="text-center">{team.win}</td>
                    <td className="text-center">{team.draw}</td>
                    <td className="text-center">{team.lose}</td>
                    <td className="text-center">{team.goalStat.scored}/{team.goalStat.conceded}</td>
                    <td className="text-center">{team.gd}</td>
                    <td className="text-center font-bold text-2xl">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
