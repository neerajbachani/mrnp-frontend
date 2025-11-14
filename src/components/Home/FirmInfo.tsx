"use client";

import { fonts } from "@/utils/fonts";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FirmInfo() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to create dramatic light-to-dark shift
  const lightOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 0.5, 0.2, 0]);
  const darkOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.2, 0.1, 0.1]);
  
  // Shift gradient position on scroll
  const gradientPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/the-firm-bg.png')" }}
    >
      {/* Animated gradient overlays - Light overlay that fades out */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent"
        style={{ opacity: lightOpacity }}
      />
      
      {/* Dark overlay that intensifies and shifts position */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          opacity: darkOpacity,
          background: useTransform(
            gradientPosition,
            (pos) => `linear-gradient(135deg, transparent ${pos}, rgba(0,0,0,0.5) ${pos}, rgba(0,0,0,0.85) 100%)`
          )
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16 lg:gap-20">
          {/* Left side - SVG */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/14.svg"
                alt="14 Years of Experience"
                width={257}
                height={257}
                className="w-[200px] md:w-[180px] lg:w-[257px] h-auto mb-10"
              />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className={`${fonts.forum} text-3xl text-center text-white leading-7`}
            >
              Years of Experience
            </motion.p>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6 text-white max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className={`${fonts.instrument} text-xs md:text-sm lg:text-2xl uppercase tracking-widest`}
            >
              The Firm
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className={`${fonts.forum} text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight`}
            >
              Empowering Financial Growth and Stability.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className={`${fonts.instrument} text-sm md:text-base lg:text-lg leading-relaxed text-white`}
            >
              MRNP & CO LLP is a dynamic Chartered Accountant firm with a
              robust presence across multiple states, including Bengaluru,
              Raipur, Surat, Vadodara, Gandhidham, and Bhuj. Founded in 2011 by
              a team of young, enthusiastic, and highly skilled professionals,
              the firm brings extensive experience from top consulting firms to
              every engagement.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
