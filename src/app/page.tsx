import FAQCompinent from "@/components/Home/FAQ";
import FirmInfo from "@/components/Home/FirmInfo";
import OurServices from "@/components/Home/OurServices";
import ResourceCarousel from "@/components/Home/ResourceCarousel";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import {
  fetchAllServices,
  fetchFAQs,
  fetchFeaturedResources,
  fetchPageIntro,
} from "@/lib/api";
import { Metadata } from "next";

const pageIntroDataFallback: PageIntroProps = {
  pageTitle: `History of expertise.\nReputation for excellence.`,
  pageDescription: `Smart approaches to solution with exceptional service. Talent and expertise necessary to meet our clients’ needs in an ever-changing and fast-paced environment.`,
  imgSrc: "/Home_banner.png",
};

export const metadata: Metadata = {
  title: "Home | MRNP & CO LLP",
  description:
    "Smart approaches to solution with exceptional service. Talent and expertise necessary to meet our clients' needs in an ever-changing and fast-paced environment.",
};

export default async function Home() {
  const pageIntroData: PageIntroProps =
    (await fetchPageIntro("home")) ?? pageIntroDataFallback;

  const services = await fetchAllServices();
  const faqs = await fetchFAQs();
  const featuredResources = await fetchFeaturedResources();

  return (
    <>
      <PageIntro {...pageIntroData} />
      <FirmInfo />
      {/* {featuredResources && featuredResources.length && (
        <ResourceCarousel resources={featuredResources} />
      )} */}
      {services && services.length > 0 && <OurServices services={services} />}
      <WhatWeOffer />
      {faqs && faqs.length > 0 && <FAQCompinent faqs={faqs} />}
    </>
  );
}
