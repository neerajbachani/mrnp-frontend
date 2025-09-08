import OurLocations from "@/components/Contact/OurLocations";
import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import { fetchPageIntro } from "@/lib/api";
import { Metadata } from "next";

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
  return (
    <>
      <PageIntro {...pageIntro} />
      <OurLocations />
    </>
  );
}
