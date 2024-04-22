import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Topbar = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">GameHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Button variant="outline-light" className="me-2">
            Login
          </Button>
          <Button variant="warning"> Sign Up</Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
