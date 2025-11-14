"use client";
import { fonts } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { AllServiceResponse } from "@/types/Service";
import { motion } from "framer-motion";

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
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${fonts.instrument} mb-4 text-sm font-medium tracking-wider text-[#061143] lg:text-2xl`}
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className={`${fonts.forum} text-4xl leading-tight text-primaryBlue lg:text-5xl`}
            >
              Expert Advice, Built for Your Business
            </motion.h2>
          </div>
          <div className="flex-1 lg:pl-12">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className={`${fonts.instrument} text-base text-[#191919] lg:text-lg`}
            >
              Our foundation is carefully crafted. Recognizing the advantages of
              an ideal scale, we operate as a specialized wealth management
              firm, offering extensive solutions while prioritizing personalized
              client experiences
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
          {services.map((service, index) => {
            const isLeftColumn = index % 2 === 0;
            const isNotLastRow = index < services.length - 2;
            const iconPath = serviceIcons[index] || serviceIcons[0];

            return (
              <motion.div 
                key={service.slug} 
                className="relative flex"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Service Content - Using flex-1 to take full available space */}
                <div className="flex flex-1 flex-col p-8 lg:px-12 lg:py-16">
                  {/* Icon - Animates from top to bottom */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Image
                      src={iconPath}
                      alt={service.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 object-contain"
                    />
                  </motion.div>

                  {/* Service Name - Animates from bottom to top */}
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                    className={`${fonts.instrument} mb-4 text-2xl font-medium text-primaryBlue lg:text-[1.75rem]`}
                  >
                    {service.name}
                  </motion.h3>

                  {/* Description - Animates from bottom to top */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    className={`${fonts.instrument} mb-6 text-lg text-[#191919]`}
                  >
                    {service.description}
                  </motion.p>

                  {/* Learn More Button - Animates from bottom to top */}
                  <motion.div 
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className={`${fonts.instrument} inline-block rounded-full border-2 border-primaryBlue px-8 py-3 text-base font-medium text-primaryBlue transition-all hover:bg-primaryBlue hover:text-white`}
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>

                {/* Vertical Border - Expands from center vertically */}
                {isLeftColumn && (
                  <motion.div 
                    className="absolute bottom-8 right-0 top-8 hidden w-px bg-gray-300 lg:block origin-center"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  />
                )}

                {/* Horizontal Border - Expands from center horizontally */}
                {isNotLastRow && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-px bg-gray-300 origin-center"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}