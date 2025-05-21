import { useContext, useEffect } from "react";
import { ArtisanContext } from "../../context/ArtisanContext";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ArtisanCard from "../common/ArtisanCard";
import { useParams } from "react-router-dom";
import { slugToCategory } from "../../utils/slugToCategory";

export default function ArtisansList() {
  const context = useContext(ArtisanContext);

  if (!context) {
    throw new Error("ArtisanList must be used within an ArtisanProvider");
  }

  const { category: slug, term } = useParams();
  const category = slugToCategory(slug);

  const { artisans, setSelectedCategory, loading, searchTerm, setSearchTerm } =
    context;

  useEffect(() => {
    if (term !== searchTerm) {
      setSearchTerm(term || "");
    }
    setSelectedCategory(category || null);
  }, [category, term, searchTerm, setSearchTerm, setSelectedCategory]);

  const filteredArtisans = artisans.filter((artisan) => {
    const matchesCategory = category ? artisan.category === category : true;
    const matchesSearchTerm = searchTerm
      ? artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesSearchTerm;
  });

  if (loading) {
    return (
      <div className="bg-primary p-3">
        <Spinner className="text-white mx-5" />
      </div>
    );
  }
  if (!filteredArtisans.length) {
    return (
      <main>
        <div className="bg-primary p-3 text-white text-center">
          <h2>Aucun artisan trouvé 😢</h2>
          <p>Essayez une autre recherche ou catégorie.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="bg-primary">
        <Container>
          <h1 className="text-white fw-bold">
            Artisans dans {category || searchTerm}
          </h1>
        </Container>
      </div>
      <Container className="w-100 py-3 mx-auto bg-white rounded-3 ">
        <Row>
          {filteredArtisans.map((artisan) => (
            <Col className="p-2" key={artisan.id} lg={6}>
              <ArtisanCard artisan={artisan} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
