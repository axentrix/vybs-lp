import Image from "next/image";
import Header from "./components/Header";
import AnimatedCounter from "./components/AnimatedCounter";
import GamesSection from "./components/GamesSection";
import FeaturesSection from "./components/FeaturesSection";
import GiftCardsSection from "./components/GiftCardsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import { getImagePath } from './utils/basePath';
import FooterSection from "./components/FooterSection";
import HeroImages from "./components/HeroImages";
import HeroRightImage from "./components/HeroRightImage";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F4FF' }}>
      <Header />
      <section className="hero-section relative flex w-full overflow-hidden h-auto lg:h-[668px] pt-8 md:pt-0">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#B3B9FF] via-[#6B75FF] to-[#4A55ED]"
             style={{ background: 'radial-gradient(30.77% 49.76% at 73.21% 46.65%, #B3B9FF 0%, #4A55ED 100%)' }} />

        {/* Hero Background Images */}
        <HeroImages />

        {/* Main Content Wrapper - Vertically centered with max-width */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-center px-6 py-0 md:px-11 h-auto lg:h-[668px] w-full">

          {/* Left Content - Max width 1200px */}
          <div className="left-content max-w-[1200px] flex flex-col items-start gap-6 w-full lg:w-auto sm:mt-8 md:mt-8">

            {/* Logo - Top Left Corner (absolute on desktop >1200px, relative on mobile/tablet ≤1200px) */}
            <div className="logo-container relative xl:absolute xl:top-6 xl:left-6 xl:z-20 ">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/0a06b2ab5e3ae5c4412dba9e104b75837a78fdb9?width=298"
                alt="VYBS logo"
                width={123}
                height={47}
                priority
                className="h-[47px] w-[123px]"
              />
            </div>

            {/* Heading */}
            <h1 className="heading max-w-[598px] font-[family-name:var(--font-kanit)] text-[36px] font-bold leading-[1.185] tracking-[-0.25px] text-white md:text-[44px] lg:text-[54px] lg:leading-[64px]">
           Make Money Playing Games You would play anyway
            
            </h1>

            {/* CTA Container */}
            <div className="cta-container relative rounded-lg flex flex-col items-start gap-4 w-full lg:w-auto bg-[rgba(0,0,0,0.2)]">
<div className="relative flex flex-col items-center p-4 md:p-4 lg:p-4 w-full">
              {/* Claim Bonus Button */}
              <button className="claim-bonus-btn flex h-14 w-full max-w-[320px] items-center justify-center gap-2 rounded-lg bg-[#212671] px-2 pb-1 shadow-[inset_0_-6px_0_0_#323AAA] transition-transform hover:scale-105">
                <span className="font-[family-name:var(--font-kanit)] text-lg md:text-[24px] font-bold leading-5 tracking-[0.1px] text-white">
                  Claim your 5$  Bonus
                </span>
              </button>

              {/* App Store Button */}
              <a href="#" className="app-store-btn block hidden">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/438b846973bb42948f0191d1296856ce486088f1?width=291"
                  alt="Download on the App Store"
                  width={145}
                  height={47}
                  className="h-auto w-[145px] rounded-lg"
                />
              </a>
      
              {/* Bonus Badge */}
              <div className="bonus-badge absolute -right-2 -top-3 md:-right-8 md:-top-6">
                <Image
                   src={getImagePath('/images/bonusstar.svg')}

                  alt="Bonus Star Badge"
                  width={77}
                  height={77}
                  className="h-[77px] w-[77px] drop-shadow-[0.5px_1px_0_rgba(255,255,255,0.77)] animate-pulsate"
                />
              </div>
              </div>
            </div>
          </div>

          {/* Right Image - 100% height */}
          <HeroRightImage />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section flex w-full justify-center px-6 py-8 md:px-11">
        <div className="relative flex w-full max-w-[1200px] min-h-[480px] flex-col items-center justify-center gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#E8E9F5] to-[#D4D6E8] px-8 py-16">

          {/* Decorative Stars */}
          <div className="absolute left-[5%] top-[15%] h-16 w-16 opacity-30">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" fill="white"/>
            </svg>
          </div>
          <div className="absolute left-[15%] top-[10%] h-10 w-10 opacity-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" fill="white"/>
            </svg>
          </div>
          <div className="absolute right-[10%] top-[20%] h-12 w-12 opacity-25">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" fill="white"/>
            </svg>
          </div>
          <div className="absolute bottom-[15%] right-[5%] h-20 w-20 opacity-30">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" fill="white"/>
            </svg>
          </div>
          <div className="absolute bottom-[25%] left-[8%] h-8 w-8 opacity-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" fill="white"/>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">

            {/* Downloads */}
            <h2 className="font-[family-name:var(--font-kanit)] text-2xl font-bold uppercase tracking-wide text-[#2A2D5B] text-center md:text-3xl">
              1M+ DOWNLOADS
              <br /><span>5M+ players earning worldwide</span>
            </h2>

            {/* Star Rating Badge */}
            <div className="flex items-center gap-2 rounded-full bg-white/60 px-6 py-3 backdrop-blur-sm">
              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#FFCA00"
                    />
                  </svg>
                ))}
              </div>

              {/* Rating Text */}
              <span className="font-[family-name:var(--font-kanit)] text-lg font-semibold text-[#9CA3C0]">
                4.8/5
              </span>
            </div>

            {/* Large Amount - Animated Counter */}
            <AnimatedCounter />

            {/* Start Earning CTA Button */}
            <button className="start-earning-btn h-14 w-[300px] flex items-center justify-center gap-2 rounded-lg bg-[#5E69FF] px-6 pb-1 shadow-[inset_0_-6px_0_0_#4854EB] transition-transform hover:scale-105">
              <span className="font-[family-name:var(--font-kanit)] text-lg md:text-[24px] font-bold leading-5 tracking-[0.1px] text-white">
                Start Earning
              </span>
            </button>
          </div>
        </div>
      </section>

      <GamesSection />

      <FeaturesSection />

      <GiftCardsSection />

      <HowItWorksSection />

      <TestimonialsSection />

      <FooterSection />
    </div>
  );
}
