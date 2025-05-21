import { Card } from "react-bootstrap";
import type { IArtisan } from "../../@types";
import StarsProgress from "./StarsProgress";

interface IArtisanCardProps {
  artisan: IArtisan;
}

export default function ArtisanCard({ artisan }: IArtisanCardProps) {
  return (
    <Card className="mx-auto bg-light shadow" style={{ minWidth: "18rem" }}>
      <Card.Body className="d-flex flex-column p-2">
        <div className="d-flex justify-content-center">
          <Card.Title className="pb-4">{artisan.name}</Card.Title>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-between">
            <Card.Text className="m-0 pt-1">{artisan.specialty}</Card.Text>
            <Card.Text>{artisan.location}</Card.Text>
          </div>
          <div className="d-flex flex-column w-50 text-end align-items-end">
            <Card.Text className="d-flex align-items-center justify-content-end">
              <span className="fw-bold pe-2">{artisan.note}</span>
              <StarsProgress note={artisan.note} maxNote={5} />
            </Card.Text>
            <Card.Link
              className="btn btn-primary"
              href={`/artisans/${artisan.id}`}
            >
              Voir plus
            </Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
