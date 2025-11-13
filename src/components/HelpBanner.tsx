import { fonts } from "@/utils/fonts";
import Link from "next/link";
import Image from "next/image";

export default function HelpBanner() {
  return (
    <section className="relative h-[50vh] lg:h-[70vh] bg-[#F5F5F0] py-16 md:py-20 lg:py-20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 md:space-y-2">
          <h2
            className={`${fonts.forum} text-3xl md:text-4xl lg:text-[2.625rem] text-[#1a1a1a] leading-tight`}
          >
            We&apos;re here to help
          </h2>
          <p className={`${fonts.instrument} text-[#070E2E] text-base md:text-lg`}>
            Discover our team and explore how we can collaborate with you.
          </p>
          <div className="pt-2">
            <Link
              className={`${fonts.instrument} font-semibold inline-block px-8 md:px-10 py-3 md:py-4 bg-primaryBlue text-white text-base rounded-full hover:bg-primaryBlue/90 transition-colors duration-300`}
              aria-label="Contact Us"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Lines SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none">
        <Image
          src="/help-lines.svg"
          alt=""
          width={1920}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
