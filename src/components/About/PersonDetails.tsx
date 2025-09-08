import { People } from "@/types/People";
import { fonts } from "@/utils/fonts";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Heading from "../Heading";
import Bodytext from "../Bodytext";

interface PersonDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  person: People;
}

export default function PersonDetails({
  isOpen,
  onClose,
  person,
}: PersonDetailsProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 z-40 cursor-pointer"
          onClick={onClose}
        />
      )}

      {/* Modal */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-offWhite z-50 shadow-xl overflow-y-auto"
      >
        <div className="p-2 h-full relative">
          {/* Header */}
          <div className="flex justify-end items-center">
            <button
              onClick={onClose}
              className="p-3 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="size-8" />
            </button>
          </div>
          {/* Person Details */}
          <div className="px-1 sm:px-3 md:px-6 mt-1 space-y-4 md:space-y-8 pb-8">
            <div className=" lg:w-[65%] aspect-[3/4] relative shadow-lg">
              <Image
                quality={100}
                unoptimized
                src={person.image}
                alt={person.name}
                fill // Ensures it fills the parent div
                className="object-cover"
              />
            </div>
            <div>
              <Heading>
                {person.position}. {person.name}
              </Heading>
              <Bodytext>
                ({person.degree}): {person.city}
              </Bodytext>
            </div>
            <div>
              <Bodytext>{person.description}</Bodytext>
            </div>
            <div className="space-y-2 md:space-y-3">
              <p className={`${fonts.inter} text-xl font-semibold uppercase`}>
                Contact info
              </p>
              <div>
                <p className={`${fonts.inter} text-base md:text-lg`}>
                  {person.phone}
                </p>
                {person.email && person.email.length > 0 && (
                  <p className={`${fonts.inter} text-base md:text-lg`}>
                    {person.email}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
