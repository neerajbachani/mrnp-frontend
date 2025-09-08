import { fonts } from "@/utils/fonts";
import Container from "./Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Heading from "./Heading";

export default function HelpBanner() {
  return (
    <section className="bg-offWhite py-8 md:py-10 lg:py-[50px] flex justify-center items-center relative overflow-hidden">
      <div className="absolute right-0 bottom-0 opacity-50 lg:opacity-70 pointer-events-none">
        <Image
          src={"/DotsPatternBlue.svg"}
          alt="Pattern"
          width={500}
          height={300}
          className=""
        />
      </div>
      <Container className="">
        <div className="space-y-5">
          <Heading style="lg:text-[60px] 2xl:text-[64px]">
            We&apos;re here to help
          </Heading>
          <p className={`${fonts.inter} text-lg md:text-xl lg:text-2xl`}>
            Discover our team and explore how we can collaborate with you.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              className={`flex justify-between items-center px-6 py-3 max-w-[170px] bg-primaryBlue hover:bg-primaryBlue/90 transition-colors duration-200 text-white  ${fonts.instrument}`}
              aria-label="Contact Us"
              href="/contact"
            >
              Contact Us
              <span className="ml-3">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
