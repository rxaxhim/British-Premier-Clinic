export interface Clinician {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  experience?: string;
  education: string[];
  certifications: string[];
  bio: string;
  email?: string;
  phone?: string;
  image: string;
  availability?: string;
}