export interface SubmenuItems {
  name: string;
  href: string;
}
export interface Navitem {
  name: string;
  href?: string;
  submenu?: SubmenuItems[] | null;
}

export const navitems: Navitem[] = [
  { name: "Home", href: "/" },
  { name: "About MRNP", href: "/about" },
  {
    name: "Services",
    
  },
  { name: "Life@MRNP", href: "/careers" },
  { name: "Who we serve", href: "/who-we-serve" },
  // {
  //   name: "Resources",
  // },
];
