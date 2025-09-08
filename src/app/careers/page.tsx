import Openings from "@/components/Careers/Openings";
import WorkCulture from "@/components/Careers/WorkCulture";
import Container from "@/components/Container";
import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import MarqueeComponent from "@/components/Services/Marquee";
import { fetchOpenings, fetchPageIntro } from "@/lib/api";
import { fonts } from "@/utils/fonts";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | MRNP & CO LLP",
  description: "Join our team and make a difference",
};

const pageIntroDataFallback: PageIntroProps = {
  pageName: "Life @ MRNP & CO LLP",
  pageTitle: "Join Our Team",
  pageDescription:
    "Students, recent graduates, seasoned professionals, and senior leaders constitute integral pillars of our success.",
};

const button = (
  <button className="w-fit md:w-auto">
    <Link
      className={`${fonts.instrument} flex justify-between text-white items-centertext-white font-semibold bg-primaryBlue px-6 md:px-8 py-3 md:py-4 hover:bg-primaryBlue/90 transition-colors duration-300 ease-in-outw-full md:w-auto`}
      href={"/careers"}
    >
      Learn More
      <span className="text-white ml-3">
        <ArrowRight />
      </span>
    </Link>
  </button>
);

const containerWidth = "md:max-w-lg lg:max-w-xl xl:max-w-lg 2xl:max-w-xl";

export default async function Careers() {
  
  const pageIntroData: PageIntroProps =
    (await fetchPageIntro("careers")) ?? pageIntroDataFallback;
  pageIntroData.children = button;
  pageIntroData.containerWidth = containerWidth;

  const openings = await fetchOpenings();
  return (
    <>
      <div className="bg-offWhite flex justify-center items-center ">
        <Container className="relative w-full px-0 sm:px-0 lg:px-0 xl:px-0 2xl:px-0">
          <PageIntro {...pageIntroData} />
          <div className=" hidden xl:block absolute top-0 right-0 md:size-[300px] lg:size-[600px]">
            <Image src={"/careers/1.png"} alt="Careers" fill />
          </div>
        </Container>
      </div>
      <div className="xl:mt-[350px]">
        <WorkCulture />
      </div>
      <MarqueeComponent />
      <Openings openings={openings} />
    </>
  );
}
