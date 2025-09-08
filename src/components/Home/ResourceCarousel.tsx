"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Container from "../Container";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import ResourceCard from "../ResourceCard";
import { ResourceContent } from "@/types/Resource";

interface ResourceCarouselProps {
  resources: ResourceContent[];
}

export default function ResourceCarousel({ resources }: ResourceCarouselProps) {
  return (
    <section className="bg-white flex justify-center items-center py-10 md:py-20">
      <Container className="">
        <Swiper
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          pagination={{
            el: ".swiper-custom-pagination",
            clickable: true,
          }}
          spaceBetween={90}
        >
          {resources.map((resource, index) => (
            <SwiperSlide key={index}>
              <ResourceCard backgroundColor="offWhite" resource={resource} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-custom-pagination flex justify-center items-center space-x-1 py-6" />
      </Container>
    </section>
  );
}
