import { fonts } from "@/utils/fonts";
import Image from "next/image";

export interface PageIntroProps {
  pageName?: string;
  pageTitle?: string;
  pageTitle2?: string;
  pageSubtitle?: string;
  pageDescription?: string;
  imgSrc?: string;
  children?: React.ReactNode;
  containerWidth?: string;
}

export default function PageIntro({
  pageName,
  pageTitle,
  pageTitle2,
  pageDescription,
  imgSrc,
}: PageIntroProps) {
  return (
    <section className="relative bg-primaryBlue pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-20 h-[85vh]">
      <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">
        {/* Text Content */}
        <div className="mb-12 md:mb-16 lg:mb-12 max-w-7xl ">
          <h1
            className={`${fonts.forum} text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] text-white leading-tight mb-3 md:mb-5`}
          >
            {pageTitle ? pageTitle : pageName}
          </h1>
          {pageTitle2 && (
            <h2
              className={`${fonts.instrument} text-white text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-tight mb-3 md:mb-5 max-w-6xl`}
            >
              {pageTitle2}
            </h2>
          )}
          {pageDescription && (
            <p className={`${fonts.dm} text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl`}>
              {pageDescription}
            </p>
          )}
        </div>

        {/* Team Image - Overlapping */}
        {imgSrc && (
          <div className="relative w-full -mb-48 md:-mb-56 lg:-mb-80">
            <Image
              src={decodeURI(imgSrc)}
              alt={pageName || "Banner"}
              width={1200}
              height={600}
              className="w-full h-auto shadow-xl"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
