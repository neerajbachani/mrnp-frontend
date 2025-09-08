import Container from "../Container";
import Heading from "../Heading";
import Image from "next/image";
import Bodytext from "../Bodytext";

export default function WorkCulture() {
  return (
    <>
      <section className="bg-white flex flex-col justify-center items-center py-10 lg:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div className="hidden lg:block" />
            <div className="lg:col-span-3 space-y-2 md:space-y-3 lg:border lg:border-r-0 lg:border-b-0 lg:border-[#aaaaaa] lg:p-11 ">
              <Heading>Innovative Collaboration & Dynamic Team Culture</Heading>
              <div className="space-y-3 md:space-y-5">
                <Bodytext>
                  At MRNP, our environment fosters collaboration with top-tier
                  talent, visionary thinkers, and industry trailblazers who are
                  at the forefront of forging and sustaining innovative and
                  impactful partnerships.
                </Bodytext>
                <Bodytext>
                  Our organization values a dynamic and resourceful team,
                  characterized by youthfulness and energy, present across all
                  our locations. We firmly uphold the belief that our people
                  define our culture and organization, guiding every decision we
                  make.
                </Bodytext>
              </div>
            </div>
          </div>
        </Container>
        <div className="w-full py-8 xl:py-0">
          <Image
            src="/careers/2.png"
            alt="Careers"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-3 space-y-2 md:space-y-3 lg:py-11 ">
              <Heading>Culture of Excellence</Heading>
              <div className="space-y-3 md:space-y-5">
                <Bodytext>
                  At MRNP, our culture is defined by a passionate drive to
                  contribute to global transformation initiatives. We are
                  committed to fostering an environment where creativity
                  flourishes and diverse perspectives thrive. We encourage open
                  expression of ideas and embrace challenges as opportunities
                  for growth and innovation.
                </Bodytext>
                <Bodytext>
                  We value individuals who challenge conventional norms and
                  strive for excellence, as this mindset not only enhances
                  personal satisfaction but also drives collective success.
                  Despite our dynamic and forward-thinking approach, MRNP
                  remains steadfast in upholding core values established over
                  decades: integrity and honesty are paramount in every decision
                  and interaction, regardless of seniority or role within the
                  firm.
                </Bodytext>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </Container>
      </section>
    </>
  );
}
