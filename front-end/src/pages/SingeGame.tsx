import { useEffect, useState } from 'react';
import { getSingleGame } from '../apis/api';
import { Game } from '../interfaces/game';
import { useParams } from 'react-router-dom';

const SingeGame = () => {
  const { gameId } = useParams<{ gameId: string }>();

  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!gameId) {
          console.error('Game ID not provided');
          return;
        }
        const [id] = gameId.split('-');
        console.log(id);

        const fetchedGame = await getSingleGame(id);
        if (fetchedGame) {
          setGame(fetchedGame); // Set fetchedGame to state
        }
      } catch (error) {
        console.error('Error fetching game:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!game) {
    return <div className="text-white">Game not found...</div>;
  }

  return (
    <div className="container mx-auto py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
        <div>
          <h1 className="text-3xl font-bold">{game.gameName}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-2">
              <div className="text-gray-400  pb-2">Platforms</div>
              <div>{game.platforms}</div>
            </div>

            <div className="p-2">
              <div className="text-gray-400  pb-2">Genre</div>
              <div>{game.genre}</div>
            </div>

            <div className="p-2">
              <div className="text-gray-400  pb-2">Release date</div>
              <div>{game.releaseDate}</div>
            </div>

            <div className="p-2">
              <div className="text-gray-400  pb-2">Developer</div>
              <div>{game.developer}</div>
            </div>

            <div className="p-2">
              <div className="text-gray-400  pb-2">Publisher</div>
              <div>{game.publisher}</div>
            </div>

            <div className="p-2">
              <div className="text-gray-400  pb-2">Age rating</div>
              <div>{game.ageRating}</div>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-4">About</h2>
          <p className="mt-2">{game.about}</p>
        </div>

        <div className="">
          <img src={game.image} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SingeGame;
