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
        <Link to="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
      </main>
    </>
  );
}
