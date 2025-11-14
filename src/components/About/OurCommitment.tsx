// import { fonts } from "@/utils/fonts";

// export default function OurCommitment() {
//   return (
//     <section className="bg-[#F5F5F0] pt-56 md:pt-64 lg:pt-96 pb-16 md:pb-20 lg:pb-20">
//       <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">
//         <div className="space-y-8 md:space-y-12">
//           {/* Title - Full Width */}
//           <h2
//             className={`${fonts.forum} text-3xl md:text-4xl lg:text-5xl text-primaryBlue leading-tight`}
//           >
//             An everlasting commitment to fiduciary values
//           </h2>

//           {/* Content - Two Columns */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//             <p className={`${fonts.dm} text-primaryBlue text-base md:text-xl leading-relaxed`}>
//               Established in 2011, MRNP & CO LLP is a distinguished Chartered
//               Accountant firm with a robust presence across multiple states
//               including Bengaluru, Ahmedabad, Raipur, Surat, Vadodara,
//               Gandhidham, and Bhuj. Founded by a cadre of young, dynamic
//               professionals with extensive backgrounds in top consulting firms,
//               our firm specializes in delivering customized solutions to meet
//               the diverse needs of our clients.
//             </p>
//             <p className={`${fonts.dm} text-primaryBlue text-base md:text-xl leading-relaxed`}>
//               At MRNP & CO LLP, we are committed to providing high-quality,
//               timely services tailored to industry-specific requirements. Our
//               team comprises talented professionals who leverage their expertise
//               to deliver technology-enabled solutions that ensure client
//               success. We prioritize a collaborative approach, fostering synergy
//               across our service areas to offer comprehensive solutions even in
//               the most complex scenarios.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { fonts } from "@/utils/fonts";

export default function OurCommitment() {
  return (
    <section className="bg-[#F5F5F0] pt-[9rem] md:pt-[14rem] lg:pt-[18rem] xl:pt-[24rem] pb-16 md:pb-20 lg:pb-24">
      <div className=" container mx-auto px-6 md:px-12 lg:px-16">
        <div className="space-y-8 md:space-y-12">
          {/* Title - Full Width */}
          <h2
            className={`${fonts.forum} text-3xl md:text-4xl lg:text-5xl text-primaryBlue leading-tight`}
          >
            An everlasting commitment to fiduciary values
          </h2>

          {/* Content - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <p className={`${fonts.dm} text-primaryBlue text-base md:text-xl leading-relaxed`}>
              Established in 2011, MRNP & CO LLP is a distinguished Chartered
              Accountant firm with a robust presence across multiple states
              including Bengaluru, Ahmedabad, Raipur, Surat, Vadodara,
              Gandhidham, and Bhuj. Founded by a cadre of young, dynamic
              professionals with extensive backgrounds in top consulting firms,
              our firm specializes in delivering customized solutions to meet
              the diverse needs of our clients.
            </p>
            <p className={`${fonts.dm} text-primaryBlue text-base md:text-xl leading-relaxed`}>
              At MRNP & CO LLP, we are committed to providing high-quality,
              timely services tailored to industry-specific requirements. Our
              team comprises talented professionals who leverage their expertise
              to deliver technology-enabled solutions that ensure client
              success. We prioritize a collaborative approach, fostering synergy
              across our service areas to offer comprehensive solutions even in
              the most complex scenarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
