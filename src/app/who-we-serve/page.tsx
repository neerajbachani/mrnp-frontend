import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import IndustryExpertise from "@/components/Who-we-serve/IndustryExpertise";
import OurClients from "@/components/Who-we-serve/OurClients";
import { fetchPageIntro, fetchAllServices } from "@/lib/api";
import { Metadata } from "next";
import PageWithNavbar from "@/components/PageWithNavbar";
import { navitems } from "@/constants/Navigation";

export const metadata: Metadata = {
  title: "Who We Serve | MRNP",
  description:
    "Discover the industries and clients we serve at MRNP. From healthcare to finance, we provide tailored solutions across diverse sectors.",
};

const pageIntroFallback: PageIntroProps = {
  pageName: "Who We Serve",
  pageTitle: "Industries We Serve",
  pageDescription:
    "Discover the industries and clients we serve at MRNP. From healthcare to finance, we provide tailored solutions across diverse sectors.",
};

export default async function WhoWeServe() {
  const pageIntro = (await fetchPageIntro("who-we-serve")) || pageIntroFallback;

  // Update navitems with services
  const services = await fetchAllServices();
  const servicesSubmenu = services?.map((service) => ({
    name: service.name,
    href: service.slug,
  }));
  navitems.find((item) => item.name === "Services")!.submenu = servicesSubmenu;

  return (
    <PageWithNavbar navitems={navitems} transparentNav={true}>
      <PageIntro {...pageIntro} />
      <OurClients />
      <IndustryExpertise />
    </PageWithNavbar>
  );
}
