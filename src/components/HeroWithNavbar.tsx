import Navbar from "./Navbar";
import Hero, { HeroProps } from "./Hero";
import { navitems } from "@/constants/Navigation";

interface HeroWithNavbarProps extends HeroProps {
  navitems?: typeof navitems;
}

export default function HeroWithNavbar({ navitems: customNavitems, ...heroProps }: HeroWithNavbarProps) {
  return (
    <div className="relative">
      {/* Navbar with transparent background */}
      <Navbar navitems={customNavitems || navitems} transparent={true} />
      
      {/* Hero section */}
      <Hero {...heroProps} />
    </div>
  );
}
