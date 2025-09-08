"use client";
import Container from "../Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import PersonDetails from "./PersonDetails";
import Heading from "../Heading";
import { People } from "@/types/People";
import Bodytext from "../Bodytext";
import { fonts } from "@/utils/fonts";

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
    <section className="bg-white flex justify-center items-center py-4 md:py-16 lg:py-20">
      <Container className="flex flex-col justify-center items-center">
        <div className="md:max-w-4xl text-center space-y-4 md:space-y-8">
          <Heading>Our People</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full py-12 place-items-stretch">
          {peoples.map((person, index) => (
            <div
              key={index}
              onClick={() => handleOpen(person)}
              className="flex flex-col items-center md:items-start space-y-4 cursor-pointer w-full max-w-[280px] md:max-w-[400px] h-full"
            >
              <div className="w-full aspect-[3/4] relative shadow-lg">
                <Image
                  quality={100}
                  loading="lazy"
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="flex flex-col flex-grow justify-between space-y-1 sm:space-y-2 text-start w-full">
                <p
                  className={`${fonts.gilda} text-primaryBlue text-[2rem] leading-[2.3rem] `}
                >
                  {person.position}. {person.name}
                </p>
                <Bodytext style="font-medium text-center md:text-start">
                  ({person.degree}): {person.city}
                </Bodytext>
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
      </Container>
    </section>
  );
}
