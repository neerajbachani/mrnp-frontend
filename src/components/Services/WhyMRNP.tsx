import { fonts } from "@/utils/fonts";
import Heading from "../Heading";
import { ChooseMRNP } from "@/types/Service";

interface WhyMRNPProps {
  serviceTitle: string;
  chooseMRNP: ChooseMRNP[];
}

export default function WhyMRNP({ serviceTitle, chooseMRNP }: WhyMRNPProps) {
  return (
    <section className="bg-offWhite py-10 md:py-14 lg:py-20 flex items-center justify-center">
      <div className=" container flex flex-col items-center justify-center space-y-10">
        <div className="text-center lg:max-w-[80%] flex flex-col items-center justify-center space-y-3">
          <Heading>Why Choose MRNP & CO LLP for {serviceTitle}?</Heading>
          <p
            className={`${fonts.inter} text-sm md:text-xl lg:text-2xl font-medium text-[#191919] md:max-w-[80%] lg:max-w-[60%]`}
          >
            We understand the unique needs of businesses and offer a
            personalized approach :
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {chooseMRNP.map((item, index) => (
            <div
              key={index}
              className="space-y-2 lg:space-y-5 py-3 px-3 md:px-4 md:py-5 lg:py-6 lg:px-3 border border-[#d9d9d9]"
            >
              <p
                className={`${fonts.baskerville} text-primaryBlue text-2xl lg:text-3xl xl:text-4xl`}
              >
                {item.title}
              </p>
              <p
                className={`${fonts.inter} text-[#191919] text-base  lg:text-lg lg:max-w-[90%]`}
              >
                {item.subText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
