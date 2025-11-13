import { fonts } from "@/utils/fonts";

export default function FirmInfo() {
  return (
    <section
      className="relative w-full min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/the-firm-bg.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16 lg:gap-20">
          {/* Left side - SVG */}
          <div className="flex-shrink-0">
            <img
              src="/14.svg"
              alt="14 Years of Experience"
              className="w-[200px] md:w-[180px] lg:w-[257px] h-auto mb-10"
            />
            <p className={`${fonts.forum} text-3xl text-center text-white leading-7 `}>14 Years of Experience</p>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6 text-white max-w-2xl">
            <p
              className={`${fonts.instrument} text-xs md:text-sm lg:text-2xl uppercase tracking-widest`}
            >
              The Firm
            </p>
            <h2
              className={`${fonts.forum} text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight`}
            >
              Empowering Financial Growth and Stability.
            </h2>
            <p className={` ${fonts.instrument} text-sm md:text-base lg:text-lg leading-relaxed text-white`}>
              MRNP & CO LLP is a dynamic Chartered Accountant firm with a
              robust presence across multiple states, including Bengaluru,
              Raipur, Surat, Vadodara, Gandhidham, and Bhuj. Founded in 2011 by
              a team of young, enthusiastic, and highly skilled professionals,
              the firm brings extensive experience from top consulting firms to
              every engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
