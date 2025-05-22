import {
  Col,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container className="mt-5">
      <h2 className="pb-2">Demande de contact:</h2>
      <Row className="justify-content-md-center p-0 p-md-4 ">
        <Col xs lg="8" className="rounded-3 shadow p-3">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <FormLabel>Nom</FormLabel>
                  <FormControl type="text" placeholder="Nom" name="lastName" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <FormLabel>Prénom</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Prénom"
                    name="firstName"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Email</FormLabel>
              <FormControl type="email" placeholder="Email" name="email" />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Message</FormLabel>
              <FormControl as="textarea" rows={3} name="message" />
            </FormGroup>

            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
