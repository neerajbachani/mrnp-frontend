import Container from "../Container";
import Heading from "../Heading";
import Bodytext from "../Bodytext";

interface OurValuesProps {
  title: string;
  description: string;
}

const ourValues: OurValuesProps[] = [
  {
    title: "Putting Clients First",
    description:
      "For us, it's all about you. We listen carefully to understand your challenges and goals, so we can tailor solutions that truly make a difference to your business. Your success is our priority, and we're committed to going above and beyond to deliver results you can rely on.",
  },
  {
    title: "Delivering Excellence",
    description:
      "Quality is at the heart of everything we do. We hold ourselves to the highest standards, ensuring that every piece of advice and every service we provide meets your expectations and ours. It's about accuracy, reliability, and exceeding your expectations.",
  },
  {
    title: "On Time, Every Time",
    description:
      "We get it—deadlines matter. You can count on us to deliver when we say we will. Consistency in meeting deadlines is part of our promise to you, so you can plan with confidence knowing we've got your back.",
  },
  {
    title: "Building Trusting Relationships",
    description:
      "Trust is earned through transparency, respect, and reliability. We believe in building strong, lasting partnerships with our clients. By understanding your business inside out, we can anticipate your needs and grow together through thick and thin.",
  },
  {
    title: "Integrity and Teamwork",
    description:
      "We operate with integrity in everything we do. Honesty, transparency, and ethical behavior are non-negotiable. We value teamwork and collaboration, pooling our expertise to find innovative solutions that solve your toughest challenges.",
  },
  {
    title: "Passion and Leadership",
    description:
      "Quality is at the heart of everything we do. We hold ourselves to the highest standards, ensuring that every piece of advice and every service we provide meets your expectations and ours. It's about accuracy, reliability, and exceeding your expectations.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-white flex justify-center items-center py-4 md:py-16 lg:py-20">
      <Container className="flex flex-col justify-center items-center space-y-8">
        <div className="md:max-w-xl text-center space-y-4 md:space-y-8">
          <Heading>Our Values</Heading>
          <Bodytext>
            At MRNP & Co. LLP, our values aren&apos;t just words on
            paper—they&apos;re the essence of how we do business and interact
            with our clients every day:
          </Bodytext>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-20 md:gap-y-8 py-2 md:py-8">
          {ourValues.map((value, index) => (
            <div key={index} className="space-y-2 md:space-y-4">
              <Heading>{value.title}:</Heading>
              <Bodytext>{value.description}</Bodytext>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
