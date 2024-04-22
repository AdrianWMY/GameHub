import { Container, Row, Col } from 'react-bootstrap';
import GameCard from '../components/ui/GameCard';

const Home = () => {
  const games = [
    {
      imgsrc: 'src/assets/test.jpeg',
      title: ' game 1 ',
      gameText: 'some quick text',
    },
    {
      imgsrc: 'src/assets/test.jpeg',
      title: ' game 2 ',
      gameText: 'some quick text',
    },
    {
      imgsrc: 'src/assets/test.jpeg',
      title: ' game 3 ',
      gameText: 'some quick text ',
    },
    {
      imgsrc: 'src/assets/test.jpeg',
      title: ' game 4 ',
      gameText: 'some quick text',
    },
    {
      imgsrc: 'src/assets/test.jpeg',
      title: ' game 5 ',
      gameText: 'some quick text',
    },
    {
      imgsrc: 'src/assets/test.jpeg',
      title: ' game 6 ',
      gameText: 'some quick text text ',
    },
    {
      imgsrc: 'src/assets/test.jpeg',
      title: ' game 7 ',
      gameText: 'some quick text',
    },
    {
      imgsrc: 'src/assets/test.jpeg',
      title: ' game 5 ',
      gameText: 'some quick text',
    },
    {
      imgsrc: 'src/assets/test.jpeg',
      title: ' game 6 ',
      gameText: 'some quick text',
    },
    {
      imgsrc: 'src/assets/test.jpeg',
      title: ' game 7 ',
      gameText:
        'some quick text some quick text some quick text some quick text some quick text',
    },
  ];

  return (
    <>
      <Container className="mt-3">
        <Row className="row-gap-3">
          {games.map((game) => (
            <Col xl={3} lg={4} sm={6}>
              <GameCard
                imgsrc={game.imgsrc}
                title={game.title}
                des={game.gameText}
              ></GameCard>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
