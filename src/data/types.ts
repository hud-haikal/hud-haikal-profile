export interface CardData {
  id: string;
  title: string;
  description: string;
  detail?: string;
  tags?: string[];
  link?: string;
}

export interface AboutData {
  name: string;
  tagline: string;
  bio: string;
  highlights: string[];
}

export interface ContactData {
  email: string;
  phone: string;
  linkedin: string;
  instagram: string;
}