import { fonts } from "@/utils/fonts";
import Container from "./Container";
import Image from "next/image";

export interface PageIntroProps {
  pageName?: string;
  pageTitle: string;
  pageSubtitle?: string;
  pageDescription?: string;
  imgSrc?: string;
  children?: React.ReactNode;
  containerWidth?: string;
}

export default function PageIntro({
  pageName,
  pageTitle,
  pageSubtitle,
  pageDescription,
  imgSrc,
  children,
  containerWidth = "md:max-w-4xl lg:max-w-7xl",
}: PageIntroProps) {
  return (
    <>
      <section className="flex justify-center items-center bg-offWhite pb-12 relative">
        <div className="absolute right-0 bottom-0 opacity-50 lg:opacity-70 pointer-events-none ">
          <Image
            src={"/DotsPattern.svg"}
            alt="Pattern"
            width={500}
            height={450}
          />
        </div>
        <Container>
          <div className={`${containerWidth} space-y-4 `}>
            {pageName && (
              <p
                className={`${fonts.instrument} text-sm lg:text-base text-primaryBlue font-semibold`}
              >
                {pageName}
              </p>
            )}
            <h1
              className={`${fonts.gilda} text-3xl md:text-5xl 2xl:text-6xl md:leading-[46px] lg:leading-tight text-primaryBlue whitespace-pre-line`}
            >
              {pageTitle.replace(/\\n/g, "\n")}
            </h1>
            {pageSubtitle && (
              <h3
                className={`${fonts.inter} text-base md:text-xl lg:text-xl font-medium text-primaryBlue whitespace-pre-line`}
              >
                {pageSubtitle}
              </h3>
            )}
            {pageDescription && (
              <h3
                className={`${fonts.inter} text-base 2xl:text-lg !leading-6  text-primaryBlue whitespace-pre-line`}
              >
                {pageDescription.replace(/\\n/g, "\n")}
              </h3>
            )}
            {children}
          </div>
        </Container>
      </section>
      {imgSrc && (
        <section className="flex justify-center items-center bg-white">
          <Container>
            <Image
              className="w-full h-auto"
              src={decodeURI(imgSrc)}
              alt={`${pageName ?? "Banner"}`}
              width={1440}
              height={500}
            />
          </Container>
        </section>
      )}
    </>
  );
}
