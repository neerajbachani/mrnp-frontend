import { PageIntroProps } from "@/components/PageIntro";

export type ChooseMRNP = {
  title: string;
  subText: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ContentBlock = {
  title: string;
  content: string;
};

export interface Service {
  slug: string;
  pageIntro: PageIntroProps;
  image1: string;
  image2: string;
  content: ContentBlock[];
  chooseMRNP?: ChooseMRNP[];
  faqs?: FAQ[];
}


export interface AllServiceResponse {
  name: string;
  slug: string;
  description: string;
  image1: { url: string };
}