// game.ts
export interface Game {
  id: string;
  name: string;
  released: string;
  background_image: string;
  platforms: {
    platform: Platform;
    released_at: string;
   }[];
  genres: Genre[];
  rating: number;
  // releaseDate: string;
  // developer: string;
  // publisher: string;
  // ageRating: string;
  // about: string;
  // image: string; 
}

interface Platform{
  name: string;
  slug:string
}

interface Genre{
  name: string;
  slug:string
}