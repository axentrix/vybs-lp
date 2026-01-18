'use client';

import { getImagePath } from '../utils/basePath';

export default function HowItWorksSection() {
  return (
    <section className="how-it-works-section flex w-full flex-col items-center gap-8 px-6 py-6 md:px-11 lg:py-20 bg-[#E6E8FF]">
      {/* Section Title */}
      <h2 className="text-center font-[family-name:var(--font-kanit)] text-[36px] font-bold leading-tight text-[#191C45] md:text-[48px] lg:text-[58px] lg:leading-[64px]">
        How it works
      </h2>

      {/* Steps Container */}
      <div className="flex w-full max-w-[1200px] flex-col items-stretch gap-11 md:flex-row md:justify-center">
        
        {/* Step 1 - Install VYBS */}
        <div className="step-card flex flex-1 flex-col gap-4">
          {/* Card Image Area */}
          <div className="card-image relative flex h-[200px] w-full flex-col overflow-hidden rounded-[17px] bg-[#5E69FF] p-[17px]">
            {/* Number Badge */}
            <div className="relative z-10 font-[family-name:var(--font-kanit)] text-[88px] font-bold leading-[88px] text-white ">
              1
            </div>

            {/* Background Image */}
            <img
              src={getImagePath('/images/Imageb1.png')}
              alt="Install VYBS"
              className="absolute inset-0 w-full h-full object-contain object-center z-0"
            />
          </div>

          {/* Card Description */}
          <div>
          <p className="text-center font-[family-name:var(--font-kanit)] text-[14px] font-medium leading-normal text-black md:text-[18px] lg:text-[22px] mb-4">
          Install VYBS and get a

          </p>
          
          <h4 className="text-center font-[family-name:var(--font-kanit)] font-bold leading-tight text-[#191C45] p-0 m-0 text-[24px] md:text-[26px] lg:text-[32px] lg:leading-[24px]">$5 bonus</h4>
        </div></div>

        {/* Step 2 - Play Games */}
        <div className="step-card flex flex-1 flex-col gap-4 justify-center items-center flex">
          {/* Card Image Area */}
          <div className="card-image relative flex h-[200px] w-full flex-col overflow-hidden rounded-[17px] bg-[#3CD98A] p-[16px]">
            {/* Number Badge */}
            <div className="relative z-10 font-[family-name:var(--font-kanit)] text-[88px] font-bold leading-[88px] text-white ">
              2
            </div>

            {/* Background Image */}
            <img
              src={getImagePath('/images/Imageb2.png')}
              alt="Play Games"
              className="absolute inset-0 w-full h-full object-contain object-center z-0"
            />
          </div>

          {/* Card Description */} <div>
          <h4 className="text-center font-[family-name:var(--font-kanit)] font-bold leading-tight text-[#191C45] p-0 m-0 text-[24px] md:text-[26px] lg:text-[32px] lg:leading-[24px]">Choose a game</h4>
          <p className="text-center font-[family-name:var(--font-kanit)] text-[14px] font-medium leading-normal text-black md:text-[18px] lg:text-[22px] mt-4">
           Choose from over 100 games with a variety of game milestones and missionsChoose from over 100 games with a variety of game milestones and missions
          </p>
        </div></div>

        {/* Step 3 - Get Gift Cards */}
        <div className="step-card flex flex-1 flex-col gap-4">
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

          {/* Card Description */}<div>
          <h4 className="text-center font-[family-name:var(--font-kanit)] font-bold leading-tight text-[#191C45] p-0 m-0 text-[24px] md:text-[26px] lg:text-[32px] lg:leading-[24px]">Cashout your earnings</h4>
          <p className="text-center font-[family-name:var(--font-kanit)] text-[14px] font-medium leading-normal text-black md:text-[18px] lg:text-[22px] mt-4">
           Once hitting the rewads, select your favorite way to cashout
          </p>
        </div></div>
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
