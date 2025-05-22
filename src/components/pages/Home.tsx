import { Container } from "react-bootstrap";
import { useArtisanContext } from "../../context/useArtisanContext";
import ArtisanCard from "../common/ArtisanCard";

export default function Home() {
  const { topArtisans } = useArtisanContext();

  return (
    <main>
      <div className="bg-primary">
        <Container>
          <h1 className="text-white fw-bold py-2">Trouve ton artisan</h1>
        </Container>
      </div>
      <Container className="my-5">
        <h2 className="text-secondary">Comment ça marche</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          nulla error eligendi veniam ea dolorum rem, odit aut blanditiis porro
          fuga deleniti autem voluptatem esse dolore officiis quidem nobis
          laudantium sed. Sit tenetur quisquam error fugiat deserunt voluptatum,
          minima, quae iste eveniet quia facilis officia sapiente fugit facere,
          itaque magnam.
        </p>
      </Container>
      <Container>
        <h2 className="text-secondary">Les artisans du mois</h2>
        <Container className="w-100 py-3 mx-auto bg-white rounded-3 d-flex flex-column flex-lg-row justify-content-between">
          {topArtisans.map((artisan) => (
            <div className="w-lg-25 p-2" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </Container>
      </Container>
    </main>
  );
}
