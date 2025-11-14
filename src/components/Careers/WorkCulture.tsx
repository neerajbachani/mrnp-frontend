// import { fonts } from "@/utils/fonts";

// export default function WorkCulture() {
//   return (
//     <section className="bg-[#F5F5F0] pt-56 md:pt-64 lg:pt-96 pb-16 md:pb-20 lg:pb-24">
//       <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">
//         <div className="space-y-8 md:space-y-12">
//           {/* Title - Full Width */}
//           <h2
//             className={`${fonts.forum} text-3xl md:text-4xl lg:text-5xl text-[#13234C] leading-tight`}
//           >
//             Innovative Collaboration & Dynamic Team Culture
//           </h2>

//           {/* Content - Two Columns */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//             <p className={` ${fonts.dm} text-[#13234C] text-base md:text-xl leading-relaxed`}>
//               At MRNP, our environment fosters collaboration with top-tier
//               talent, visionary thinkers, and industry trailblazers who are at
//               the forefront of forging and sustaining innovative and impactful
//               partnerships.
//             </p>
//             <p className={` ${fonts.dm} text-[#13234C] text-base md:text-xl leading-relaxed`}>
//               Our organization values a dynamic and resourceful team,
//               characterized by youthfulness and energy, present across all our
//               locations. We firmly uphold the belief that our people define our
//               culture and organization, guiding every decision we make.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { fonts } from "@/utils/fonts";

export default function WorkCulture() {
  return (
    <section className="relative bg-[#F5F5F0] pt-[9rem] md:pt-[14rem] lg:pt-[18rem] xl:pt-[24rem] pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">
        <div className="space-y-8 md:space-y-12">
          {/* Title - Full Width */}
          <h2
            className={`${fonts.forum} text-3xl md:text-4xl lg:text-5xl text-[#13234C] leading-tight`}
          >
            Innovative Collaboration & Dynamic Team Culture
          </h2>

          {/* Content - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <p className={`${fonts.dm} text-[#13234C] text-base md:text-xl leading-relaxed`}>
              At MRNP, our environment fosters collaboration with top-tier
              talent, visionary thinkers, and industry trailblazers who are at
              the forefront of forging and sustaining innovative and impactful
              partnerships.
            </p>
            <p className={`${fonts.dm} text-[#13234C] text-base md:text-xl leading-relaxed`}>
              Our organization values a dynamic and resourceful team,
              characterized by youthfulness and energy, present across all our
              locations. We firmly uphold the belief that our people define our
              culture and organization, guiding every decision we make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
