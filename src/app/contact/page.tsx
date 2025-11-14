import OurLocations from "@/components/Contact/OurLocations";
import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import { fetchPageIntro, fetchAllServices } from "@/lib/api";
import { Metadata } from "next";
import PageWithNavbar from "@/components/PageWithNavbar";
import { navitems } from "@/constants/Navigation";

export const metadata: Metadata = {
  title: "Contact Us | MRNP",
  description: "Connect with us",
};

const pageIntroFallback: PageIntroProps = {
  pageName: "Contact Us",
  pageTitle: "Connect with us",
  pageDescription:
    "We are always here to help you. Please feel free to contact us.",
};

export default async function Contact() {
  const pageIntro = (await fetchPageIntro("contact")) ?? pageIntroFallback;

  // Update navitems with services
  const services = await fetchAllServices();
  const servicesSubmenu = services?.map((service) => ({
    name: service.name,
    href: `/services/${service.slug}`,
  }));
  navitems.find((item) => item.name === "Services")!.submenu = servicesSubmenu;

  return (
    <PageWithNavbar navitems={navitems} transparentNav={true}>
      <PageIntro {...pageIntro} />
      <OurLocations />
    </PageWithNavbar>
  );
}
