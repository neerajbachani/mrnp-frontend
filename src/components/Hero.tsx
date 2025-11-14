import { fonts } from "@/utils/fonts";
import Container from "./Container";

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: boolean;
  image?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage = false,
  image,
  backgroundColor = "primaryBlue",
  children,
}: HeroProps) {
  const bgStyle = backgroundImage && image
    ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
    : {};

  const bgColorClass = !backgroundImage ? `bg-${backgroundColor}` : "";

  return (
    <section
      className={`relative flex justify-center items-center min-h-screen ${bgColorClass}`}
      style={bgStyle}
    >
      {/* Overlay for better text readability on image backgrounds */}
      {backgroundImage && (
        <div className="absolute inset-0" />
      )}

   
      <Container>
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6 mt-10 md:py-40">
          {subtitle && (
            <p
              className={`${fonts.instrument} text-sm lg:text-base text-white font-semibold`}
            >
              {subtitle}
            </p>
          )}

          <h1
            className={`${fonts.forum} text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[6.5rem] md:leading-tight lg:leading-[5rem] xl:leading-[6.5rem] text-white whitespace-pre-line`}
          >
            {title.replace(/\\n/g, "\n")}
          </h1>

          {description && (
            <p
              className={`${fonts.dm} text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-5xl mx-auto whitespace-pre-line leading-relaxed`}
            >
              {description.replace(/\\n/g, "\n")}
            </p>
          )}

          {buttonText && buttonLink && (
            <div className="pt-14">
              <a
                href={buttonLink}
                className={`${fonts.instrument}  px-10 py-4 bg-[#2A3F76] text-white text-sm lg:text-[1rem] xl:text-[1.25rem] font-bold rounded-full hover:bg-primaryBlue/90 `}
              >
                {buttonText}
              </a>
            </div>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}
