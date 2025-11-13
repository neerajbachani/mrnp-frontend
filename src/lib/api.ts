import { PageIntroProps } from "@/components/PageIntro";
import env from "@/config/env";
import { Opening } from "@/types/Opening";
import { People, PeopleResponse } from "@/types/People";
import {
  ResourceContent,
  ResourceContentResponse,
  Resources,
  ResourcesResponse,
} from "@/types/Resource";
import { AllServiceResponse, FAQ, Service } from "@/types/Service";

const API_URL = env.API_URL;
const API_TOKEN = env.API_TOKEN;

export async function fetchPageIntro(
  slug: string
): Promise<PageIntroProps | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/banners?filters[slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        cache: "no-store", // Ensures fresh data on every request
      }
    );
      console.log("response", response);
      console.log("api", `${API_URL}/api/banners?filters[slug][$eq]=${slug}&populate=*`);
    if (!response.ok) {
      const data = await response.json();
      console.log(data);

      throw new Error(`Failed to fetch banner: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.data.length) return null;

    const res = data.data[0];
    const imageUrl = res?.image?.url ? `${API_URL}${res.image.url}` : "";

    return {
      pageName: res.name,
      pageTitle: res.title,
      pageSubtitle: res.subtitle || "",
      pageDescription: res.description || "",
      imgSrc: imageUrl,
    };
  } catch (error) {
    console.error("Error fetching banner:", error);
    return null;
  }
}

export async function fetchAllServices(): Promise<AllServiceResponse[] | null> {
  try {
    const response = await fetch(`${API_URL}/api/services?populate=image1`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      cache: "no-store", // Ensures fresh data on every request
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch All Services: ${response.statusText}`);
    }

    // Explicitly type the response JSON
    const jsonData: { data: AllServiceResponse[] } = await response.json();
    const services = jsonData.data.map((service) => ({
      name: service.name,
      slug: service.slug,
      description: service.description,
      image1: { url: `${API_URL}${service.image1.url}` },
    }));

    if (!services.length) return null;

    return services;
  } catch (error) {
    console.error("Error fetching banner:", error);
    return null;
  }
}

export async function fetchService(slug: string): Promise<Service | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/services?filters[slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        cache: "no-store", // Ensures fresh data on every request
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch service: ${response.statusText}`);
    }

    // Explicitly type the response JSON
    const data = await response.json().then((data) => data.data[0]);
    if (!data) return null;

    return {
      pageIntro: {
        pageTitle: data.banner.title || "",
        pageSubtitle: data.banner.subtitle || "",
        pageDescription: data.banner.description || "",
      },
      image1: data.image1?.url ? `${API_URL}${data.image1.url}` : "",
      image2: data.image2?.url ? `${API_URL}${data.image2.url}` : "",
      slug: data.slug,
      content: data.content,
      chooseMRNP: data.chooseMRNP,
      faqs: data.faqs,
    };
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export async function fetchFAQs(): Promise<FAQ[] | null> {
  try {
    const response = await fetch(`${API_URL}/api/faqs?populate=*`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      cache: "no-store", // Ensures fresh data on every request
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch service: ${response.statusText}`);
    }

    // Explicitly type the response JSON
    const data = await response.json().then((data) => data.data);

    if (!data) return null;

    return data.map((item: { faq: FAQ }) => ({
      question: item.faq.question,
      answer: item.faq.answer,
    }));
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return null;
  }
}

export async function fetchOurPeoples(): Promise<People[] | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/peoples?populate=*&sort=order:asc`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        cache: "no-store", // Ensures fresh data on every request
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch peoples: ${response.statusText}`);
    }

    // Explicitly type the response JSON
    const data = await response.json().then((data) => data.data);

    if (!data) return null;

    return data.map((item: PeopleResponse) => ({
      name: item.name,
      position: item.position,
      degree: item.degree,
      city: item.city,
      image: item.image.url ? `${API_URL}${item.image.url}` : "",
      description: item.description,
      phone: item.phone,
      email: item.email,
    }));
  } catch (error) {
    console.error("Error fetching peoples:", error);
    return null;
  }
}

export async function fetchOpenings(): Promise<Opening[] | null> {
  try {
    const response = await fetch(`${API_URL}/api/openings?populate=*`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensures fresh data on every request
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch openings: ${response.statusText}`);
    }

    const data: Opening[] = await response.json().then((data) => data.data);

    if (!data) return null;
    return data;
  } catch (error) {
    console.error("Error fetching openings:", error);
    return null;
  }
}

export async function fetchAllResources(): Promise<Resources[] | null> {
  try {
    const response = await fetch(`${API_URL}/api/resources?populate=*`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      cache: "no-store", // Ensures fresh data on every request
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch resources: ${response.statusText}`);
    }

    const data: Resources[] = await response.json().then((data) => data.data);

    if (!data) return null;
    return data;
  } catch (error) {
    console.error("Error fetching resources:", error);
    return null;
  }
}

export async function fetchResource(slug: string): Promise<Resources | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/resources?filters[slug][$eq]=${slug}&populate[0]=content&populate[1]=content.coverImage&populate[2]=content.pdf`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        cache: "no-store", // Ensures fresh data on every request
      }
    );
    console.log(response);

    if (!response.ok) {
      throw new Error(`Failed to fetch resource: ${response.statusText}`);
    }

    const data = await response.json().then((data) => data.data[0]);

    if (!data) return null;
    return {
      name: data.name,
      slug: data.slug,
      content: data.content.map((item: ResourceContentResponse) => ({
        title: item.title,
        description: item.description,
        coverImage: item.coverImage.url
          ? `${API_URL}${item.coverImage.url}`
          : "",
        pdf: item.pdf.url ? `${API_URL}${item.pdf.url}` : "",
      })),
    };
  } catch (error) {
    console.error("Error fetching resource:", error);
    return null;
  }
}

export async function fetchFeaturedResources(): Promise<ResourceContent[]> {
  try {
    // const featuredResources: Resources[] = [];
    const response = await fetch(
      `${API_URL}/api/resources?populate[0]=content&populate[1]=content.coverImage&populate[2]=content.pdf`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch resources: ${response.statusText}`);
    }

    const data = await response.json();

    const featuredResources = data.data.flatMap((item: ResourcesResponse) =>
      item.content
        .filter((content: ResourceContentResponse) => content.isFeatured)
        .map((content) => ({
          title: content.title,
          description: content.description,
          coverImage: content.coverImage?.url
            ? `${API_URL}${content.coverImage.url}`
            : "",
          pdf: content.pdf?.url ? `${API_URL}${content.pdf.url}` : "",
        }))
    );

    return featuredResources;
  } catch (error) {
    console.error("Error fetching featured resources:", error);
    return [];
  }
}
