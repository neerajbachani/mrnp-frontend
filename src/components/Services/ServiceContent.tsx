import { ContentBlock } from "@/types/Service";
import Container from "../Container";
import { fonts } from "@/utils/fonts";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Heading from "../Heading";

interface ServiceContentProps {
  content: ContentBlock[];
  image1: string;
  image2: string;
}

export default function ServiceContent({
  content,
  image1,
  image2,
}: ServiceContentProps) {
  return (
    <section className="bg-white flex justify-center items-center  md:py-16">
      <Container className="flex flex-col justify-center items-center">
        {/* Content 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full py-8 ">
          {content.slice(0, 1).map((item, index) => (
            <div key={index} className="space-y-2 md:space-y-4">
              <Heading>{item.title}</Heading>
              <div
                className={`${fonts.inter} text-sm md:text-base 2xl:text-lg leading-tight md:!leading-normal  text-[#191919] lg:!leading`}
              >
                <ReactMarkdown
                  components={{
                    ul: ({ children }) => (
                      <ul className="text-sm md:text-lg text-[#191919] pl-7 list-disc space-y-4 mt-3">
                        {children}
                      </ul>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg md:text-xl font-semibold text-[#191919] mt-4">
                        {children}
                      </h3>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-lg md:text-xl font-semibold text-[#191919] mt-4">
                        {children}
                      </h2>
                    ),
                    h1: ({ children }) => (
                      <h1 className="text-lg md:text-xl font-semibold text-[#191919] mt-4">
                        {children}
                      </h1>
                    ),
                  }}
                >
                  {item.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          <div>
            <Image
              src={image1}
              alt="service"
              className="w-full h-auto"
              width={700}
              height={700}
            />
          </div>
        </div>

        {/* Content 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-16 ">
          <div className="relative">
            <Image
              className="md:sticky md:top-[5%]"
              src={image2}
              alt="service"
              width={550}
              height={550}
            />
          </div>
          <div className="space-y-6">
            {content.slice(1).map((item, index) => (
              <div key={index} className="space-y-2 md:space-y-4">
                <Heading>{item.title}</Heading>
                <div
                  className={`${fonts.inter} text-sm md:text-base 2xl:text-lg leading-tight md:!leading-normal !space-y-3  text-[#191919] lg:!leading`}
                >
                  <ReactMarkdown
                    components={{
                      ul: ({ children }) => (
                        <ul className="text-sm md:text-lg text-[#191919] pl-7 list-disc space-y-4">
                          {children}
                        </ul>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-lg md:text-xl font-semibold text-[#191919] mt-4">
                          {children}
                        </h3>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-lg md:text-xl font-semibold text-[#191919] mt-4">
                          {children}
                        </h2>
                      ),
                      h1: ({ children }) => (
                        <h1 className="text-lg md:text-xl font-semibold text-[#191919] mt-4">
                          {children}
                        </h1>
                      ),
                    }}
                  >
                    {item.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
