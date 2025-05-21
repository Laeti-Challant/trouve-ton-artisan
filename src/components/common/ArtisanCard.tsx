import { Card } from "react-bootstrap";
import type { IArtisan } from "../../@types";

interface IArtisanCardProps {
  artisan: IArtisan;
}

export default function ArtisanCard({ artisan }: IArtisanCardProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{artisan.name}</Card.Title>
        <Card.Text>{artisan.about}</Card.Text>
        <Card.Link href={`/artisans/${artisan.id}`}>Voir plus</Card.Link>
      </Card.Body>
    </Card>
  );
}
