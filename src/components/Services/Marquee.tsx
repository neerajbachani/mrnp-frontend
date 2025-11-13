import { fonts } from "@/utils/fonts";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// Placeholder images for the marquee - replace with actual image paths
const marqueeImages = [
  "/marquee/image1.jpg",
  "/marquee/image2.jpg",
  "/marquee/image3.jpg",
  "/marquee/image4.jpg",
  "/marquee/image5.jpg",
];

export default function MarqueeComponent() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      {/* Content Section */}
      <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16 mb-12 md:mb-16 lg:mb-20">
        <div className="max-w-4xl">
          <h2
            className={`${fonts.forum} text-3xl md:text-4xl lg:text-5xl text-primaryBlue mb-4 md:mb-6`}
          >
            Culture of Excellence
          </h2>
          <div className={` ${fonts.instrument} space-y-4 md:space-y-6 text-[#191919] text-base md:text-lg leading-relaxed`}>
            <p>
              At MRNP, our culture is defined by a passionate drive to
              contribute to global transformation initiatives. We are committed
              to fostering an environment where creativity flourishes and
              diverse perspectives thrive. We encourage open expression of ideas
              and embrace challenges as opportunities for growth and innovation.
            </p>
            <p>
              We value individuals who challenge conventional norms and strive
              for excellence, as this mindset not only enhances personal
              satisfaction but also drives collective success. Despite our
              dynamic and forward-thinking approach, MRNP remains steadfast in
              upholding core values established over decades: integrity and
              honesty are paramount in every decision and interaction,
              regardless of seniority or role within the firm.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="overflow-hidden">
        <Marquee speed={50} gradient={false} pauseOnHover>
          {marqueeImages.map((image, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] mx-3 md:mx-4 bg-gray-200 relative"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
