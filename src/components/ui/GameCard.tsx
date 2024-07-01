// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

interface GameCardProps {
  imgsrc: string;
  title: string;
  des: string;
}

const GameCard = ({ imgsrc, title, des }: GameCardProps) => {
  return (
    <Card
      className=" p-3 text-white rounded-4 "
      style={{ backgroundColor: '#2F2F2F' }}
    >
      <Card.Img variant="top rounded-4" src={imgsrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{des}</Card.Text>
        <Link
          to="/games/gameName"
          className="btn text-white basic-button rounded-4"
        >
          More Info
        </Link>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
