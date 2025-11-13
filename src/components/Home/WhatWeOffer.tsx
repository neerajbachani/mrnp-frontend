import { fonts } from "@/utils/fonts";
import Image from "next/image";

interface WhatWeOffer {
  title: string;
  description: string;
  icon: string;
}

const whatWeOffer: WhatWeOffer[] = [
  {
    title: "Client-Centric Approach",
    description:
      "Dedication to putting need of clients first & providing personalized solutions.",
    icon: "/why-us1.svg",
  },
  {
    title: "Dedicated Support",
    description:
      "Availability of dedicated support & assistance from expert professionals.",
    icon: "/why-us2.svg",
  },
  {
    title: "Innovative Solutions",
    description:
      "Ability to customize service to meet the specific needs and goals of each client.",
    icon: "/why-us3.svg",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear and transparent communication throughout the client engagement.",
    icon: "/why-us4.svg",
  },
];

export default function WhatWeOffer() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-24"
      style={{ backgroundImage: "url('/why-us.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[86rem] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20 max-w-4xl">
          <p
            className={`${fonts.instrument} text-white text-sm md:text-base lg:text-2xl font-medium tracking-wider mb-4 md:mb-6`}
          >
            Why Us
          </p>
          <h2
            className={`${fonts.forum} text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-6`}
          >
            Partner in Financial Success and Growth.
          </h2>
          <p className={` ${fonts.instrument} max-w-2xl text-white text-sm md:text-base font-normal  leading-relaxed`}>
            We understand that choosing the right accounting partner is crucial.
            We offer unparalleled expertise in Finanacial Goals and Business
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {whatWeOffer.map((item, index) => (
            <div
              key={index}
              className="bg-white py-14 px-6 md:px-8 space-y-4 md:space-y-4 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12  md:w-16 md:h-16">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={58}
                  height={58}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3
                className={`${fonts.forum} text-primaryBlue text-xl md:text-2xl`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className={`text-[#191919] text-sm md:text-base leading-relaxed ${fonts.instrument} `}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
