import Image from "next/image";
import Header from "./components/Header";
import AnimatedCounter from "./components/AnimatedCounter";
import GamesSection from "./components/GamesSection";
import FeaturesSection from "./components/FeaturesSection";
import GiftCardsSection from "./components/GiftCardsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F4FF' }}>
      <Header />
      <section className="hero-section relative flex w-full overflow-hidden h-[668px]">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#B3B9FF] via-[#6B75FF] to-[#4A55ED]"
             style={{ background: 'radial-gradient(30.77% 49.76% at 73.21% 46.65%, #B3B9FF 0%, #4A55ED 100%)' }} />

        {/* Decorative Wave SVG */}
        <img
          src="/images/path.svg"
          alt=""
          className="absolute inset-x-0 bottom-0 w-screen"
          style={{ height: '546px', objectFit: 'cover' }}
        />

        {/* Decorative Glow - Hidden on mobile */}
        <img
          src="/images/heroglow.png"
          alt=""
          className="absolute right-0 top-0 hidden h-[668px] opacity-70 lg:block"
        />

        {/* Main Content Wrapper - Vertically centered with max-width */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-center px-6 py-0 md:px-11 h-auto lg:h-[668px] w-full">

          {/* Left Content - Max width 1200px */}
          <div className="left-content max-w-[1200px] flex flex-col items-start gap-6 w-full lg:w-auto">
            
            {/* Logo */}
            <div className="logo-container flex h-[61px] flex-col items-end justify-center py-[2.3px]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/0a06b2ab5e3ae5c4412dba9e104b75837a78fdb9?width=298"
                alt="VYBS logo"
                width={149}
                height={56}
                priority
                className="h-auto w-[120px] md:w-[149px]"
              />
            </div>

            {/* Heading */}
            <h1 className="heading max-w-[598px] font-[family-name:var(--font-kanit)] text-[36px] font-bold uppercase leading-[1.185] tracking-[-0.25px] text-white md:text-[44px] lg:text-[54px] lg:leading-[64px]">
              Play games you love.
              <br />
              Earn rewards fast.
            </h1>

            {/* CTA Container */}
            <div className="cta-container flex flex-row items-center gap-2 rounded-xl bg-black/[0.46] p-1 backdrop-blur-[2.3px] md:gap-2 md:px-6 md:py-3">
              
              {/* Signup Bonus Button */}
              <div className="signup-bonus-btn flex items-center gap-[2px] rounded-full bg-black/[0.46] px-1 py-1 backdrop-blur-[2.3px] md:px-2 md:py-2">
                <span className="text-center font-[family-name:var(--font-kanit)] text-sm  tracking-[0.46px] text-white md:text-base">
                  Get your signup bonus
                </span>
                
                {/* Dollar Badge */}
                <div className="dollar-badge flex items-center gap-[-4.6px]">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/298d0991407b0c862d092154ab9de9562db7e7c5?width=46"
                    alt=""
                    width={23}
                    height={23}
                    className="h-auto w-5 self-stretch overflow-hidden md:w-6"
                  />
                  <div className="flex items-center">
                    <span 
                      className="font-[family-name:var(--font-kanit)] text-base font-extrabold leading-normal tracking-[-0.5px] text-[#EFF8CE] md:text-[17px]" 
                      style={{ WebkitTextStroke: '1px rgba(0, 0, 0, 1)' }}>
                      $
                    </span>
                    <span 
                      className="font-[family-name:var(--font-kanit)] text-base font-extrabold leading-normal tracking-[-0.5px] text-white md:text-[17px]" 
                      style={{ WebkitTextStroke: '1px rgba(0, 0, 0, 1)' }}>
                      5
                    </span>
                  </div>
                </div>
              </div>

              {/* Google Play Button */}
              <a href="#" className="google-play-btn block">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dd38b293003262e4cbe2755a924afb4d8099fc44?width=400"
                  alt="Get it on Google Play"
                  width={200}
                  height={64}
                  className="h-auto w-[160px] rounded-xl md:w-[200px]"
                />
              </a>
            </div>
          </div>

          {/* Right Image - 100% height */}
          <div className="relative h-auto w-full lg:h-[668px] lg:w-auto flex-shrink-0">
            <img
              src="/images/rightimage.png"
              alt="Hero image"
              className="h-full w-full object-cover"
            />

            {/* Progress Bar - Positioned under middle of image vertically */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8">
              <div className="relative">
                <img
                  src="/images/progressbar.svg"
                  alt="Progress bar"
                  className="w-auto"
                />
                {/* Bright white shadow beneath progress bar */}
                <div className="absolute left-0 right-0 top-full mt-2 h-12 w-full bg-gradient-to-b from-white/60 to-transparent blur-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section flex w-full justify-center px-6 py-12 md:px-11">
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
            <h2 className="font-[family-name:var(--font-kanit)] text-2xl font-bold uppercase tracking-wide text-[#2A2D5B] md:text-3xl">
              1M+ DOWNLOADS
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
