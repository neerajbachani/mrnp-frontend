"use client";
import { fonts } from "@/utils/fonts";
import Container from "../Container";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "../Heading";
import { FAQ } from "@/types/Service";

interface FAQsProps {
  faqs: FAQ[];
}

export default function FAQs({ faqs }: FAQsProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="bg-white flex justify-center items-start py-10 md:py-14 lg:py-20">
      <Container className="flex flex-col items-center">
        <div className="text-center">
          <Heading>Frequently Asked Questions</Heading>
        </div>
        <div className="py-8 md:py-12 lg:py-16 w-full">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  if (activeFaq === index) {
                    return setActiveFaq(null);
                  }
                  setActiveFaq(index);
                }}
                key={index}
                className={`flex justify-between items-center px-5 py-5 lg:py-8 lg:px-5 w-full  border-[#CDD4DB] cursor-pointer ${
                  activeFaq === index
                    ? "bg-offWhite border-[1px]"
                    : "bg-white border-b-[1px]"
                }`}
              >
                <p
                  className={`${fonts.inter} text-sm md:text-lg lg:text-xl text-primaryBlue`}
                >
                  {faq.question}
                </p>
                <span
                  className={`text-[#191919] rotate-0 transition-transform duration-200 ease-in-out ${
                    activeFaq === index && "rotate-45"
                  }`}
                >
                  <Plus size={20} />
                </span>
              </div>
              <AnimatePresence>
                {activeFaq === index && (
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
                      className={`${fonts.inter}  px-5 py-5 text-[#191919] text-sm md:text-base lg:text-lg`}
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
