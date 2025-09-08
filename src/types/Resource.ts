export interface ResourceContentResponse {
  title: string;
  description: string;
  coverImage: { url: string };
  isFeatured: boolean;
  pdf: { url: string };
}

export interface ResourcesResponse {
  slug: string;
  name: string;
  content: ResourceContentResponse[];
}

export interface ResourceContent {
  title: string;
  description: string;
  coverImage: string;
  pdf: string;
}

export interface Resources {
  slug: string;
  name: string;
  content: ResourceContent[];
}
