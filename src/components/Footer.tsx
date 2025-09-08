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
      <Container className="flex flex-col justify-center items-center py-8 md:py-9 lg:py-[42px] ">
        <div className="w-full space-y-12 lg:space-x-12 lg:space-y-0 flex flex-col lg:flex-row justify-between items-start py-6">
          <div>
            <Image
              src={"/Logo_Footer.png"}
              alt="Logo"
              width={300}
              height={300}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 space-y-6 lg:space-y-0">
            <div className="space-y-2 lg:space-y-4">
              <p className={`${fonts.inter} text-lg text-[#c8c8c8] font-bold`}>
                Company
              </p>
              <div className="space-y-2 flex flex-col">
                {navitems.map(
                  (item, index) =>
                    item.href && (
                      <Link
                        key={index}
                        className={`${fonts.inter} text-white`}
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    )
                )}
              </div>
            </div>
            <div className="space-y-4">
              <p className={`${fonts.inter} text-lg text-[#c8c8c8] font-bold`}>
                Services
              </p>
              <div className="space-y-2 flex flex-col">
                {navitems.map(
                  (item) =>
                    item.name === "Services" &&
                    item.submenu?.length &&
                    item.submenu.map((subitem, index) => (
                      <Link
                        key={index}
                        className={`${fonts.inter} text-white`}
                        href={subitem.href}
                      >
                        {subitem.name}
                      </Link>
                    ))
                )}
              </div>
            </div>
            <div className="space-y-4">
              <p className={`${fonts.inter} text-lg text-[#c8c8c8] font-bold`}>
                Stay Connected
              </p>
              <div className="space-y-2 flex flex-col">
                <Link href={"#"} className={`${fonts.inter} text-white`}>
                  Facebook
                </Link>
                <Link href={"#"} className={`${fonts.inter} text-white`}>
                  Twitter / X
                </Link>
                <Link href={"#"} className={`${fonts.inter} text-white`}>
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="w-full h-[1px] my-4 lg:my-8 bg-white" />
        <div
          className={`flex flex-col lg:flex-row w-full justify-between items-center ${fonts.inter} text-xs text-white  text-center lg:text-start space-y-2 lg:space-y-0`}
        >
          <p className="text-white text-sm">
            &copy; {year} MRNP. All rights reserved.
          </p>
          <p className="flex items-center justify-center space-x-2 text-sm">
            <span>Design and Developed</span>
            <a href="http://agnescreative.agency/" target="_blank">
              <Image
                quality={100}
                width={50}
                height={50}
                alt="Agnes"
                src={"/Agnes.png"}
                className="rounded-md"
              />
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
