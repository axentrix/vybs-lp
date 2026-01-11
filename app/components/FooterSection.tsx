'use client';

import Image from "next/image";

export default function FooterSection() {
  return (
    <section className="footer-cta-section relative flex w-full overflow-hidden">
      {/* Background Gradient - matching hero */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(30.77% 49.76% at 73.21% 46.65%, #B3B9FF 0%, #4A55ED 100%)' }}
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col-reverse items-start justify-end px-6 py-2 md:flex-row md:px-11 lg:items-center lg:py-[44px]">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 lg:flex-1 lg:gap-6">
          
          {/* CTA Heading */}
          <h2 className="max-w-[600px] font-[family-name:var(--font-kanit)] text-[36px] font-bold uppercase leading-tight tracking-tight text-white md:text-[48px] lg:text-[58px] lg:leading-[64px]">
            download now
            <br />
            and GET your
            <br />
            $5 signup bonus
          </h2>

          {/* Download Button Container */}
          <div className="flex w-full items-center gap-4 rounded-xl bg-black/[0.46] p-3 backdrop-blur-[2.3px] md:w-fit md:px-6 md:py-3">
            
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

            {/* Dollar Badge */}
            <div className="dollar-badge flex items-center gap-[-8px]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/2dbc9267b1927fbdbae3cd6bf90b8e4fc57e0342?width=83"
                alt=""
                width={42}
                height={42}
                className="h-auto w-[35px] self-stretch overflow-hidden md:w-[42px]"
              />
              <div className="flex items-center">
                <span 
                  className="font-[family-name:var(--font-kanit)] text-[24px] font-extrabold leading-normal tracking-[-0.9px] text-[#EFF8CE] md:text-[30px]" 
                  style={{ WebkitTextStroke: '1px rgba(0, 0, 0, 1)' }}>
                  $
                </span>
                <span 
                  className="font-[family-name:var(--font-kanit)] text-[24px] font-extrabold leading-normal tracking-[-0.9px] text-white md:text-[30px]" 
                  style={{ WebkitTextStroke: '1x rgba(0, 0, 0, 1)' }}>
                  5
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="pt-8 lg:mt-auto lg:pt-6">
            <p className="max-w-[381px] font-[family-name:var(--font-kanit)] text-sm leading-6 tracking-tight text-[#D7DAFE] md:text-base">
              2025 VYBS. All Rights Reserved{' '}
              <a href="#" className="underline hover:text-white">
                Privacy Policy
              </a>
              {' | '}
              <a href="#" className="underline hover:text-white">
                Terms and Conditions
              </a>
              {' | '}
              <a href="#" className="underline hover:text-white">
                Cookie Policy
              </a>
            </p>
          </div>
        </div>

        {/* Right Image - Similar to Hero */}
        <div className="relative -mx-6 -mb-16 h-[400px] w-screen flex-shrink-0 md:mx-0 md:mb-0 md:h-auto md:w-auto md:flex-1 lg:h-auto">
          <img
            src="/images/rightimage1.png"
            alt="Download VYBS"
            className="h-full w-full object-cover lg:object-contain"
          />
        </div>
      </div>
    </section>
  );
}
