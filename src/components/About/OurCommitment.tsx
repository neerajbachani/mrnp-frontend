import Container from "../Container";
import Heading from "../Heading";
import Bodytext from "../Bodytext";

export default function OurCommitment() {
  return (
    <section className="bg-white flex justify-center items-center py-10 md:py-16 lg:py-20">
      <Container className="flex justify-between items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center relative py-3 lg:py-16 lg:px-8 gap-8 lg:gap-8">
          <div className="h-full bg-offWhite absolute top-0 right-0 w-[80%]" />
          <Heading style="z-10">
            An everlasting
            <br /> commitment to
            <br /> fiduciary values
          </Heading>
          <div className="space-y-8 z-10">
            <Bodytext>
              Established in 2011, MRNP & CO LLP is a distinguished Chartered
              Accountant firm with a robust presence across multiple states
              including Bengaluru, Ahmedabad, Raipur, Surat, Vadodara,
              Gandhidham, and Bhuj. Founded by a cadre of young, dynamic
              professionals with extensive backgrounds in top consulting firms,
              our firm specializes in delivering customized solutions to meet
              the diverse needs of our clients.
            </Bodytext>
            <Bodytext>
              At MRNP & CO LLP, we are committed to providing high-quality,
              timely services tailored to industry-specific requirements. Our
              team comprises talented professionals who leverage their expertise
              to deliver technology-enabled solutions that ensure client
              success. We prioritize a collaborative approach, fostering synergy
              across our service areas to offer comprehensive solutions even in
              the most complex scenarios.
            </Bodytext>
          </div>
        </div>
      </Container>
    </section>
  );
}
