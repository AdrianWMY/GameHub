export interface GameLink {
  id: string;
  game_id: number;
  store_id: number;
  url: string;
}

export interface GameLinks {
  allLinks: GameLink[];
}
