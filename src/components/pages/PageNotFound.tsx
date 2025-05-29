import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <title>Page non trouvée</title>
      <meta
        name="description"
        content="La page que vous cherchez n'existe pas."
      />
      <main className="text-center my-5">
        <h1 className="display-4">404 - Page not found</h1>
        <p className="lead">Désolé, la page que vous cherchez n'existe pas.</p>
        <div className="d-flex flex-column align-items-center gap-3">
          <Link to="/" className="btn btn-primary">
            Retour à l'accueil
          </Link>
          <Image src="./images/404-trouve-ton-artisan.png" fluid />
        </div>
      </main>
    </>
  );
}
