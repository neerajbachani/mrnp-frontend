import OurCommitment from "@/components/About/OurCommitment";
import OurPeople from "@/components/About/OurPeople";
import OurValues from "@/components/About/OurValues";
import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import PageWithNavbar from "@/components/PageWithNavbar";
import { fetchAllServices, fetchOurPeoples, fetchPageIntro } from "@/lib/api";
import { Metadata } from "next";
import { navitems } from "@/constants/Navigation";

const pageIntroDataFallback: PageIntroProps = {
  pageName: "About",
  // pageTitle: `Empowering Financial Futuresuygtfedwvxs.`,
  pageDescription: `We see each client as unique, with their own set of goals and challenges. That's why we don't offer a one-size-fits-all solution. We're dedicated to understanding your specific needs and working tirelessly to deliver the best possible results.`,
  imgSrc: "/About_banner.png",
};

export const metadata: Metadata = {
  title: "About | MRNP & CO LLP",
  description: `We see each client as unique, with their own set of goals and challenges. That's why we don't offer a one-size-fits-all solution. We're dedicated to understanding your specific needs and working tirelessly to deliver the best possible results.`,
};

export default async function About() {
  const pageIntroData: PageIntroProps =
    (await fetchPageIntro("about")) ?? pageIntroDataFallback;
  const peoples = await fetchOurPeoples();
  
  // Update navitems with services
  const services = await fetchAllServices();
  const servicesSubmenu = services?.map((service) => ({
    name: service.name,
    href: `/services/${service.slug}`,
  }));
  navitems.find((item) => item.name === "Services")!.submenu = servicesSubmenu;

  return (
    <PageWithNavbar navitems={navitems} transparentNav={true}>
      <PageIntro {...pageIntroData} />
      <OurCommitment />
      <OurValues />
      {peoples && peoples.length > 0 && <OurPeople peoples={peoples} />}
    </PageWithNavbar>
  );
}
