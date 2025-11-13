import { fonts } from "@/utils/fonts";
import Container from "../Container";
import Heading from "../Heading";
import { industries } from "@/constants/Industries";
import Image from "next/image";
import Bodytext from "../Bodytext";

export default function IndustryExpertise() {
  return (
    <section className="flex justify-center items-center pb-14 lg:pb-24">
      <Container className="flex flex-col justify-center items-center space-y-9 lg:space-y-12">
        <div className="space-y-3 md:space-y-5 text-center md:max-w-4xl">
          <Heading style=" lg:text-5xl">Industry Expertise</Heading>
          <Bodytext style={`${fonts.dm}`}>
            Our experienced team has a deep understanding of the complexities
            and regulations specific to various sectors. We are well-versed in
            serving clients in the following industries:
          </Bodytext>
        </div>

        {/* Flex container for industry cards */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-5 w-full">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-[#F2F5F1] border border-[#d9d9d9] flex-shrink-0 w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.875rem)] lg:w-[calc(20%-1rem)]"
            >
              <Image
                src={industry.image}
                alt={industry.name}
                width={300}
                height={300}
                className="object-cover w-full h-auto aspect-[4/3]"
              />
              <p
                className={`${fonts.instrument} text-base md:text-lg lg:text-lg 2xl:text-xl text-primaryBlue py-4 font-medium text-center`}
              >
                {industry.name}
              </p>
            </div>
          ))}
        </div>

        
      </Container>
    </section>
  );
}
