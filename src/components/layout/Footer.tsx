import { Col, Container, Row } from "react-bootstrap";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary text-white pt-4 pb-3 mt-5">
        <Container fluid="md">
          <Row>
            <Col md={6} className="text-center">
              <Logo />
            </Col>
            <Col md={6} className="d-flex flex-column align-items-center">
              <h5 className="w-50">Trouve ton artisan</h5>
              <p className="mb-0 w-50 ">101, cours Charlemagne</p>
              <p className="mb-0 w-50 ">CS 20033</p>
              <p className="mb-0 w-50 ">59269 LYON CEDEX 02</p>
              <p className="mb-0 w-50 ">FRANCE</p>
              <p className="mb-0 w-50 ">+33 (0)4 26 73 40 00</p>
            </Col>
          </Row>
          <Row className="text-center text-md-center mt-5">
            <Col md={12}>
              <nav className="nav flex-column flex-md-row justify-content-md-center">
                <Link className="nav-link text-white" to={"/"}>
                  Mentions légales
                </Link>
                <Link className="nav-link text-white" to={"/"}>
                  Données personnelles
                </Link>
                <Link className="nav-link text-white" to={"/"}>
                  Accessibilité
                </Link>
                <Link className="nav-link text-white" to={"/"}>
                  Cookies
                </Link>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col md={12} className="text-center mt-2">
          <a href="#">
            <FontAwesomeIcon
              className="p-2 fs-4 text-secondary"
              icon={faSquareFacebook}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              className="p-2 fs-4 text-secondary"
              icon={faLinkedin}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              className="p-2 fs-4 text-secondary"
              icon={faYoutube}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              className="p-2 fs-4 text-secondary"
              icon={faInstagram}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              className="p-2 fs-4 text-secondary"
              icon={faXTwitter}
            />
          </a>
        </Col>
      </Row>
    </footer>
  );
}
