// Example usage of the Hero component with transparent navbar

import HeroWithNavbar from "@/components/HeroWithNavbar";
import Hero from "@/components/Hero";
import { navitems } from "@/constants/Navigation";

// Homepage Example - Hero with transparent navbar and background image
export function HomepageHero() {
  return (
    <HeroWithNavbar
      navitems={navitems}
      backgroundImage={true}
      image="/hero-bg.jpg"
      title="History of expertise.\nReputation for excellence."
      description="Smart approaches to solution with exceptional service. Talent and expertise necessary to meet our clients' needs in an ever-changing and fast-paced environment."
      buttonText="About Us"
      buttonLink="/about"
    />
  );
}

// About Page Example - Standalone Hero with solid navy background (use with PageWithNavbar)
export function AboutPageHero() {
  return (
    <Hero
      backgroundImage={false}
      backgroundColor="primaryBlue"
      title=""
      description="We see each client as unique, with their own set of goals and challenges. That's why we don't offer a one-size-fits-all solution."
      buttonText="Learn More"
      buttonLink="#commitment"
    />
  );
}

// Alternative - Hero with secondary blue background
export function HeroAlt() {
  return (
    <Hero
      backgroundImage={false}
      backgroundColor="secondaryBlue"
      title="Your Title Here"
      description="Your description here."
    />
  );
}
