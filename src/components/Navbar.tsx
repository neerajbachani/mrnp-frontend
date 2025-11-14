"use client";
import Image from "next/image";
import Container from "./Container";
import { fonts } from "@/utils/fonts";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Navitem } from "@/constants/Navigation";

interface NavbarProps {
  navitems: Navitem[];
  transparent?: boolean;
}

export default function Navbar({ navitems, transparent = false }: NavbarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const navBgClass = transparent ? "bg-transparent" : "bg-primaryBlue";
  const textColorClass = "text-white";
  const hoverColorClass = "hover:text-white/80";
  const logoFilterClass = "brightness-0 invert";

  return (
    <div className={`flex justify-center items-center ${navBgClass} z-50 ${transparent ? 'absolute top-2 left-0 right-0' : ''}`}>
      <Container className="w-full">
        <nav className="py-4 relative">
          {/* Desktop Navigation */}
          <div className="flex justify-between items-center w-full">
            {/* Brand Logo */}
            <Link href={"/"} className="flex items-center">
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={400}
                height={60}
                className={`w-[180px] sm:w-[220px] lg:w-[280px] xl:w-[400px] h-auto ${logoFilterClass}`}
              />
            </Link>

            {/* NavItems - Desktop (Only first 3 items) */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navitems.slice(0, 3).map((item, index) => (
                  <li key={index}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`flex justify-center items-center gap-x-1 ${textColorClass} ${hoverColorClass} transition-colors duration-200 ease-in-out text-base ${fonts.instrument}`}
                      >
                        {item.name}
                        {item.submenu && (
                          <span>
                            <ChevronDown size={18} />
                          </span>
                        )}
                      </Link>
                    ) : (
                      <p
                        className={`flex justify-center items-center gap-x-1 ${textColorClass} ${hoverColorClass} transition-colors duration-200 ease-in-out text-base cursor-pointer ${fonts.inter}`}
                        onMouseEnter={() =>
                          setHoveredIndex(index === hoveredIndex ? null : index)
                        }
                      >
                        {item.name}
                        {item.submenu && (
                          <span>
                            <ChevronDown size={18} />
                          </span>
                        )}
                      </p>
                    )}
                    {item.submenu && (
                      <AnimatePresence>
                        {hoveredIndex === index && (
                          <motion.div
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2, ease: "easeIn" }}
                            className="absolute top-[100%] w-full left-0 bg-white shadow-lg p-9 rounded z-10"
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <p
                                  className={`text-primaryBlue text-6xl ${fonts.baskerville} font-semibold`}
                                >
                                  {item.name}
                                </p>
                              </div>
                              <ul className="grid grid-cols-2 w-[70%] gap-4 mt-4">
                                {item.submenu.map((subitem, subindex) => (
                                  <li key={subindex}>
                                    <Link
                                      href={subitem.href}
                                      className={`text-primaryBlue hover:text-primaryBlue/80 transition-colors duration-200 ease-in-out text-base ${fonts.inter} font-semibold`}
                                    >
                                      {subitem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>

              {/* Contact Us Button */}
              <Link
                href="/contact"
                className={`bg-white text-primaryBlue hover:bg-white/90 transition-colors duration-200 ease-in-out px-6 py-2 rounded-full ${fonts.inter} text-base font-medium`}
              >
                Contact Us
              </Link>

              {/* Menu Icon */}
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none"
              >
                <Image
                  src="/icons/menu.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                  className="w-6 h-6 lg:w-8 lg:h-8 brightness-0 invert"
                />
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden focus:outline-none"
            >
              <Image
                src="/icons/menu.svg"
                alt="Menu"
                width={24}
                height={24}
                className="w-6 h-6 brightness-0 invert"
              />
            </button>
          </div>

          {/* Mobile Menu Overlay with Animation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-transparent z-40"
                  onClick={toggleMobileMenu}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
                  className="fixed top-8 right-4 sm:right-8 md:right-12 lg:right-20 w-[90%] sm:w-[400px] lg:w-[37%]  bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
                >
                  <div className="flex flex-col min-h-[400px] max-h-[80vh]">
                    {/* Close Button */}
                    <div className="flex justify-end items-center p-6 pb-4">
                      <button
                        onClick={toggleMobileMenu}
                        className="text-primaryBlue focus:outline-none hover:bg-gray-100 rounded-full p-1 transition-colors"
                      >
                        <X size={28} strokeWidth={2.5} />
                      </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <div className="flex-1 overflow-y-auto px-8 pb-6 scrollbar-hide">
                      <ul className="space-y-1">
                        {navitems.map((item, index) => (
                          <li key={index} className="border-b border-gray-200 py-4">
                            {item.submenu ? (
                              <div>
                                <div
                                  onClick={() => toggleSubmenu(index)}
                                  className={`flex justify-between items-center text-primaryBlue ${fonts.inter} text-xl font-normal cursor-pointer hover:text-primaryBlue/80 transition-colors`}
                                >
                                  {item.name}
                                  <ChevronDown
                                    size={20}
                                    className={`transform transition-transform ${
                                      openSubmenuIndex === index
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </div>
                                <AnimatePresence>
                                  {openSubmenuIndex === index && (
                                    <motion.ul
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{
                                        opacity: 1,
                                        height: "auto",
                                        transition: {
                                          duration: 0.3,
                                          ease: "easeInOut",
                                        },
                                      }}
                                      exit={{
                                        opacity: 0,
                                        height: 0,
                                        transition: {
                                          duration: 0.2,
                                          ease: "easeInOut",
                                        },
                                      }}
                                      className="pl-4 mt-3 space-y-2 overflow-hidden"
                                    >
                                      {item.submenu.map((subitem, subindex) => (
                                        <motion.li
                                          key={subindex}
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            delay: subindex * 0.1,
                                            duration: 0.3,
                                            ease: "easeOut",
                                          }}
                                        >
                                          <Link
                                            href={subitem.href}
                                            onClick={toggleMobileMenu}
                                            className={`text-primaryBlue/70 ${fonts.inter} text-base hover:text-primaryBlue transition-colors`}
                                          >
                                            {subitem.name}
                                          </Link>
                                        </motion.li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <Link
                                href={item.href || ""}
                                onClick={toggleMobileMenu}
                                className={`text-primaryBlue ${fonts.inter} text-xl font-normal hover:text-primaryBlue/80 transition-colors block`}
                              >
                                {item.name}
                              </Link>
                            )}
                          </li>
                        ))}
                        
                        {/* Contact Us in Mobile Menu */}
                        <li className="border-b border-gray-200 py-4">
                          <Link
                            href="/contact"
                            onClick={toggleMobileMenu}
                            className={`text-primaryBlue ${fonts.inter} text-xl font-normal hover:text-primaryBlue/80 transition-colors block`}
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Footer Text */}
                    <div className="px-8 py-6 border-t border-gray-100">
                      <p className={`text-gray-400 ${fonts.inter} text-xs`}>
                        © 2025 MRNP. All rights reserved.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </Container>
    </div>
  );
}
