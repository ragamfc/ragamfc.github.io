import { redirect } from "next/navigation";

export default function Home() {
  return redirect('/fun-football-community-league-2024');

  return (
    <div className="flex items-center h-screen justify-center">
        <div className="text-center">
            <h1 className="text-4xl">Ragam FC - Official Site</h1>
            <p>Coming soon</p>

            <div className="mt-24">
                <a href="/ragam-mini-soccer.html">Ragam Fun Football Match</a>
            </div>
        </div>
    </div>
  );
}
