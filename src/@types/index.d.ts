export interface IArtisan {
  id: number;
  name: string;
  specialty: string;
  note: number;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}
export interface IContactFormProps {
  artisanName: string;
  artisanEmail: string;
}

export interface IFormData {
  lastName: string;
  firstName: string;
  email: string;
  message: string;
}