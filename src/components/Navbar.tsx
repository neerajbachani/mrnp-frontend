"use client";
import Image from "next/image";
import Container from "./Container";
import { fonts } from "@/utils/fonts";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
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

  const navBgClass = transparent ? "bg-transparent" : "bg-offWhite";
  const textColorClass = transparent ? "text-white" : "text-primaryBlue";
  const hoverColorClass = transparent ? "hover:text-white/80" : "hover:text-primaryBlue/80";
  const logoFilterClass = transparent ? "brightness-0 invert" : "";

  return (
    <div className={`flex justify-center items-center ${navBgClass} z-50 ${transparent ? 'absolute top-0 left-0 right-0' : ''}`}>
      <Container className="w-full">
        <nav className=" py-6 lg:py-10 relative">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-between items-center w-full">
            {/* Brand Logo */}

            <Link href={"/"} className="flex items-center gap-4">
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={280}
                height={50}
                className={`w-[200px] sm:w-[240px] xl:w-[330px] h-auto ${logoFilterClass}`}
              />
            </Link>
            {/* NavItems */}
            <div>
              <ul className="flex lg:space-x-4 xl:space-x-8">
                {navitems.map((item, index) => (
                  <li key={index}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`flex justify-center items-center gap-x-[1px] ${textColorClass} ${hoverColorClass} transition-colors duration-200 ease-in-out text-base ${fonts.inter}`}
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
                        className={`flex justify-center items-center gap-x-[1px] ${textColorClass} ${hoverColorClass} transition-colors duration-200 ease-in-out text-base cursor-pointer ${fonts.inter}`}
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
                            className="absolute top-[50%] w-full left-0 bg-[#f2f2f2] shadow-lg p-9 rounded z-10"
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <p
                                  className={`text-primaryBlue text-6xl ${fonts.baskerville}  font-semibold`}
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
              
            </div>
            {/* Contact Btn */}
            
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex justify-between items-center w-full ">
            {/* Brand Logo */}
            <Link href={"/"} className="flex items-center gap-4">
              <Image src={"/Logo.svg"} alt="Logo" width={200} height={40} />
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="text-primaryBlue z-10 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
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
                  className="lg:hidden fixed inset-0 bg-black/40 z-40"
                  onClick={toggleMobileMenu}
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="w-full md:w-[600px] lg:hidden fixed h-full top-0 right-0 bg-primaryBlue z-50 overflow-y-auto"
                >
                  <div className="flex flex-col p-6">
                    {/* Close Button */}
                    <div className="flex justify-end items-center mb-8">
                      <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                      >
                        <X size={30} />
                      </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <ul className="space-y-4">
                      {navitems.map((item, index) => (
                        <li key={index}>
                          {item.submenu ? (
                            <div>
                              <div
                                onClick={() => toggleSubmenu(index)}
                                className={`flex justify-between items-center text-white ${fonts.inter} font-semibold cursor-pointer`}
                              >
                                {item.name}
                                <ChevronDown
                                  size={18}
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
                                    className="pl-4 mt-2 space-y-2 overflow-hidden"
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
                                          className={`text-white ${fonts.inter}`}
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
                              className={`text-white ${fonts.inter} font-semibold`}
                            >
                              {item.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* Contact Button */}
                    <Link
                      href={"/contact"}
                      onClick={toggleMobileMenu}
                      className={`mt-8 bg-white hover:bg-primaryBlue hover:text-white border hover:border-white transition-colors duration-300 ease-in-out text-primaryBlue text-base py-4 px-8 ${fonts.inter} text-center block`}
                    >
                      Contact us
                    </Link>
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
