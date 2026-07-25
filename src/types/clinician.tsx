export interface Clinician {
  id: string;
  url: string;
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
  idealFor?: string[];
  extraSections?: {
    heading: string;
    content?: string;
    items?: { label?: string; text: string }[];
  }[];
}