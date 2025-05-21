import { Carousel, CarouselItem, Container } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Container>
        <h1 className="text-primary">Trouve ton artisan</h1>
        <h2>Comment ça marche</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          nulla error eligendi veniam ea dolorum rem, odit aut blanditiis porro
          fuga deleniti autem voluptatem esse dolore officiis quidem nobis
          laudantium sed. Sit tenetur quisquam error fugiat deserunt voluptatum,
          minima, quae iste eveniet quia facilis officia sapiente fugit facere,
          itaque magnam.
        </p>
      </Container>
      <Carousel>
        <div className="carousel_indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <CarouselItem className="active"></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </Carousel>
    </main>
  );
}
