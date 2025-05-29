import { useRef, useState } from "react";
import {
  Col,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Spinner,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import type { IFormData, IContactFormProps } from "../../@types";
import {
  Controller,
  useForm,
  type FieldErrors,
  type SubmitHandler,
} from "react-hook-form";

export default function ContactForm({
  artisanName,
  artisanEmail,
}: IContactFormProps) {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // const formDataRules = {
  //   lastName: [(v: string) => !!v || "Le nom est requis"],
  //   firstName: [(v: string) => !!v || "Le prénom est requis"],
  //   message: [(v: string) => !!v || "Un message est requis"],
  //   email: [
  //     (v: string) => !!v || "L'email est requis",
  //     (v: string) =>
  //       /^\S+@\S+\.\S+$/.test(v) || "Veuillez saisir un email valide",
  //   ],
  // };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    mode: "onTouched",
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      message: "",
    },
  });

  const onValidSubmit: SubmitHandler<IFormData> = async () => {
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      toast.success(
        "Votre message a été envoyé avec succès. Nous vous contacterons bientôt."
      );

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      toast.success("Un email de confirmation vous a été envoyé.");
      reset(); // Reset the form after successful submission
    } catch {
      toast.error(
        "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard."
      );
    } finally {
      setLoading(false);
    }
  };

  const onInvalidSubmit = (errors: FieldErrors<IFormData>) => {
    const firstErrorField = Object.keys(errors)[0];
    const firstErrorMessage =
      errors[firstErrorField as keyof IFormData]?.message;
    toast.error(
      `Veuillez corriger les erreurs. ${
        firstErrorMessage
          ? `Problème avec : ${firstErrorMessage}`
          : "Formulaire incomplet."
      }`
    );
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!formRef.current) return;

  //   setLoading(true);

  //   try {
  //     await emailjs.sendForm(
  //       import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //       formRef.current,
  //       { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
  //     );
  //     toast.success(
  //       "Votre message a été envoyé avec succès. Nous vous contacterons bientôt."
  //     );

  //     await emailjs.sendForm(
  //       import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY,
  //       formRef.current,
  //       { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
  //     );
  //     toast.success("Un email de confirmation vous a été envoyé.");
  //     formRef.current?.reset(); // Reset the form after successful submission
  //   } catch {
  //     toast.error(
  //       "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard."
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Container className="mt-5">
      <h2 className="pb-2">Demande de contact:</h2>
      <Row className="justify-content-md-center p-0 p-md-4 ">
        <Col xs lg="8" className="rounded-3 shadow p-3">
          <Form
            ref={formRef}
            onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}
            noValidate
          >
            <input type="hidden" name="to_name" value={artisanName} />
            <input type="hidden" name="to_email" value={artisanEmail} />
            <Row>
              <Col>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <FormLabel>Nom</FormLabel>
                  <Controller
                    name="lastName"
                    control={control}
                    rules={{ required: "Le nom est requis" }}
                    render={({ field }) => (
                      <FormControl
                        type="text"
                        placeholder="Nom"
                        {...field}
                        isInvalid={!!errors.lastName}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName?.message}
                  </Form.Control.Feedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <FormLabel>Prénom</FormLabel>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: "Le prénom est requis" }}
                    render={({ field }) => (
                      <FormControl
                        type="text"
                        placeholder="Prénom"
                        {...field}
                        isInvalid={!!errors.firstName}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName?.message}
                  </Form.Control.Feedback>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Email</FormLabel>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "L'email est requis",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Veuillez saisir un email valide",
                  },
                }}
                render={({ field }) => (
                  <FormControl
                    type="email"
                    placeholder="Email"
                    {...field}
                    isInvalid={!!errors.email}
                  />
                )}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Message</FormLabel>
              <Controller
                name="message"
                control={control}
                rules={{ required: "Un message est requis" }}
                render={({ field }) => (
                  <FormControl
                    as="textarea"
                    rows={5}
                    placeholder="Votre message"
                    {...field}
                    isInvalid={!!errors.message}
                  />
                )}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message?.message}
              </Form.Control.Feedback>
            </FormGroup>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Envoi en cours...
                </>
              ) : (
                "Envoyer"
              )}
            </button>
          </Form>
        </Col>
      </Row>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
