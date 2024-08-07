interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  parent_platforms: Platform[];
  genres: Genre[];
}
