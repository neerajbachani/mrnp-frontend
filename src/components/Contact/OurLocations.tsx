"use client";
import { locations } from "@/constants/Locations";
import Container from "../Container";
import { fonts } from "@/utils/fonts";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function OurLocations() {
  const [selectedLocation, setSelectedLocation] = useState<number>(0);

  return (
    <section className="bg-white flex justify-center items-center py-12 lg:py-24">
      <Container className="w-full">
        {/* Title with horizontal line */}
        <div className="flex items-center gap-40 mb-12 lg:mb-16">
          <h2
            className={`${fonts.forum} text-3xl lg:text-4xl xl:text-5xl text-primaryBlue whitespace-nowrap`}
          >
            Our Offices Across India
          </h2>
          <div className="flex-1 h-[7px] bg-primaryBlue"></div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Locations list */}
          <div className="space-y-8 lg:space-y-10">
            {locations.map((location, index) => (
              <div
                key={location.city}
                className="space-y-3"
                onClick={() => setSelectedLocation(index)}
              >
                {/* City name */}
                <h3
                  className={`${fonts.instrument} text-2xl lg:text-[1.75rem] font-medium text-primaryBlue`}
                >
                  {location.city}
                </h3>

                {/* Address */}
                <p
                  className={`${fonts.instrument} text-base lg:text-lg text-[#191919] leading-relaxed`}
                >
                  {location.address}
                </p>

                {/* Contact button */}
                <div className="flex gap-2 items-center">
                  <div
                    className="flex items-center gap-3 px-6 py-2 border-2 border-[#B4B4B4] rounded-full hover:border-primaryBlue transition-all duration-300 group"
                    onClick={() => setSelectedLocation(index)}
                  >
                    <span className={`${fonts.instrument} text-base lg:text-lg `}>
                      {location.phone && `${location.phone} // `}
                      {location.email}
                    </span>
                  </div>
                  <div className={`p-3 rounded-full border border-[#B4B4B4] transition-all duration-300 ${
                    selectedLocation === index 
                      ? 'bg-primaryBlue' 
                      : 'bg-white text-primaryBlue hover:bg-primaryBlue'
                  }`}>
                    <ChevronRight
                      size={20}
                      className={`group-hover:translate-x-1 cursor-pointer transition-transform duration-300 text-5xl hover:text-white ${
                    selectedLocation === index 
                      ? 'text-white' 
                      : 'text-primaryBlue'
                  }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Map */}
          <div className="sticky top-14 h-fit">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={locations[selectedLocation].googleMapsLink}
                className="w-full h-[400px] lg:h-[600px]"
                loading="lazy"
                title={`Map of ${locations[selectedLocation].city}`}
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}