import Container from "@/components/Container";
import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import { fonts } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const pageIntro: PageIntroProps = {
  pageTitle: "Page Not Found",
  pageDescription: "Oops! looks like you're lost.",
  children: (
    <button className="w-fit md:w-auto">
      <Link
        className={`${fonts.instrument} 
      flex 
      justify-between 
      items-center
      text-white 
      font-semibold 
      bg-primaryBlue 
      px-6 md:px-8 
      py-3 md:py-4 
      hover:bg-primaryBlue/90 
      transition-colors 
      duration-300 
      ease-in-out
      w-full md:w-auto`}
        href={"/"}
      >
        Go to Home
      </Link>
    </button>
  ),
};

export default function NotFound() {
  return (
    <>
      <PageIntro {...pageIntro} />
      <section className="w-full flex justify-center items-center py-8">
        <Container className="flex justify-center items-center">
          <Image height={800} width={800} src={"/404.jpg"} alt="404" />
        </Container>
      </section>
    </>
  );
}
