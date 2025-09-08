import { fonts } from "@/utils/fonts";
import Container from "../Container";
import Heading from "../Heading";
import Bodytext from "../Bodytext";

export default function FirmInfo() {
  return (
    <section className="bg-white flex justify-center items-center py-4 md:py-16">
      <Container className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 space-x-0 md:space-x-16">
          <div className={`text-primaryBlue  text-center`}>
            <p
              className={`${fonts.baskerville} text-[160px] lg:text-[300px] leading-[0.8]`}
            >
              14
            </p>
            <p className={`${fonts.baskerville} text-base lg:text-2xl`}>
              Years of Experience
            </p>
          </div>
          <div className="space-y-4 lg:space-y-2">
            <p className={`${fonts.gilda} text-2xl text-primaryBlue uppercase`}>
              The Firm
            </p>
            <div className="md:max-w-xl">
              <Heading>Empowering Financial Growth and Stability.</Heading>
            </div>
            <div className="lg:max-w-[90%]">
              <Bodytext>
                MRNP & CO LLP is a dynamic Chartered Accountant firm with a
                robust presence across multiple states, including Bengaluru,
                Raipur, Surat, Vadodara, Gandhidham, and Bhuj. Founded in 2011
                by a team of young, enthusiastic, and highly skilled
                professionals, the firm brings extensive experience from top
                consulting firms to every engagement.
              </Bodytext>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
