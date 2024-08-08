import { useEffect, useState } from 'react';
import {
  getSingleGame,
  getGameScreenshots,
  getStoreLinksByGameId,
} from '../apis/api';
import { Game } from '../interfaces/game';
import { GameScreenshot } from '../interfaces/gameScreenshot';
import { GameLinks } from '../interfaces/gameLink';

import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SingeGame = () => {
  const location = useLocation();
  const { gameId } = location.state;
  const [isExpanded, setIsexpanded] = useState(false);
  const toggleReadMore = () => {
    setIsexpanded(!isExpanded);
  };

  const [game, setGame] = useState<Game | null>(null);
  const [game_links, setGameLinks] = useState<GameLinks | null>(null);
  const [game_screenshots, setGameScrrenshots] =
    useState<GameScreenshot | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!gameId) {
          console.error('Game ID not provided');
          return;
        }

        const [fetchedGame, fetchedGameScreenshots, fetchedGameLinks] =
          await Promise.all([
            getSingleGame(gameId),
            getGameScreenshots(gameId),
            getStoreLinksByGameId(gameId),
          ]);

        if (fetchedGame) {
          setGame(fetchedGame); // Set fetchedGame to state
        }

        if (fetchedGameScreenshots) {
          setGameScrrenshots(fetchedGameScreenshots); // Set fetchedGameScreenshots to state
        }
        if (fetchedGameLinks) {
          setGameLinks(fetchedGameLinks);
        }
      } catch (error) {
        console.error('Error fetching game:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [gameId]); // Add gameId as a dependency

  const handlePlatformClick = (url: string) => {
    window.open(url, '_blank');
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!game) {
    return <div className="text-white">Game not found...</div>;
  }

  return (
    <div className="container mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        <div className="">
          <h1 className="text-3xl font-bold">{game.name}</h1>

          <div className="grid grid-cols-2 sm:gap-4 gap-2 mt-4">
            <div className="p-2">
              <div className="text-gray-400  pb-2">Platforms</div>
              <div>{game.platforms.map((p) => p.platform.name).join(',')}</div>
            </div>

            <div className="p-2">
              <div className="text-gray-400  pb-2">Genre</div>
              <div>{game.genres.map((genre) => genre.name).join(',')}</div>
            </div>

            <div className="p-2">
              <div className="text-gray-400  pb-2">Release date</div>
              <div>{game.released}</div>
            </div>

            <div className="p-2">
              <div className="text-gray-400  pb-2">Developer</div>
              <div>{game.developers.map((d) => d.name).join(' , ')}</div>
            </div>

            <div className="p-2">
              <div className="text-gray-400  pb-2">Publisher</div>
              <div>{game.publishers.map((d) => d.name).join(' , ')}</div>
            </div>

            <div className="p-2">
              <div className="text-gray-400  pb-2">Rating</div>
              <div>{game.rating}</div>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-4">About</h2>

          <p className="mt-2">
            {isExpanded
              ? game.description_raw
              : `${game.description_raw.substring(0, 400)}...`}
            <span
              className="ps-2 cursor-pointer text-gray-400 "
              onClick={toggleReadMore}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </span>
          </p>
        </div>

        <div className="">
          <a href={game.background_image} target="_blank">
            <img
              src={game.background_image}
              alt=""
              className="rounded-xl w-full"
            />
          </a>
          <div className="grid grid-cols-3 gap-2 my-3">
            {game_screenshots?.results.map((r) => (
              <a href={r.image} target="_blank">
                <img src={r.image} alt="" className="rounded-xl w-72" />
              </a>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1">
            {game_links?.allLinks?.map((link) => (
              <Button
                className="bg-gray-100 text-black "
                onClick={() => handlePlatformClick(link.url)}
              >
                {link.store_id}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingeGame;
