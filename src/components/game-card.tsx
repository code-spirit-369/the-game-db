import { StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="h-full p-6 bg-white rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-95 dark:bg-opacity-5 flex flex-col justify-between shadow-2xl">
      <div className="flex flex-col">
        <Image
          src={game.background_image}
          alt={game.slug}
          width={1920}
          height={1080}
          className="rounded-2xl h-72 w-full object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold mt-4 text-black dark:text-white">
            {game.name}
          </h3>
          <div className="flex items-center space-x-2 mt-4">
            {game.parent_platforms.map(({ platform }) => (
              <Image
                key={platform.id}
                src={`/images/${platform.id}.svg`}
                alt={platform.name}
                width={24}
                height={24}
                className="invert dark:invert-0"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between space-x-6">
        <span className="flex items-center text-lg font-semibold">
          {game.rating}
          <StarIcon className="ml*3 size-5 text-yellow-500 fill-current" />
        </span>

        <Button className="w-full rounded-3xl text-black text-lg">View</Button>
      </div>
    </div>
  );
}
