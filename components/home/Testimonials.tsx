"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    logo: "/logos/adp.svg",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    logo: "/logos/bayer.svg",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    logo: "/logos/reliance.png",
    quote:
      "Our employees gained practical skills immediately applicable to work. The customized learning paths exceeded our expectations.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-white">
      <Container className="max-w-[1200px]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[32px] font-bold leading-tight text-[#141B34] sm:text-[36px] lg:text-[40px]">
            Testimonials from{" "}
            <span className="text-[#2F7CF6]">Our Partners</span>
          </h2>

          <p className="mt-3 text-[16px] text-[#141B34] sm:text-[18px]">
            What <span className="text-[#2F7CF6]">Our Clients</span> Are Saying
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          className="mt-10 pb-12"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="min-h-[270px] rounded-3xl border border-gray-200 bg-white px-6 py-6 shadow-sm sm:px-8 lg:px-10">

                <Image
                  src={item.logo}
                  alt=""
                  width={70}
                  height={45}
                  className="mb-6 h-12 w-auto object-contain"
                />

                <p className="text-[15px] leading-7 text-gray-700 sm:text-[17px] sm:leading-9">
                  "{item.quote}"
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </section>
  );
}