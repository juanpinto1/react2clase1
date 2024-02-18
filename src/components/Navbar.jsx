import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      bg="danger"
      variant="light"
    >
      <Container>
        <Nav>
          <Link
            to="/"
            className="text-light text-decoration-none"
          >
            🏠 Home
          </Link>
          <Link
            to="/contacto"
            className="ms-4 text-light text-decoration-none"
          >
            📒 Contacto{" "}
          </Link>
        </Nav>
        <Nav>
          <Navbar.Brand className="text-light "> Happy Cake 🍰</Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;
