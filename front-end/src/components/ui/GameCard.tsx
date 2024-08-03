import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface GameCardProps {
  gameName: string;
  gameSlug: string;
  genres: string;
  image: string;
  id: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + '...';
};

const GameCard = ({ gameName, genres, image, id, gameSlug }: GameCardProps) => {
  const truncatedDesc = truncateText(genres, 100); // Adjust the max length as needed

  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate(`/games/${encodeURIComponent(gameSlug)}`, {
      state: { gameId: id },
    });
  };

  return (
    <div className="sm:max-w-sm rounded overflow-hidden shadow-lg bg-zinc-800 text-white">
      <div className="relative h-40">
        <img
          className="absolute h-full w-full object-cover"
          src={image}
          alt="Game"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{gameName}</div>
        <p className="text-gray-400 text-base">{truncatedDesc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Button className="hover:bg-zinc-500" onClick={handleMoreInfoClick}>
          More Info
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
