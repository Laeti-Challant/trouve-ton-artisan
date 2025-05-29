import { Container } from "react-bootstrap";
import { useArtisanContext } from "../../context/useArtisanContext";
import ArtisanCard from "../common/ArtisanCard";

export default function Home() {
  const { topArtisans } = useArtisanContext();

  return (
    <>
      <title>Trouvez votre Artisan en Auvergne-Rhône-Alpes</title>
      <meta
        name="description"
        content="Trouvez facilement l'artisan qu'il vous faut en Auvergne-Rhône-Alpes (bâtiment, services, fabrication, alimentation). Contactez-le via notre plateforme."
      />
      <main>
        <div className="bg-primary">
          <Container>
            <h1 className="text-white fw-bold py-2">Trouve ton artisan</h1>
          </Container>
        </div>
        <Container className="my-5">
          <h2 className="text-secondary">Comment trouver mon artisan?</h2>
          <p>
            Trouver l'artisan qu'il vous faut dans la région
            Auvergne-Rhône-Alpes n'a jamais été aussi simple ! Suivez ces étapes
            pour entrer en contact avec nos professionnels qualifiés :
          </p>
          <ol>
            <li>
              <strong>Choisir la catégorie d’artisanat dans le menu.</strong>
              <p>
                Naviguez dans notre menu principal pour sélectionner le domaine
                qui correspond à votre besoin :
              </p>
              <ul className="mb-3">
                <li>Bâtiment</li>
                <li>Services</li>
                <li>Fabrication</li>
                <li>Alimentation</li>
              </ul>
            </li>
            <li>
              <strong>Choisir un artisan.</strong>
              <p>
                Une fois dans la catégorie souhaitée, parcourez la liste des
                artisans. Chaque fiche vous présente rapidement leur nom,
                spécialité, localisation et leur note. Cliquez sur la fiche d'un
                artisan pour en savoir plus sur son activité et ses compétences.
              </p>
            </li>
            <li>
              <strong>Le contacter via le formulaire de contact.</strong>
              <p>
                Sur la page détaillée de l'artisan, vous trouverez un formulaire
                de contact. Remplissez-le avec votre nom, l'objet de votre
                demande et votre message pour lui poser vos questions, demander
                des renseignements sur ses prestations ou obtenir un devis.
              </p>
            </li>
            <li>
              <strong>Une réponse sera apportée sous 48h.</strong>
              <p>
                Après avoir envoyé votre message, l'artisan s'engage à vous
                répondre dans un délai de 48 heures.
              </p>
            </li>
          </ol>
          <p>
            <strong>Astuce supplémentaire :</strong> Vous pouvez également
            utiliser la barre de recherche présente en haut de chaque page pour
            trouver un artisan directement par son nom, sa spécialité ou sa
            ville !
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
    </>
  );
}
