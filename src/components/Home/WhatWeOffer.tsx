// "use client";

// import { fonts } from "@/utils/fonts";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// interface WhatWeOffer {
//   title: string;
//   description: string;
//   icon: string;
// }

// const whatWeOffer: WhatWeOffer[] = [
//   {
//     title: "Client-Centric Approach",
//     description:
//       "Dedication to putting need of clients first & providing personalized solutions.",
//     icon: "/why-us1.svg",
//   },
//   {
//     title: "Dedicated Support",
//     description:
//       "Availability of dedicated support & assistance from expert professionals.",
//     icon: "/why-us2.svg",
//   },
//   {
//     title: "Innovative Solutions",
//     description:
//       "Ability to customize service to meet the specific needs and goals of each client.",
//     icon: "/why-us3.svg",
//   },
//   {
//     title: "Transparent Communication",
//     description:
//       "Clear and transparent communication throughout the client engagement.",
//     icon: "/why-us4.svg",
//   },
// ];

// export default function WhatWeOffer() {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   // Pin the section and track scroll progress
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   // Create transforms outside of the render loop
//   const headerOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
//   const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

//   // Pre-create all card transforms before the map
//   const cardTransforms = whatWeOffer.map((_, index) => {
//     const delay = index * 0.1;
//     const entryStart = delay;
//     const entryPeak = 0.15 + delay;
//     const entrySettle = 0.3 + delay;
//     const exitStart = 0.5 + delay;
//     const exitEnd = 0.8 + delay;
    
//     const overshoot = index === 3 ? 0 : -20 - (index * 10);
    
//     const yValues = index === 3 
//       ? [200, 200, 0, 0, -400, -400]
//       : [200, 200, overshoot, 0, 0, -400, -400];
    
//     const scrollPoints = index === 3
//       ? [0, entryStart, entrySettle, exitStart, exitEnd, 1]
//       : [0, entryStart, entryPeak, entrySettle, exitStart, exitEnd, 1];
    
//     const opacityPoints = index === 3
//       ? [0, 0, 1, 1, 0, 0]
//       : [0, 0, 1, 1, 1, 0, 0];

//     return {
//       y: useTransform(scrollYProgress, scrollPoints, yValues),
//       opacity: useTransform(scrollYProgress, scrollPoints, opacityPoints)
//     };
//   });

//   return (
//     <div ref={containerRef} className="relative h-[200vh]">
//       {/* Sticky/Pinned Section */}
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <section
//           className="relative w-full h-full flex items-center bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: "url('/why-us.png')" }}
//         >
//           {/* Dark overlay */}
//           <div className="absolute inset-0"></div>

//           {/* Content */}
//           <div className="relative z-10 w-full container mx-auto px-6 md:px-12 lg:px-16">
//             {/* Header */}
//             <motion.div 
//               className="mb-12 md:mb-16 lg:mb-20 max-w-4xl"
//               style={{
//                 opacity: headerOpacity,
//                 y: headerY
//               }}
//             >
//               <p
//                 className={`${fonts.instrument} text-white text-sm md:text-base lg:text-2xl font-medium tracking-wider mb-4 md:mb-6`}
//               >
//                 Why Us
//               </p>
//               <h2
//                 className={`${fonts.forum} text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-6`}
//               >
//                 Partner in Financial Success and Growth.
//               </h2>
//               <p className={`${fonts.instrument} max-w-2xl text-white text-sm md:text-base font-normal leading-relaxed`}>
//                 We understand that choosing the right accounting partner is crucial.
//                 We offer unparalleled expertise in Finanacial Goals and Business
//               </p>
//             </motion.div>

//             {/* Cards Grid with Momentum Wave Animation */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
//               {whatWeOffer.map((item, index) => {
//                 return (
//                   <motion.div
//                     key={index}
//                     className="bg-white py-14 px-6 md:px-8 space-y-4 md:space-y-4 hover:shadow-xl transition-shadow duration-300"
//                     style={cardTransforms[index]}
//                   >
//                     {/* Icon */}
//                     <div className="w-12 h-12 md:w-16 md:h-16">
//                       <Image
//                         src={item.icon}
//                         alt={item.title}
//                         width={58}
//                         height={58}
//                         className="w-full h-full object-contain"
//                       />
//                     </div>

