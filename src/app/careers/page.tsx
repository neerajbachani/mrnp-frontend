import Openings from "@/components/Careers/Openings";
import WorkCulture from "@/components/Careers/WorkCulture";
import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import PageWithNavbar from "@/components/PageWithNavbar";
import MarqueeComponent from "@/components/Services/Marquee";
import { fetchAllServices, fetchOpenings, fetchPageIntro } from "@/lib/api";
import { fonts } from "@/utils/fonts";
import { Metadata } from "next";
import Link from "next/link";
import { navitems } from "@/constants/Navigation";

export const metadata: Metadata = {
  title: "Careers | MRNP & CO LLP",
  description: "Join our team and make a difference",
};

const pageIntroDataFallback: PageIntroProps = {
  pageTitle: "Join Our Team",
  pageDescription:
    "Students, recent graduates, seasoned professionals, and senior leaders constitute integral pillars of our success.",
  imgSrc: "/About_banner.png",
};

export default async function Careers() {
  const pageIntroData: PageIntroProps =
    (await fetchPageIntro("careers")) ?? pageIntroDataFallback;

  const openings = await fetchOpenings();

  // Update navitems with services
  const services = await fetchAllServices();
  const servicesSubmenu = services?.map((service) => ({
    name: service.name,
    href: service.slug,
  }));
  navitems.find((item) => item.name === "Services")!.submenu = servicesSubmenu;

  return (
    <PageWithNavbar navitems={navitems} transparentNav={true}>
      <PageIntro {...pageIntroData} />
      <WorkCulture />
      <MarqueeComponent />
      <Openings openings={openings} />
    </PageWithNavbar>
  );
}
