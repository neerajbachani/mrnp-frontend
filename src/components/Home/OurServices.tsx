"use client";
import { fonts } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { AllServiceResponse } from "@/types/Service";

interface OurServicesProps {
  services: AllServiceResponse[];
}

// Service icons mapping
const serviceIcons = [
  "/services/Vector1.svg",
  "/services/Vector2.svg",
  "/services/Vector3.svg",
  "/services/Vector4.svg",
  "/services/Vector5.svg",
  "/services/Vector6.svg",
];

export default function OurServices({ services }: OurServicesProps) {
  return (
    <section className="w-full bg-[#F2F5F1] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex-1">
            <p
              className={`${fonts.instrument} mb-4 text-sm font-medium tracking-wider text-[#061143] lg:text-2xl`}
            >
              Our Services
            </p>
            <h2
              className={`${fonts.forum} text-4xl leading-tight text-primaryBlue lg:text-5xl`}
            >
              Expert Advice, Built for Your Business
            </h2>
          </div>
          <div className="flex-1 lg:pl-12">
            <p
              className={`${fonts.instrument} text-base text-[#191919] lg:text-lg`}
            >
              Our foundation is carefully crafted. Recognizing the advantages of
              an ideal scale, we operate as a specialized wealth management
              firm, offering extensive solutions while prioritizing personalized
              client experiences
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
          {services.map((service, index) => {
            const isLeftColumn = index % 2 === 0;
            const isNotLastRow = index < services.length - 2;
            const iconPath = serviceIcons[index] || serviceIcons[0];

            return (
              <div key={service.slug} className="relative flex">
                {/* Service Content - Using flex-1 to take full available space */}
                <div className="flex flex-1 flex-col p-8 lg:px-12 lg:py-16">
                  {/* Icon */}
                  <div className="mb-6">
                    <Image
                      src={iconPath}
                      alt={service.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 object-contain"
                    />
                  </div>

                  {/* Service Name */}
                  <h3
                    className={`${fonts.instrument} mb-4 text-2xl font-medium text-primaryBlue lg:text-[1.75rem]`}
                  >
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`${fonts.instrument} mb-6 text-lg text-[#191919]`}
                  >
                    {service.description}
                  </p>

                  {/* Learn More Button - Pushed to bottom with mt-auto */}
                  <div className="mt-auto">
                    <Link
                      href={`/services/${service.slug}`}
                      className={`${fonts.instrument} inline-block rounded-full border-2 border-primaryBlue px-8 py-3 text-base font-medium text-primaryBlue transition-all hover:bg-primaryBlue hover:text-white`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Vertical Border - Only for left column cards on desktop */}
                {isLeftColumn && (
                  <div className="absolute bottom-8 right-0 top-8 hidden w-px bg-gray-300 lg:block" />
                )}

                {/* Horizontal Border - Full width after each row except last */}
                {isNotLastRow && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}