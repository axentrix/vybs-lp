'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { getImagePath } from '../utils/basePath';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: getImagePath('/images/testimonials/image-1.jpg'),
      quote: "I've made good money playing this app.",
      name: "Pamela B.",
      rotation: "rotate-[3.235deg]"
    },
    {
      image: getImagePath('/images/testimonials/image-2.jpg'),
      quote: "What I like most is that you don't wait forever to get your gift card.",
      name: "Daniel T.",
      rotation: "rotate-[3.531deg]"
    },
    {
      image: getImagePath('/images/testimonials/image-3.jpg'),
      quote: "I was honestly skeptical at first, but the cashout was fast and legit — no tricks.",
      name: "Alex P.",
      rotation: "rotate-[-4.151deg]"
    },
    {
      image: getImagePath('/images/testimonials/image-4.jpg'),
      quote: "Was expecting delays, but the payout came way faster than I thought.",
      name: "Nina T.",
      rotation: "rotate-[2.081deg]"
    },
    {
      image: getImagePath('/images/testimonials/image.jpg'),
      quote: "No scam vibes here — earned, cashed out, done.",
      name: "Jordan R.",
      rotation: "rotate-[4.435deg]"
    }
  ];

  return (
    <section className="testimonials-section flex w-full flex-col items-center gap-10 px-6 py-16 md:px-11 lg:py-20">
      {/* Section Title */}
      <h2 className="text-center font-[family-name:var(--font-kanit)] text-[36px] font-bold leading-tight tracking-tight text-[#191C45] md:text-[48px] lg:text-[58px] lg:leading-[64px]">
        Happy gamers on VYBS
      </h2>

      {/* Testimonials Carousel */}
      <div className="testimonials-scroll relative w-full max-w-[1200px]">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex items-stretch">
              <div
                className={`testimonial-card flex w-full flex-col gap-3 rounded-[17px] bg-white p-[17px] shadow-lg transition-transform hover:scale-105 ${testimonial.rotation}`}
              >
                {/* Testimonial Image */}
                <div className="testimonial-image h-[200px] w-full overflow-hidden rounded-[18px] md:h-[278px]">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Testimonial Quote */}
                <p className="font-[family-name:var(--font-kanit)] text-[18px] font-normal leading-[28px] tracking-tight text-[#442248] md:text-[24px]">
                  {testimonial.quote}
                </p>

                {/* Testimonial Name - Handwritten Style */}
                <p className="font-[family-name:var(--font-caveat)] text-[24px] font-normal leading-[49px] tracking-tight text-[#442248] md:text-[32px]">
                  {testimonial.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
