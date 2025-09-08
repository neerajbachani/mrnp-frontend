import OurCommitment from "@/components/About/OurCommitment";
import OurPeople from "@/components/About/OurPeople";
import OurValues from "@/components/About/OurValues";
import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import { fetchOurPeoples, fetchPageIntro } from "@/lib/api";
import { Metadata } from "next";

const pageIntroDataFallback: PageIntroProps = {
  pageName: "About",
  pageTitle: `Empowering Financial Futures.`,
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
  return (
    <>
      <PageIntro {...pageIntroData} />
      <OurCommitment />
      <OurValues />
      {peoples && peoples.length > 0 && <OurPeople peoples={peoples} />}
    </>
  );
}
