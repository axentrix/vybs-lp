'use client';

import { getImagePath } from '../utils/basePath';

export default function HowItWorksSection() {
  return (
    <section className="how-it-works-section flex w-full flex-col items-center gap-8 px-6 py-6 md:px-11 lg:py-8">
      {/* Section Title */}
      <h2 className="text-center font-[family-name:var(--font-kanit)] text-[36px] font-bold leading-tight text-[#191C45] md:text-[48px] lg:text-[58px] lg:leading-[64px]">
        How it works
      </h2>

      {/* Steps Container */}
      <div className="flex w-full max-w-[1200px] flex-col items-stretch gap-11 md:flex-row md:justify-center">
        
        {/* Step 1 - Install VYBS */}
        <div className="step-card flex flex-1 flex-col gap-6">
          {/* Card Image Area */}
          <div className="card-image relative flex h-[200px] w-full flex-col overflow-hidden rounded-[17px] bg-[#5E69FF] p-[17px]">
            {/* Number Badge */}
            <div className="relative z-10 font-[family-name:var(--font-kanit)] text-[88px] font-bold leading-[88px] text-white">
              1
            </div>

            {/* Background Image */}
            <img
              src={getImagePath('/images/Imageb1.png')}
              alt="Install VYBS"
              className="absolute inset-0 object-contain transform"
            />
          </div>

          {/* Card Description */}
          <p className="text-center font-[family-name:var(--font-kanit)] text-[24px] font-medium leading-normal text-black md:text-[28px] lg:text-[32px]">
            Install VYBS and get a $5 bonus
          </p>
        </div>

        {/* Step 2 - Play Games */}
        <div className="step-card flex flex-1 flex-col gap-6">
          {/* Card Image Area */}
          <div className="card-image relative flex h-[200px] w-full flex-col overflow-hidden rounded-[17px] bg-[#3CD98A] p-[17px]">
            {/* Number Badge */}
            <div className="relative z-10 font-[family-name:var(--font-kanit)] text-[88px] font-bold leading-[88px] text-white">
              2
            </div>

            {/* Background Image */}
            <img
              src={getImagePath('/images/Imageb2.png')}
              alt="Play Games"
              className="absolute inset-0 object-contain"
            />
          </div>

          {/* Card Description */}
          <p className="text-center font-[family-name:var(--font-kanit)] text-[24px] font-medium leading-normal text-black md:text-[28px] lg:text-[32px]">
            Install & play games. Complete milestones daily.
          </p>
        </div>

        {/* Step 3 - Get Gift Cards */}
        <div className="step-card flex flex-1 flex-col gap-6">
          {/* Card Image Area */}
          <div className="card-image relative flex h-[200px] w-full flex-col overflow-hidden rounded-[17px] bg-gradient-to-b from-[#F5438E] to-[#FED846] p-[17px]">
            {/* Number Badge */}
            <div className="relative z-10 font-[family-name:var(--font-kanit)] text-[88px] font-bold leading-[88px] text-white">
              3
            </div>

            {/* Background Image */}
            <img
              src={getImagePath('/images/Imageb3.png')}
              alt="Select Gift Card"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Card Description */}
          <p className="text-center font-[family-name:var(--font-kanit)] text-[24px] font-medium leading-normal text-black md:text-[28px] lg:text-[32px]">
            Select your favorite gift card and cashout instantly
          </p>
        </div>
      </div>

      {/* Decorative Stars Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Left Star */}
        <div className="absolute left-[10%] top-[5%] h-12 w-12 opacity-20">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" fill="white"/>
          </svg>
        </div>

        {/* Top Right Star */}
        <div className="absolute right-[15%] top-[8%] h-16 w-16 opacity-15">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" fill="white"/>
          </svg>
        </div>

        {/* Bottom Left Star */}
        <div className="absolute bottom-[10%] left-[5%] h-20 w-20 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" fill="white"/>
          </svg>
        </div>

        {/* Bottom Right Star */}
        <div className="absolute bottom-[15%] right-[8%] h-14 w-14 opacity-12">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" fill="white"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
