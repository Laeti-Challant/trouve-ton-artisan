import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "../common/Logo";
import { useContext } from "react";
import { ArtisanContext } from "../../context/ArtisanContext";
import { normalizeText } from "../../utils/normalizetext";

export default function Header() {
  const context = useContext(ArtisanContext);
  if (!context) {
    throw new Error("Header must be used within an ArtisanProvider");
  }

  const { searchTerm, setSearchTerm } = context;
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(normalizeText(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/artisans/search/${searchTerm.trim()}`);
    } else {
      navigate("/");
    }
  };

  return (
    <header className="px-2 px-md-5 mb-4 mb-md-0">
      <Navbar expand="lg" className="d-flex justify-content-around">
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Form className="d-flex me-auto" onSubmit={handleSubmit}>
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Rechercher"
              aria-label="Search"
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Button variant="outline-secondary" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="fs-5 fw-bold text-secondary"
              as={Link}
              to="/artisans/food"
            >
              Alimentation
            </Nav.Link>
            <Nav.Link
              className="fs-5 fw-bold text-secondary"
              as={Link}
              to="/artisans/building"
            >
              Batîment
            </Nav.Link>
            <Nav.Link
              className="fs-5 fw-bold text-secondary"
              as={Link}
              to="/artisans/manufacturing"
            >
              Fabrication
            </Nav.Link>
            <Nav.Link
              className="fs-5 fw-bold text-secondary"
              as={Link}
              to="/artisans/services"
            >
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
