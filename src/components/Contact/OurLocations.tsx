"use client";
import { locations } from "@/constants/Locations";
import Container from "../Container";
import Heading from "../Heading";
import { fonts } from "@/utils/fonts";
import { useState } from "react";

export default function OurLocations() {
  const [selectedLocation, setSelectedLocation] = useState<number>(0);
  return (
    <section className="bg-white flex justify-center items-center py-10 md:py-16 ">
      <Container className="flex flex-col space-y-16 md:space-y-20 w-full justify-between items-start">
        {/* Section 1 */}
        <div className="flex flex-col space-y-7 md:space-y-0 md:flex-row w-full justify-between items-start">
          <div>
            <Heading>Our Locations</Heading>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-6">
            {locations.map((location, index) => (
              <div
                key={location.city}
                onClick={() => setSelectedLocation(index)}
                className={`relative pb-4 cursor-pointer group transition-all duration-300 ${
                  selectedLocation === index
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primaryBlue"
                    : "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primaryBlue hover:after:w-full after:transition-all after:duration-300"
                }`}
              >
                <p
                  className={`${fonts.inter} text-lg md:text-2xl font-medium ${
                    selectedLocation === index
                      ? "text-primaryBlue"
                      : "text-gray-600 group-hover:text-primaryBlue"
                  } transition-colors duration-300`}
                >
                  {location.city}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          <div className="space-y-5">
            <Heading>{locations[selectedLocation].city}</Heading>

            <p className={`${fonts.inter} text-lg md:text-2xl max-w-md`}>
              {locations[selectedLocation].address}
            </p>
            <div className="space-y-1">
              <p className={`${fonts.inter} text-lg md:text-2xl max-w-md`}>
                {locations[selectedLocation].phone}
              </p>
              <p className={`${fonts.inter} text-lg md:text-2xl max-w-md`}>
                {locations[selectedLocation].email}
              </p>
            </div>
          </div>
          <div>
            <iframe
              src={locations[selectedLocation].googleMapsLink}
              className="w-full h-[400px] md:h-[500px] rounded-lg"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}
