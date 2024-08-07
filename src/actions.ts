"use server";

export const fetchGenres = async () => {
  const res = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  return res.json();
};

export const fetchGames = async () => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  return res.json();
};

export const fetchGamesByGenre = async (genre: string) => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&genres=${genre}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games by genre");
  }

  return res.json();
};
