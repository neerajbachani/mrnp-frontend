import { fonts } from "@/utils/fonts";
import Container from "../Container";
import Heading from "../Heading";
import { industries } from "@/constants/Industries";
import Image from "next/image";
import Bodytext from "../Bodytext";

export default function IndustryExpertise() {
  return (
    <section className="flex justify-center items-center py-12">
      <Container className="flex flex-col justify-center items-center space-y-9">
        <div className="space-y-3 md:space-y-5 text-center md:max-w-2xl">
          <Heading>Industry Expertise</Heading>
          <Bodytext>
            Our experienced team has a deep understanding of the complexities
            and regulations specific to various sectors. We are well-versed in
            serving clients in the following industries:
          </Bodytext>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 sm:gap-x-5 w-full place-items-center">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-offWhite w-[80%] border border-[#d9d9d9]"
            >
              <Image
                src={industry.image}
                alt={industry.name}
                width={200}
                height={200}
                className="object-cover w-full h-auto"
              />
              <p
                className={`${fonts.inter} text-base md:text-lg lg:text-lg 2xl:text-xl text-primaryBlue py-2 font-medium text-center `}
              >
                {industry.name}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-3 md:space-y-5 py-8 md:py-12 md:pt-16">
          <Heading>Personalized Approach :</Heading>
          <p
            className={`${fonts.inter} text-sm md:text-lg lg:text-xl md:max-w-[80%] lg:max-w-[70%]`}
          >
            We take pride in building strong relationships with our clients. By
            understanding your specific business objectives and challenges, we
            develop a comprehensive service plan that caters to your unique
            needs. Whether you are a startup, an established enterprise, or a
            non-profit organization, MRNP & CO LLP is here to support your
            growth and prosperity.
          </p>
        </div>
      </Container>
    </section>
  );
}
