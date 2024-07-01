import { Container } from 'react-bootstrap';
import test from '/src/assets/test.jpeg';
import { useEffect, useState } from 'react';
import { getData } from '../apis/api';

interface Game {
  gameName: string;
  platforms: string;
  genre: string;
  releaseDate: string;
  developer: string;
  publisher: string;
  ageRating: string;
  about: string;
}

const SingleGamePage = () => {
  const [game, setGame] = useState<Game | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        if (data) {
          setGame(data);
        }
      } catch (error) {
        console.error('Error fetching game data:', error);
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
    <Container>
      <div className="pt-5 row text-white">
        <div className="col-6">
          <h1 className=""> {game.gameName}</h1>

          <div className="row">
            <div className="col-6 p-2">
              <div className="text-secondary pb-2">Platforms</div>
              <div>{game.platforms}</div>
            </div>

            <div className="col-6 p-2">
              <div className="text-secondary pb-2">Genre</div>
              <div>{game.genre}</div>
            </div>

            <div className="col-6 p-2">
              <div className="text-secondary pb-2">Release date</div>
              <div>{game.releaseDate}</div>
            </div>
            <div className="col-6 p-2">
              <div className="text-secondary pb-2">Developer</div>
              <div>{game.developer}</div>
            </div>
            <div className="col-6 p-2">
              <div className="text-secondary pb-2">Publisher</div>
              <div>{game.publisher}</div>
            </div>
            <div className="col-6 p-2">
              <div className="text-secondary pb-2">Age rating</div>
              <div>{game.ageRating}</div>
            </div>
          </div>
          <h2 className=" py-2">About</h2>
          <p className="">{game.about} </p>
        </div>

        <div className="col-6">
          <img src={test} alt="" />
          <img src={test} alt="" />
          <img src={test} alt="" />
          <img src={test} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default SingleGamePage;
