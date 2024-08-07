import GameCard from "@/components/game-card";

export default function GameList({ games }: { games: Game[] }) {
  return (
    <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
