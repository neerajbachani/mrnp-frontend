"use client";

import { ContentBlock } from "@/types/Service";
import { fonts } from "@/utils/fonts";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface ServiceContentProps {
  content: ContentBlock[];
  image1: string;
  image2: string;
  allServices?: { name: string; slug: string }[];
  currentSlug?: string;
}

export default function ServiceContent({
  content,
  image1,
  image2,
  allServices = [],
  currentSlug,
}: ServiceContentProps) {
  return (
    <section className="mt-20 pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-3">
          {/* Left Sidebar - Services List */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <nav className="border border-gray-300">
                {allServices.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.slug}`}
                    className={`block px-6 py-5 text-base md:text-lg transition-colors border-b border-gray-300 last:border-b-0 ${
                      service.slug === currentSlug
                        ? "bg-primaryBlue text-white"
                        : "bg-white text-primaryBlue hover:bg-gray-50"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3 space-y-12 md:space-y-16 px-0 md:px-10">
            {content.map((item, index) => {
              // Split content into paragraphs and bullet points
              const contentParts = item.content.split(/(?=^[-*•]|\n[-*•])/m);
              const textContent = contentParts[0]; // Text before bullet points
              const bulletContent = contentParts.slice(1).join(''); // Bullet points

              return (
                <div key={index}>
                  {/* Section Title */}
                  <h2
                    className={`${fonts.forum} text-2xl md:text-3xl lg:text-5xl text-primaryBlue mb-6 md:mb-8`}
                  >
                    {item.title}
                  </h2>

                  {/* Text Content (paragraphs before bullets) */}
                  <div
                    className={`${fonts.dm} text-[#191919] text-base md:text-lg leading-relaxed mb-8 md:mb-10`}
                  >
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-4">{children}</p>,
                      }}
                    >
                      {textContent}
                    </ReactMarkdown>
                  </div>

                  {/* Image before bullet points */}
                  {index === 0 && image1 && (
                    <div className="mb-8 md:mb-10">
                      <Image
                        src={image1}
                        alt={item.title}
                        className="w-full h-auto"
                        width={800}
                        height={350}
                      />
                    </div>
                  )}

                  {index === 1 && image2 && (
                    <div className="mb-8 md:mb-10">
                      <Image
                        src={image2}
                        alt={item.title}
                        className="w-full h-[350px] object-cover "
                        width={800}
                        height={350}
                      />
                    </div>
                  )}

                  {/* Bullet Points Content */}
                  {bulletContent && (
                    <div
                      className={`${fonts.dm} text-[#191919] text-base md:text-lg leading-relaxed`}
                    >
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-4">{children}</p>,
                          ul: ({ children }) => (
                            <ul className="space-y-3 md:space-y-4 pl-6 list-disc marker:text-black">
                              {children}
                            </ul>
                          ),
                          li: ({ children }) => (
                            <li className="text-[#6B7280]">
                              <span
                                className={`${fonts.instrument} font-medium text-black text-lg`}
                              >
                                {children}
                              </span>
                            </li>
                          ),
                          h3: ({ children }) => (
                            <h3 className={` ${fonts.instrument} text-xl md:text-2xl font-medium text-[#061143] mt-6 mb-3`}>
                              {children}
                            </h3>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-xl md:text-2xl font-semibold text-primaryBlue mt-6 mb-3">
                              {children}
                            </h2>
                          ),
                          h1: ({ children }) => (
                            <h1 className="text-xl md:text-2xl font-semibold text-primaryBlue mt-6 mb-3">
                              {children}
                            </h1>
                          ),
                        }}
                      >
                        {bulletContent}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}