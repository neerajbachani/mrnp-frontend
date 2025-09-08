import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import IndustryExpertise from "@/components/Who-we-serve/IndustryExpertise";
import OurClients from "@/components/Who-we-serve/OurClients";
import { fetchPageIntro } from "@/lib/api";
import { Metadata } from "next";

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
  return (
    <>
      <PageIntro {...pageIntro} />
      <OurClients />
      <IndustryExpertise />
    </>
  );
}
