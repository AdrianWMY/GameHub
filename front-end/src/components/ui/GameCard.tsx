import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface GameCardProps {
  gameName: string;
  desc: string;
  image: string;
  id: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + '...';
};

const GameCard = ({ gameName, desc, image, id }: GameCardProps) => {
  const truncatedDesc = truncateText(desc, 100); // Adjust the max length as needed

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
        <Link
          to={`/games/${encodeURIComponent(id)}-${encodeURIComponent(
            gameName.trim().replace(/ /g, '-')
          )}`}
        >
          <Button className="hover:bg-zinc-500">More Info</Button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;