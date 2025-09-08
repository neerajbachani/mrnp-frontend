"use client";

import { fonts } from "@/utils/fonts";
import Container from "../Container";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Heading from "../Heading";
import { FAQ } from "@/types/Service";
import Bodytext from "../Bodytext";

interface FAQProps {
  faqs: FAQ[];
}

export default function FAQCompinent({ faqs }: FAQProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeFaqMobile, setActiveFaqMobile] = useState<number | null>(0);

  return (
    <section className="bg-white flex justify-center items-center py-12  lg:py-24">
      <Container className="flex flex-col items-center">
        <div className="flex flex-col items-start lg:items-center space-y-6 text-start lg:text-center lg:max-w-lg py-8">
          <p className={`${fonts.gilda} text-primaryBlue text-2xl uppercase`}>
            Frequently Asked Question
          </p>
          <Heading>Commonly Asked Queries About Services.</Heading>
          <Bodytext>
            From inquiries about our services and pricing to general financial
            inquiries, we&apos;ve compiled a comprehensive list of FAQs.
          </Bodytext>
        </div>
        {/* FAQ for large screen */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8  w-full py-6">
          {/* Left Column */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => setActiveFaq(index)}
                className={` flex px-4 py-7  justify-between items-center  cursor-pointer hover:bg-offWhite/50 transition-all duration-300 ease-in-out border-b-[1px] border-[#CDD4DB] ${
                  activeFaq === index && "bg-offWhite border"
                }`}
              >
                <p className={`${fonts.inter} text-base 2xl:text-lg text-[#191919]`}>
                  {faq.question}
                </p>
                <span
                  className={`transition-transform duration-300 ease-in-out ${
                    activeFaq === index ? "rotate-45 " : "rotate-0"
                  }`}
                >
                  <Plus size={16} />
                </span>
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="">
            <div className="bg-white border-[1px] border-[#CDD4DB] py-6 px-8 space-y-4">
              <p className={`${fonts.inter} text-xl font-bold text-[#191919]`}>
                Answer to the Question
              </p>
              <Bodytext>{faqs[activeFaq!].answer}</Bodytext>
            </div>
            <div className="bg-offWhite space-y-8 lg:space-y-0 flex lg:flex-row flex-col border-[1px] border-[#CDD4DB] py-6 px-8 justify-between items-center">
              <div className="space-y-4">
                <p
                  className={`${fonts.inter} text-xl font-bold text-[#191919]`}
                >
                  Did not Find Your Questions?
                </p>
                <p className={`${fonts.inter} text-lg text-[#191919]`}>
                  Don&apos;t worry! Just send your questions to us.
                </p>
              </div>
              <div>
                <button className="bg-primaryBlue ">
                  <Link
                    href="/contact"
                    className="flex items-center  text-white px-8 py-4  justify-center gap-4"
                  >
                    Contact Us
                    <span>
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ for mobile screen */}
        <div className="md:hidden py-6 w-full">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  if (activeFaqMobile === index) {
                    return setActiveFaqMobile(null);
                  }
                  setActiveFaqMobile(index);
                }}
                key={index}
                className={`flex justify-between items-center p-5 w-full  border-[#CDD4DB] cursor-pointer ${
                  activeFaqMobile === index
                    ? "bg-offWhite border-[1px]"
                    : "bg-white border-b-[1px]"
                }`}
              >
                <p className={`${fonts.inter} text-primaryBlue`}>
                  {faq.question}
                </p>
                <span
                  className={`text-[#191919] rotate-0 transition-transform duration-200 ease-in-out ${
                    activeFaqMobile === index && "rotate-45"
                  }`}
                >
                  <Plus size={20} />
                </span>
              </div>
              <AnimatePresence>
                {activeFaqMobile === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    className="bg-offWhite border border-[#CDD4DB] border-t-0 overflow-hidden"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                          delay: 0.1,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: {
                          duration: 0.2,
                          ease: "easeIn",
                        },
                      }}
                      className={`${fonts.inter}  px-5 py-5 text-[#191919] text-sm`}
                    >
                      {faq.answer}
                    </motion.p>
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
