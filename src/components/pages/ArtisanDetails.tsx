import { useContext } from "react";
import { ArtisanContext } from "../../context/ArtisanContext";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarsProgress from "../common/StarsProgress";
import ContactForm from "../common/ContactForm";

export default function ArtisanDetails() {
  const context = useContext(ArtisanContext);

  if (!context) {
    throw new Error("ArtisanList must be used within an ArtisanProvider");
  }

  const { artisans, loading } = context;

  const { id } = useParams();
  if (!id) {
    return (
      <main>
        <div className="bg-primary p-3 text-white text-center">
          <h2>Artisan introuvable</h2>
        </div>
      </main>
    );
  }
  const artisan = artisans.find((artisan) => artisan.id === parseInt(id));
  if (!artisan) {
    return (
      <main>
        <div className="bg-primary p-3 text-white text-center">
          <h2>Artisan introuvable 😢</h2>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <div className="bg-primary p-3">
        <Spinner className="text-white mx-5" />
      </div>
    );
  }

  return (
    <>
      <title>{`${artisan.name} - Artisan en Auvergne-Rhône-Alpes`}</title>
      <meta
        name="description"
        content={`Retrouvez des informations sur l'artisan: ${artisan.name} et contactez le`}
      />
      <main className="artisan-details">
        <div className="bg-primary mb-4 mb-md-5">
          <Container>
            <h1 className="text-white fw-bold text-center py-2">
              Fiche détaillée de {artisan.name}
            </h1>
          </Container>
        </div>
        <Container>
          <Row className="py-2">
            <Col>
              <h2>{artisan.specialty}</h2>
            </Col>
            <Col className="d-flex justify-content-end">
              <h2 className="fs-4 pe-2">{artisan.note}</h2>
              <StarsProgress note={artisan.note} maxNote={5} />
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <h2>Localisation: {artisan.location}</h2>
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <h3 className="mb-3">À propos</h3>
              <p>{artisan.about}</p>
            </Col>
          </Row>
          <Row>
            <Col className="py-2">
              <a
                href={artisan.website}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter le site internet de ${artisan.name}`}
              >
                Site internet
              </a>
            </Col>
            <Col
              xs="auto"
              className="d-flex justify-content-end align-items-center"
            >
              <h2 className="fs-5 m-0">
                <a
                  href={`mailto:${artisan.email}`}
                  className="contact-email"
                  aria-label={`Envoyer un email à ${artisan.name}`}
                >
                  {artisan.email}
                </a>
              </h2>
            </Col>
          </Row>
        </Container>
        <ContactForm />
      </main>
    </>
  );
}
