// import { fonts } from "@/utils/fonts";
// import Image from "next/image";

// export interface PageIntroProps {
//   pageName?: string;
//   pageTitle?: string;
//   pageTitle2?: string;
//   pageSubtitle?: string;
//   pageDescription?: string;
//   imgSrc?: string;
//   children?: React.ReactNode;
//   containerWidth?: string;
// }

// export default function PageIntro({
//   pageName,
//   pageTitle,
//   pageTitle2,
//   pageDescription,
//   imgSrc,
// }: PageIntroProps) {
//   return (
//     <section className="relative bg-primaryBlue pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-20 h-[85vh]">
//       <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">
//         {/* Text Content */}
//         <div className="mb-12 md:mb-16 lg:mb-12 max-w-7xl ">
//           <h1
//             className={`${fonts.forum} text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] text-white leading-tight mb-3 md:mb-5`}
//           >
//             {pageTitle ? pageTitle : pageName}
//           </h1>
//           {pageTitle2 && (
//             <h2
//               className={`${fonts.instrument} text-white text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-tight mb-3 md:mb-5 max-w-6xl`}
//             >
//               {pageTitle2}
//             </h2>
//           )}
//           {pageDescription && (
//             <p className={`${fonts.dm} text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl`}>
//               {pageDescription}
//             </p>
//           )}
//         </div>

//         {/* Team Image - Overlapping */}
//         {imgSrc && (
//           <div className="relative w-full -mb-48 md:-mb-56 lg:-mb-80">
//             <Image
//               src={decodeURI(imgSrc)}
//               alt={pageName || "Banner"}
//               width={1200}
//               height={600}
//               className="w-full h-auto shadow-xl"
//               priority
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";
import { fonts } from "@/utils/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export interface PageIntroProps {
  pageName?: string;
  pageTitle?: string;
  pageTitle2?: string;
  pageSubtitle?: string;
  pageDescription?: string;
  imgSrc?: string;
  children?: React.ReactNode;
  containerWidth?: string;
}

export default function PageIntro({
  pageName,
  pageTitle,
  pageTitle2,
  pageDescription,
  imgSrc,
}: PageIntroProps) {
  return (
    <section className="relative bg-primaryBlue pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Text Content */}
        <div className="mb-8 md:mb-12 lg:mb-16 max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className={`${fonts.forum} text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] text-white leading-tight mb-3 md:mb-5`}
          >
            {pageTitle ? pageTitle : pageName}
          </motion.h1>
          {pageTitle2 && (
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className={`${fonts.instrument} text-white text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-tight mb-3 md:mb-5 max-w-6xl`}
            >
              {pageTitle2}
            </motion.h2>
          )}
          {pageDescription && (
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className={`${fonts.dm} text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl`}
            >
              {pageDescription}
            </motion.p>
          )}
        </div>

        {/* Team Image - With negative margin to overlap into next section */}
        {imgSrc && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative w-full mb-[-8rem] md:mb-[-12rem] lg:mb-[-16rem] xl:mb-[-25rem] z-10"
          >
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9]">
              <Image
                src={decodeURI(imgSrc)}
                alt={pageName || "Banner"}
                fill
                className="object-cover shadow-2xl rounded-sm"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
