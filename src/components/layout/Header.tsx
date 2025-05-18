import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "../common/Logo";

export default function Header() {
  return (
    <header className="px-5">
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Container>
          <Form className="d-flex me-auto">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Rechercher"
                aria-label="Search"
                className="search-input"
              />
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </InputGroup>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            // className="d-flex justify-content-end"
          >
            <Nav className="ms-auto">
              <Nav.Link
                className="fs-5 fw-bold text-secondary"
                as={Link}
                to="/"
              >
                Alimentation
              </Nav.Link>
              <Nav.Link
                className="fs-5 fw-bold text-secondary"
                as={Link}
                to="/"
              >
                Batîment
              </Nav.Link>
              <Nav.Link
                className="fs-5 fw-bold text-secondary"
                as={Link}
                to="/"
              >
                Fabrication
              </Nav.Link>
              <Nav.Link
                className="fs-5 fw-bold text-secondary"
                as={Link}
                to="/"
              >
                Services
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
