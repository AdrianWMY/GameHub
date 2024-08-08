import { useEffect, useState } from 'react';
import GameCard from '@/components/ui/GameCard';
import { getAllGames } from '../apis/api';
import { Game } from '../interfaces/game';

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await getAllGames();
        if (games) {
          setGames(games);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-6">
      {games.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          game_slug={game.slug}
          game_name={game.name}
          genres={game.genres.map((genre) => genre.name).join(',')}
          image={game.background_image}
        />
      ))}
    </div>
  );
};

export default Home;