//                     {/* Title */}
//                     <h3
//                       className={`${fonts.forum} text-primaryBlue text-xl md:text-2xl`}
//                     >
//                       {item.title}
//                     </h3>

//                     {/* Description */}
//                     <p className={`text-[#191919] text-sm md:text-base leading-relaxed ${fonts.instrument}`}>
//                       {item.description}
//                     </p>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";

import { fonts } from "@/utils/fonts";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

interface WhatWeOffer {
  title: string;
  description: string;
  icon: string;
}

const whatWeOffer: WhatWeOffer[] = [
  {
    title: "Client-Centric Approach",
    description:
      "Dedication to putting need of clients first & providing personalized solutions.",
    icon: "/why-us1.svg",
  },
  {
    title: "Dedicated Support",
    description:
      "Availability of dedicated support & assistance from expert professionals.",
    icon: "/why-us2.svg",
  },
  {
    title: "Innovative Solutions",
    description:
      "Ability to customize service to meet the specific needs and goals of each client.",
    icon: "/why-us3.svg",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear and transparent communication throughout the client engagement.",
    icon: "/why-us4.svg",
  },
];

export default function WhatWeOffer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Pin the section and track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Create transforms outside of the render loop
  const headerOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Create all transforms at the top level using useMemo
  const card0Y = useTransform(scrollYProgress, [0, 0, 0.05, 0.2, 0.5, 0.8, 1], [200, 200, -20, 0, 0, -400, -400]);
  const card0Opacity = useTransform(scrollYProgress, [0, 0, 0.05, 0.2, 0.5, 0.8, 1], [0, 0, 1, 1, 1, 0, 0]);

  const card1Y = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.3, 0.6, 0.9, 1], [200, 200, -30, 0, 0, -400, -400]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.3, 0.6, 0.9, 1], [0, 0, 1, 1, 1, 0, 0]);

  const card2Y = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.4, 0.7, 1, 1], [200, 200, -40, 0, 0, -400, -400]);
  const card2Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.4, 0.7, 1, 1], [0, 0, 1, 1, 1, 0, 0]);

  const card3Y = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1, 1], [200, 200, 0, 0, -400, -400]);
  const card3Opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1, 1], [0, 0, 1, 1, 0, 0]);

  // Store transforms in an array for easy access
  const cardTransforms = useMemo(() => [
    { y: card0Y, opacity: card0Opacity },
    { y: card1Y, opacity: card1Opacity },
    { y: card2Y, opacity: card2Opacity },
    { y: card3Y, opacity: card3Opacity },
  ], [card0Y, card0Opacity, card1Y, card1Opacity, card2Y, card2Opacity, card3Y, card3Opacity]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky/Pinned Section */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <section
          className="relative w-full h-full flex items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/why-us.png')" }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0"></div>

          {/* Content */}
          <div className="relative z-10 w-full container mx-auto px-6 md:px-12 lg:px-16">
            {/* Header */}
            <motion.div 
              className="mb-12 md:mb-16 lg:mb-20 max-w-4xl"
              style={{
                opacity: headerOpacity,
                y: headerY
              }}
            >
              <p
                className={`${fonts.instrument} text-white text-sm md:text-base lg:text-2xl font-medium tracking-wider mb-4 md:mb-6`}
              >
                Why Us
              </p>
              <h2
                className={`${fonts.forum} text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-6`}
              >
                Partner in Financial Success and Growth.
              </h2>
              <p className={`${fonts.instrument} max-w-2xl text-white text-sm md:text-base font-normal leading-relaxed`}>
                We understand that choosing the right accounting partner is crucial.
                We offer unparalleled expertise in Finanacial Goals and Business
              </p>
            </motion.div>

            {/* Cards Grid with Momentum Wave Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
              {whatWeOffer.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    className="bg-white py-14 px-6 md:px-8 space-y-4 md:space-y-4 hover:shadow-xl transition-shadow duration-300"
                    style={cardTransforms[index]}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-16 md:h-16">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={58}
                        height={58}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={`${fonts.forum} text-primaryBlue text-xl md:text-2xl`}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-[#191919] text-sm md:text-base leading-relaxed ${fonts.instrument}`}>
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}