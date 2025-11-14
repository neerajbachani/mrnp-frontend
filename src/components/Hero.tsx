"use client";

import { fonts } from "@/utils/fonts";
import Container from "./Container";
import { motion } from "framer-motion";

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: boolean;
  image?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage = false,
  image,
  backgroundColor = "primaryBlue",
  children,
}: HeroProps) {
  const bgStyle = backgroundImage && image
    ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
    : {};

  const bgColorClass = !backgroundImage ? `bg-${backgroundColor}` : "";

  return (
    <section
      className={`relative flex justify-center items-center min-h-screen ${bgColorClass}`}
      style={bgStyle}
    >
      {/* Overlay for better text readability on image backgrounds */}
      {backgroundImage && (
        <div className="absolute inset-0" />
      )}

   
      <Container>
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6 mt-10 md:py-40">
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`${fonts.instrument} text-sm lg:text-base text-white font-semibold`}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className={`${fonts.forum} text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[6.5rem] md:leading-tight lg:leading-[5rem] xl:leading-[6.5rem] text-white whitespace-pre-line`}
          >
            {title.replace(/\\n/g, "\n")}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className={`${fonts.dm} text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-5xl mx-auto whitespace-pre-line leading-relaxed`}
            >
              {description.replace(/\\n/g, "\n")}
            </motion.p>
          )}

          {buttonText && buttonLink && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              className="pt-14"
            >
              <a
                href={buttonLink}
                className={`${fonts.instrument}  px-10 py-4 bg-[#2A3F76] text-white text-sm lg:text-[1rem] xl:text-[1.25rem] font-bold rounded-full hover:bg-primaryBlue/90 `}
              >
                {buttonText}
              </a>
            </motion.div>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}
