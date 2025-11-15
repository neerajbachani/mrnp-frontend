import { fonts } from "@/utils/fonts";
import Container from "./Container";
import Image from "next/image";
import { Navitem } from "@/constants/Navigation";
import Link from "next/link";

interface FooterProps {
  navitems: Navitem[];
}

export default function Footer({ navitems }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primaryBlue flex justify-center items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0">
          {/* Logo and Description Section */}
          <div className="py-12 md:py-16 lg:py-20 lg:pr-12 flex flex-col justify-between relative">
            <div>
              <Image
                src={"/logo-footer.svg"}
                alt="Logo"
                width={300}
                height={50}
                className="mb-6"
              />
              <p className={`${fonts.instrument} text-xs text-white leading-relaxed max-w-xs mb-8`}>
                MRNP & CO LLP focus on providing tailor-made solutions to the challenging problems of our clients and perform with high-quality and timely service.
              </p>
            </div>
            <div className={`${fonts.instrument} text-xs text-white`}>
              <p>&copy; {year} MRNP. All rights reserved.</p>
              <p className="mt-2">Design and Developed @ <span> 
                <Link href={"https://agnescreative.agency/"} target="_blank" rel="noreferrer">Agnes Creative</Link>
                </span></p>
            </div>
            {/* Border */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-px bg-white/10" />
          </div>

          {/* Company Section */}
          <div className="py-12 md:py-16 lg:py-20 lg:px-12 relative">
            <h3 className={`${fonts.inter} text-base font-semibold text-white mb-6 uppercase tracking-wider`}>
              Company
            </h3>
            <div className="space-y-3 flex flex-col">
              {navitems.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      className={`${fonts.inter} text-sm text-gray-300 hover:text-white transition-colors`}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  )
              )}
            </div>
            {/* Border */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-px bg-white/10" />
          </div>

          {/* Services Section */}
          <div className="py-12 md:py-16 lg:py-20 lg:px-12 relative">
            <h3 className={`${fonts.inter} text-base font-semibold text-white mb-6 uppercase tracking-wider`}>
              Services
            </h3>
            <div className="space-y-3 flex flex-col">
              {navitems.map(
                (item) =>
                  item.name === "Services" &&
                  item.submenu?.length &&
                  item.submenu.map((subitem, index) => (
                    <Link
                      key={index}
                      className={`${fonts.inter} text-sm text-gray-300 hover:text-white transition-colors`}
                      href={subitem.href}
                    >
                      {subitem.name}
                    </Link>
                  ))
              )}
            </div>
            {/* Border */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-px bg-white/10" />
          </div>

          {/* Stay Connected Section */}
          <div className="py-12 md:py-16 lg:py-20 lg:pl-12">
            <h3 className={`${fonts.inter} text-base font-semibold text-white mb-6 uppercase tracking-wider`}>
              Stay Connected
            </h3>
            <div className="space-y-3 flex flex-col">
              <Link 
                href={"#"} 
                className={`${fonts.inter} text-sm text-gray-300 hover:text-white transition-colors`}
              >
                Facebook
              </Link>
              <Link 
                href={"#"} 
                className={`${fonts.inter} text-sm text-gray-300 hover:text-white transition-colors`}
              >
                Twitter / X
              </Link>
              <Link 
                href={"#"} 
                className={`${fonts.inter} text-sm text-gray-300 hover:text-white transition-colors`}
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
