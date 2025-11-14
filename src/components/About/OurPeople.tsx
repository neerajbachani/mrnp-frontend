"use client";
import { fonts } from "@/utils/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";
import PersonDetails from "./PersonDetails";
import { People } from "@/types/People";

interface OurPeopleProps {
  peoples: People[];
}

export default function OurPeople({ peoples }: OurPeopleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<People | null>(null);

  const handleOpen = (person: People) => {
    setIsModalOpen(true);
    setSelectedPerson(person);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    };
  }, [isModalOpen]);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`${fonts.gilda} text-3xl md:text-4xl lg:text-5xl text-primaryBlue`}
          >
            Our People
          </h2>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {peoples.map((person, index) => (
            <div
              key={index}
              onClick={() => handleOpen(person)}
              className="flex flex-col cursor-pointer group"
            >
              {/* Image */}
              <div className="w-full aspect-[1] relative overflow-hidden mb-4 md:mb-6 bg-gray-200">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500 ease-in-out w-[400px] h-[300px]"
                  
                />
              </div>

              {/* Name and Details */}
              <div className="space-y-1">
                <h3
                  className={`${fonts.gilda} text-xl md:text-2xl text-primaryBlue`}
                >
                  {person.position}. {person.name}
                </h3>
                <p className="text-[#6B7280] text-sm md:text-base">
                  ({person.degree}) : {person.city}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedPerson && (
          <PersonDetails
            isOpen={isModalOpen}
            onClose={handleClose}
            person={selectedPerson}
          />
        )}
      </div>
    </section>
  );
}
