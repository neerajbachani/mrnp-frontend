export interface PeopleResponse {
  name: string;
  position: string;
  degree: string;
  city: string;
  image: { url: string };
  description: string;
  phone: string;
  email: string;
}

export interface People {
  name: string;
  position: string;
  degree: string;
  city: string;
  image: string;
  description: string;
  phone: string;
  email: string;
}