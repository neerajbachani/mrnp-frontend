import FAQCompinent from "@/components/Home/FAQ";
import FirmInfo from "@/components/Home/FirmInfo";
import OurServices from "@/components/Home/OurServices";
// import ResourceCarousel from "@/components/Home/ResourceCarousel";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import HeroWithNavbar from "@/components/HeroWithNavbar";
import {
  fetchAllServices,
  fetchFAQs,
  // fetchFeaturedResources,
} from "@/lib/api";
import { Metadata } from "next";
import { navitems } from "@/constants/Navigation";
import OurLocationGlobe from "@/components/Home/OurLocationGlobe";

export const metadata: Metadata = {
  title: "Home | MRNP & CO LLP",
  description:
    "Smart approaches to solution with exceptional service. Talent and expertise necessary to meet our clients' needs in an ever-changing and fast-paced environment.",
};

export default async function Home() {
  const services = await fetchAllServices();
  const faqs = await fetchFAQs();
  // const featuredResources = await fetchFeaturedResources();

  // Update navitems with services
  const servicesSubmenu = services?.map((service) => ({
    name: service.name,
    href: `/services/${service.slug}`,
  }));
  navitems.find((item) => item.name === "Services")!.submenu = servicesSubmenu;

  return (
    <>
      <HeroWithNavbar
        navitems={navitems}
        backgroundImage={true}
        image="/mrnp-hero-bg.svg"
        title="History of expertise.\nReputation for excellence."
        description="Smart approaches to solution with exceptional service. Talent and expertise necessary to meet our clients' needs in an ever-changing and fast-paced environment."
        buttonText="About Us"
        buttonLink="/about"
      />
      <FirmInfo />
      {/* {featuredResources && featuredResources.length && (
        <ResourceCarousel resources={featuredResources} />
      )} */}
      {services && services.length > 0 && <OurServices services={services} />}
      <OurLocationGlobe />
      <WhatWeOffer />
      {faqs && faqs.length > 0 && <FAQCompinent faqs={faqs} />}
    </>
  );
}
