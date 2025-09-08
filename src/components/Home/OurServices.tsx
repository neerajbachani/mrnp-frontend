"use client";

import { fonts } from "@/utils/fonts";
import Container from "../Container";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "../Heading";
import { AllServiceResponse } from "@/types/Service";
import Bodytext from "../Bodytext";

interface OurServicesProps {
  services: AllServiceResponse[];
}

export default function OurServices({ services }: OurServicesProps) {
  const [activeService, setActiveService] = useState<number>(0);
  const [activeServiceMobile, setActiveServiceMobile] = useState<number | null>(
    null
  );

  const variants = {
    closed: {
      height: 0,
      opacity: 0,
      scale: 0.98,
      y: -10,
    },
    open: {
      height: "auto",
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  return (
    <section className="bg-white flex justify-center items-center py-4  ">
      <Container className="flex flex-col items-center">
        <div className="lg:text-center flex flex-col items-start lg:items-center space-y-5 py-4 md:py-6 lg:max-w-[80%]">
          <p className={`${fonts.baskerville} text-primaryBlue text-2xl`}>
            Our Services
          </p>
          <Heading>
            Boutique Wealth Management:
            <br /> Tailored Financial Solutions
          </Heading>
          <div className="lg:max-w-[70%] 2xl:max-w-[80%]">
            <Bodytext>
              Our foundation is carefully crafted. Recognizing the advantages of
              an ideal scale, we operate as a specialized wealth management
              firm, offering extensive solutions while prioritizing personalized
              client experiences
            </Bodytext>
          </div>
        </div>
        {/* Services List for large screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 py-6">
          <div className="order-2 md:order-1">
            {services.map((service, index) => (
              <p
                onClick={() => setActiveService(index)}
                className={`${fonts.inter} 
                text-lg md:text-xl lg:text-2xl 
                text-primaryBlue 
                font-medium 
                cursor-pointer 
                px-4 md:px-8 
                border-l-[3px] 
                border-[#CDD4DB] 
                py-4 md:py-6 
                transition-colors 
                duration-300 
                ease-in-out
                ${activeService === index && "underline !border-primaryBlue"}`}
                key={index}
              >
                {service.name}
              </p>
            ))}
          </div>

          {/* Service Details */}
          <div className="order-1 md:order-2 px-4 md:px-0">
            <div className="mb-6">
              <Image
                src={services[activeService].image1.url}
                alt="service"
                width={700}
                height={700}
              />
            </div>
            <div className="space-y-6 w-full md:max-w-xl">
              <Heading>{services[activeService].name}</Heading>
              <div className="space-y-5 ">
                <Bodytext style="font-medium lg:text-xl !leading-[40px]">
                  {services[activeService].description}
                </Bodytext>
                <button className="w-full md:w-auto">
                  <Link
                    className={`${fonts.instrument} 
                    flex 
                    justify-between 
                    items-center
                    text-white 
                    font-semibold 
                    bg-primaryBlue 
                    px-6 md:px-8 
                    py-3 md:py-4 
                    hover:bg-primaryBlue/90 
                    transition-colors 
                    duration-300 
                    ease-in-out
                    w-full md:w-auto`}
                    href={services[activeService].slug}
                  >
                    Learn More
                    <span className="text-white ml-3">
                      <ArrowRight />
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services List for small screens */}
        <div className="md:hidden py-6 w-full">
          {services.map((service, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  if (activeServiceMobile === index) {
                    return setActiveServiceMobile(null);
                  }
                  setActiveServiceMobile(index);
                }}
                key={index}
                className={`flex justify-between items-center p-5 w-full  border-[#CDD4DB] cursor-pointer ${
                  activeServiceMobile === index
                    ? "bg-offWhite border-[1px]"
                    : "bg-white border-b-[1px]"
                }`}
              >
                <p className={`${fonts.inter} text-primaryBlue`}>
                  {service.name}
                </p>
                <span
                  className={`text-[#191919] rotate-0 transition-transform duration-200 ease-in-out ${
                    activeServiceMobile === index && "rotate-45"
                  }`}
                >
                  <Plus size={20} />
                </span>
              </div>
              <AnimatePresence mode="wait">
                {activeServiceMobile === index && (
                  <motion.div
                    className="bg-offWhite px-5 pb-5 border border-[#CDD4DB] border-t-0 overflow-hidden"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={variants}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1], // Custom easing curve for smooth motion
                      opacity: { duration: 0.25 },
                      scale: { duration: 0.35 },
                      height: { duration: 0.4 },
                    }}
                  >
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <div className="overflow-hidden">
                        <motion.div
                          initial={{ scale: 1.05 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Image
                            src={service.image1.url}
                            alt={service.name}
                            className="w-full h-auto"
                            height={700}
                            width={700}
                          />
                        </motion.div>
                      </div>

                      <motion.p
                        className={`${fonts.inter} text-[#191919] text-sm`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>

                      <motion.button
                        className="w-fit"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        <Link
                          className={`${fonts.inter} text-sm flex justify-between  items-center text-white  font-semibold  bg-primaryBlue  px-6 py-3 hover:bg-primaryBlue/90  transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]`}
                          href={service.slug}
                        >
                          Learn More
                          <motion.span
                            className="text-white ml-2"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight size={16} />
                          </motion.span>
                        </Link>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
