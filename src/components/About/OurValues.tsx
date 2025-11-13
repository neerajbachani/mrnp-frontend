import { fonts } from "@/utils/fonts";
import Image from "next/image";

interface OurValuesProps {
  title: string;
  description: string;
  icon: string;
}

const ourValues: OurValuesProps[] = [
  {
    title: "Putting Clients First:",
    description:
      "For us, it's all about you. We listen carefully to understand your challenges and goals, so we can tailor solutions that truly make a difference to your business. Your success is our priority, and we're committed to going above and beyond to deliver results you can rely on.",
    icon: "/about/vector2.svg",
  },
  {
    title: "Delivering Excellence:",
    description:
      "Quality is at the heart of everything we do. We hold ourselves to the highest standards, ensuring that every piece of advice and every service we provide meets your expectations and ours. It's about accuracy, reliability, and exceeding your expectations.",
     icon: "/about/vector3.svg",
  },
  {
    title: "On Time, Every Time:",
    description:
      "We get it—deadlines matter. You can count on us to deliver when we say we will. Consistency in meeting deadlines is part of our promise to you, so you can plan with confidence knowing we've got your back.",
    icon: "/about/vector4.svg",
  },
  {
    title: "Building Trusting Relationships:",
    description:
      "Trust is earned through transparency, respect, and reliability. We believe in building strong, lasting partnerships with our clients. By understanding your business inside out, we can anticipate your needs and grow together through thick and thin.",
    icon: "/about/vector5.svg",
  },
  {
    title: "Integrity and Teamwork:",
    description:
      "We operate with integrity in everything we do. Honesty, transparency, and ethical behavior are non-negotiable. We value teamwork and collaboration, pooling our expertise to find innovative solutions that solve your toughest challenges.",
    icon: "/about/vector6.svg",
  },
  {
    title: "Passion and Leadership:",
    description:
      "Quality is at the heart of everything we do. We hold ourselves to the highest standards, ensuring that every piece of advice and every service we provide meets your expectations and ours. It's about accuracy, reliability, and exceeding your expectations.",
   icon: "/about/vector1.svg",
  },
];

export default function OurValues() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[88rem] mx-auto px-6 md:px-4 ">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <h2
            className={`${fonts.forum} text-3xl md:text-4xl lg:text-5xl text-primaryBlue mb-6 md:mb-3`}
          >
            Our Values
          </h2>
          <p className={`${fonts.dm} text-base md:text-lg leading-relaxed`}>
            At MRNP & Co. LLP, our values aren&apos;t just words on
            paper—they&apos;re the essence of how we do business and interact
            with our clients every day:
          </p>
        </div>

        {/* Values Grid with Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {ourValues.map((value, index) => {
            const isLeftColumn = index % 2 === 0;
            const isNotLastRow = index < ourValues.length - 2;

            return (
              <div key={index} className="relative">
                {/* Value Content */}
                <div className="p-8 md:p-10 lg:p-12 space-y-4 md:space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-16 md:h-16">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`${fonts.instrument} font-medium text-2xl md:text-3xl text-primaryBlue`}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className={`${fonts.dm} text-[#191919] text-base md:text-lg leading-relaxed`}>
                    {value.description}
                  </p>
                </div>

                {/* Vertical Border - Only for left column cards on desktop */}
                {isLeftColumn && (
                  <div className="absolute bottom-8 right-0 top-8 hidden w-px bg-gray-300 lg:block" />
                )}

                {/* Horizontal Border - Full width after each row except last */}
                {isNotLastRow && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
