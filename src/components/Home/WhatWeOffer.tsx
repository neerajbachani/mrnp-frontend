import { fonts } from "@/utils/fonts";
import Container from "../Container";
import Heading from "../Heading";
import Bodytext from "../Bodytext";

interface WhatWeOffer {
  title: string;
  description: string;
}

const whatWeOffer: WhatWeOffer[] = [
  {
    title: "Client-Centric Approach",
    description:
      "Dedication to putting need of clients first & providing personalized solutions.",
  },
  {
    title: "Dedicated Support",
    description:
      "Availability of dedicated support & assistance from expert professionals.",
  },
  {
    title: "Innovative Solutions",
    description:
      "Ability to customize service to meet the specific needs and goals of each client.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear and transparent communication throughout the client engagement.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-offWhite flex justify-center items-center py-10 lg:py-20 border border-[#d9d9d9]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10 space-y-6 lg:space-y-0">
          {/* Left Column */}
          <div className="flex flex-col justify-center items-start space-y-4 lg:space-y-6 md:max-w-lg">
            <Heading>Partner in Financial Success and Growth.</Heading>
            <Bodytext>
              We understand that choosing the right accounting partner is
              crucial. We offer unparalleled expertise in Finanacial Goals and
              Business
            </Bodytext>
          </div>
          {/*  */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 w-full">
              {whatWeOffer.map((item, index) => (
                <div
                  key={index}
                  className="space-y-2 lg:space-y-5 py-3 px-3 lg:py-8 lg:px-4 border border-[#d9d9d9]"
                >
                  <p
                    className={`${fonts.baskerville} text-primaryBlue text-[20px] md:text-2xl`}
                  >
                    {item.title}
                  </p>
                  <Bodytext>{item.description}</Bodytext>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
