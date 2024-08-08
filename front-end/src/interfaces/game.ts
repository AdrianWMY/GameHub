// game.ts
export interface Game {
  id: string;
  name: string;
  slug: string;
  released: string;
  background_image: string;
  platforms: {
    platform: Platform;
    released_at: string;
   }[];
  genres: Genre[];
  rating: number;
  description_raw: string;
  developers: { name: string }[];
  publishers: { name: string }[];
  
 
}

interface Platform{
  name: string;
  slug:string
}

interface Genre{
  name: string;
  slug:string
}

