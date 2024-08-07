import { Loader2Icon } from "lucide-react";

import { fetchGamesByGenre } from "@/actions";
import GameList from "@/components/game-list";

type Props = {
  params: {
    genreId: string;
  };
};

export default async function GenrePage({ params }: Props) {
  const genreId = params.genreId;

  const data = await fetchGamesByGenre(genreId);

  if (!data.results) {
    return (
      <div>
        <Loader2Icon className="animate-spin size-8" />
      </div>
    );
  }

  const games = data.results;

  return (
    <div className="flex-1 w-full space-y-8">
      <GameList games={games} />
    </div>
  );
}
