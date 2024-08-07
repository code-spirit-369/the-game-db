"use client";

import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";

import { fetchGenres } from "@/actions";
import GenreItem from "@/components/genre-item";

export default function GenreList() {
  const [genres, setGenres] = useState<Genre[] | null>(null);

  useEffect(() => {
    fetchGenres().then((data) => setGenres(data.results));
  }, []);

  if (!genres) {
    return (
      <div>
        <Loader2Icon className="animate-spin size-8" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      {genres.map((genre) => (
        <GenreItem key={genre.id} genre={genre} />
      ))}
    </div>
  );
}
