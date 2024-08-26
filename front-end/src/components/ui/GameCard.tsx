import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game_name: string;
  game_slug: string;
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

const GameCard = ({
  game_name,
  genres,
  image,
  id,
  game_slug,
}: GameCardProps) => {
  const truncatedDesc = truncateText(genres, 100); // Adjust the max length as needed

  // const navigate = useNavigate();

  // const handleMoreInfoClick = () => {
  //   navigate(`/games/${encodeURIComponent(game_slug)}`, {
  //     state: { gameId: id },
  //   });
  // };

  return (
    <div className="sm:max-w-sm rounded-2xl overflow-hidden shadow-lg bg-zinc-800 text-white">
      <div className="relative h-40">
        <img
          className="absolute h-full w-full object-cover"
          src={image}
          alt="Game"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{game_name}</div>
        <p className="text-gray-400 text-base">{truncatedDesc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/games/${encodeURIComponent(game_slug)}?id=${id}`}>
          <Button className="hover:bg-zinc-500">More Info</Button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
