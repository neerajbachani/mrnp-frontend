"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { fonts } from "@/utils/fonts";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

interface LocationData {
  name: string;
  lat: number;
  lng: number;
}

const locationCoordinates: LocationData[] = [
  { name: "India", lat: 20.5937, lng: 78.9629 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Florida", lat: 27.6648, lng: -81.5158 },
  { name: "Cayman", lat: 19.3133, lng: -81.2546 },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Cyprus", lat: 35.1264, lng: 33.4299 },
];

export default function OurLocationGlobe() {
  const [selectedLocation, setSelectedLocation] = useState<LocationData>(
    locationCoordinates[0]
  );
  const globeConfig = {
    pointSize: 2,
    globeColor: "#001233",
    showAtmosphere: false,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0,
    emissive: "#001233",
    emissiveIntensity: 0,
    shininess: 0,
    polygonColor: "rgba(255,255,255,1)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 700,
    arcLength: 0.5,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: selectedLocation.lat, lng: selectedLocation.lng },
    autoRotate: true,
    autoRotateSpeed: 0.9,
  };

  const handleLocationClick = (location: LocationData) => {
    setSelectedLocation(location);
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const sampleArcs = [
    {
      order: 1,
      startLat: 20.5937,
      startLng: 78.9629,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 20.5937,
      startLng: 78.9629,
      endLat: 27.6648,
      endLng: -81.5158,
      arcAlt: 0.5,
      color: colors[1],
    },
    {
      order: 3,
      startLat: 20.5937,
      startLng: 78.9629,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[2],
    },
    {
      order: 4,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 25.2048,
      endLng: 55.2708,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 5,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 35.1264,
      endLng: 33.4299,
      arcAlt: 0.4,
      color: colors[1],
    },
    {
      order: 6,
      startLat: 27.6648,
      startLng: -81.5158,
      endLat: 19.3133,
      endLng: -81.2546,
      arcAlt: 0.1,
      color: colors[2],
    },
  ];

  return (
    <section className="relative bg-[#001233] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Location list */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 z-10"
          >
            <div>
              <h2 className={` ${fonts.forum} text-4xl md:text-5xl font-bold text-white mb-4`}>
                Our Locations
              </h2>
              <p className={`${fonts.instrument} text-white text-lg`}>
                Strategic locations for optimal global reach.
              </p>
            </div>

            <div className="space-y-4">
              {locationCoordinates.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleLocationClick(location)}
                  className={`${fonts.instrument} text-2xl md:text-3xl font-light pb-4 border-b transition-all duration-300 cursor-pointer ${
                    selectedLocation.name === location.name
                      ? "text-blue-400 border-blue-400"
                      : "text-white border-white hover:text-blue-500 hover:border-blue-400"
                  }`}
                >
                  {location.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center h-[400px]  md:h-[500px]  lg:h-[800px]"
          >
            <div className="absolute w-full h-full">
              <World 
        data={sampleArcs} 
        globeConfig={globeConfig}
        labels={locationCoordinates}
      />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
