'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { getImagePath } from '../utils/basePath';
const features = [
  {
    id: 1,
    subtitle: 'Turn your playtime into',
    title: 'PAYTIME',
    image:  getImagePath('/images/image1.png'),
    alt: 'Person earning rewards while gaming',
    textAlign: 'md:items-end md:text-right',
  },
  {
    id: 2,
    subtitle: 'Get Paid to',
    title: 'PLAY GAMES',
    image:  getImagePath('/images/image2.png'),
    alt: 'Woman with payment cards and rewards',
    textAlign: 'md:items-start md:text-left',
  },
  {
    id: 3,
    subtitle: 'Enjoy a',
    title: '5$ SIGNUP BONUS',
   image:  getImagePath('/images/image3.png'),
    alt: 'Person celebrating signup bonus',
    textAlign: 'md:items-end md:text-right',
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section flex w-full flex-col items-center gap-0 px-6 py-4 md:px-6 lg:py-8">
      <div className="w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="features-swiper"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id}>
              <div className="feature-row flex w-full max-w-[1200px] flex-col-reverse items-center justify-center gap-8 px-6 md:flex-row md:gap-12 md:px-11 lg:gap-16 mx-auto">
                <div className={`feature-text flex flex-col items-start justify-center gap-6 ${feature.textAlign}`}>
                  <h2 className="text-heading w-full max-w-[556px] font-[family-name:var(--font-kanit)] text-[28px] font-bold leading-[1.15] text-[#191C45] md:text-[36px] lg:text-[46px] lg:leading-[46px]">
                    <span className="block text-[22px] md:text-[26px] lg:text-[32px]">
                      {feature.subtitle}
                    </span>
                    <span className="block text-[32px] md:text-[40px] lg:text-[46px]">
                      {feature.title}
                    </span>
                  </h2>
                </div>
                <div className="feature-image flex-shrink-0">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="h-auto w-[340px] md:w-[420px] lg:w-[450px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
