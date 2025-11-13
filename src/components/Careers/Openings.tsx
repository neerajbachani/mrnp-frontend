"use client";

import { fonts } from "@/utils/fonts";
import Container from "../Container";
import Heading from "../Heading";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ApplyModal from "./ApplyModal";
import { Opening } from "@/types/Opening";
import Bodytext from "../Bodytext";

interface OpeningsProps {
  openings: Opening[] | null;
}

export default function Openings({ openings }: OpeningsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOpening, setSelectedOpening] = useState<Opening | null>(null);

  const handleApply = (opening: Opening) => {
    setSelectedOpening(opening);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // Prevent layout shift
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = ""; // Reset
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    };
  }, [isModalOpen]);

  return (
    <section className="bg-white flex justify-center items-center py-9 lg:py-16">
      <Container>
        <div className="text-center flex flex-col items-center space-y-6">
          <Heading style=" uppercase xl:text-5xl 2xl:text-6xl">Current Openings</Heading>
          <div className="md:max-w-2xl  ">
            <Bodytext>
              Join MRNP and experience a workplace where your contributions
              matter and where integrity and innovation are at the heart of
              everything we do.
            </Bodytext>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block mt-12">
          <table className="w-full">
            <thead className="bg-[#F2F5F1] border border-[#d9d9d9]">
              <tr>
                <th
                  className={`${fonts.instrument} p-4 text-primaryBlue lg:text-2xl font-medium uppercase`}
                >
                  Department
                </th>
                <th
                  className={`${fonts.instrument} p-4 text-primaryBlue lg:text-2xl font-medium uppercase`}
                >
                  Position
                </th>
                <th
                  className={`${fonts.instrument} p-4 text-primaryBlue lg:text-2xl font-medium uppercase`}
                >
                  City
                </th>
                <th
                  className={`${fonts.instrument} p-4 text-primaryBlue lg:text-2xl font-medium uppercase`}
                >
                  State
                </th>
                <th
                  className={`${fonts.instrument} p-4 text-primaryBlue lg:text-2xl font-medium uppercase`}
                >
                  Apply
                </th>
              </tr>
            </thead>
            {!openings || openings.length === 0 ? (
              <tbody>
                <tr>
                  <td
                    colSpan={5}
                    className="text-center text-[#191919] text-lg font-medium py-12"
                  >
                    No openings available at the moment.
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {openings.map((opening, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#d9d9d9] text-center"
                  >
                    <td
                      className={`${fonts.inter} text-[#191919] text-lg py-8`}
                    >
                      {opening.department}
                    </td>
                    <td
                      className={`${fonts.inter} text-[#191919] text-lg py-8`}
                    >
                      {opening.position}
                    </td>
                    <td
                      className={`${fonts.inter} text-[#191919] text-lg py-8`}
                    >
                      {opening.city}
                    </td>
                    <td
                      className={`${fonts.inter} text-[#191919] text-lg py-8`}
                    >
                      {opening.state}
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handleApply(opening)}
                        className={`${fonts.instrument} text-base mx-auto flex justify-between items-center text-white  bg-primaryBlue px-6 md:px-8 py-3 md:py-4 hover:bg-primaryBlue/90 transition-colors duration-300 ease-in-out w-full md:w-auto rounded-full `}
                      >
                        Apply Now
                        <span className="text-white ml-3 md:ml-4">
                          <ArrowRight size={16} />
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden mt-8 space-y-6">
          {!openings || openings.length === 0 ? (
            <div className="border border-[#d9d9d9] rounded-lg p-6 text-center">
              <p
                className={`${fonts.inter} text-[#191919] text-lg font-medium`}
              >
                No openings available at the moment.
              </p>
            </div>
          ) : (
            openings.map((opening, index) => (
              <div
                key={index}
                className="border border-[#d9d9d9] rounded-lg p-4 space-y-3"
              >
                <div className="flex flex-col">
                  <span
                    className={`${fonts.inter} text-primaryBlue font-medium text-sm`}
                  >
                    Department
                  </span>
                  <span className={`${fonts.inter} text-[#191919] text-base`}>
                    {opening.department}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${fonts.inter} text-primaryBlue font-medium text-sm`}
                  >
                    Position
                  </span>
                  <span className={`${fonts.inter} text-[#191919] text-base`}>
                    {opening.position}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${fonts.inter} text-primaryBlue font-medium text-sm`}
                  >
                    City
                  </span>
                  <span className={`${fonts.inter} text-[#191919] text-base`}>
                    {opening.city}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${fonts.inter} text-primaryBlue font-medium text-sm`}
                  >
                    State
                  </span>
                  <span className={`${fonts.inter} text-[#191919] text-base`}>
                    {opening.state}
                  </span>
                </div>
                <button
                  onClick={() => handleApply(opening)}
                  className={`${fonts.instrument} w-full mt-4 flex justify-center items-center text-white font-semibold bg-primaryBlue px-6 py-3 hover:bg-primaryBlue/90 transition-colors duration-300 ease-in-out`}
                >
                  Apply
                  <span className="text-white ml-3">
                    <ArrowRight />
                  </span>
                </button>
              </div>
            ))
          )}
        </div>

        {selectedOpening && (
          <ApplyModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            opening={selectedOpening}
          />
        )}
      </Container>
    </section>
  );
}
