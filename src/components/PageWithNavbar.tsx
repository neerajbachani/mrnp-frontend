import Navbar from "./Navbar";
import { navitems } from "@/constants/Navigation";

interface PageWithNavbarProps {
  navitems?: typeof navitems;
  children: React.ReactNode;
  transparentNav?: boolean;
}

export default function PageWithNavbar({
  navitems: customNavitems,
  children,
  transparentNav = false,
}: PageWithNavbarProps) {
  return (
    <>
      <Navbar navitems={customNavitems || navitems} transparent={transparentNav} />
      {children}
    </>
  );
}
