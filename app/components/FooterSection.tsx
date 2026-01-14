'use client';

import Image from "next/image";
import { getImagePath } from '../utils/basePath';

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
          
 <div className="cta-container relative flex flex-col items-start gap-4">

              {/* Claim Bonus Button */}
              <button className="claim-bonus-btn flex h-14 w-[300px] items-center justify-center gap-2 rounded-lg bg-[#212671] px-6 pb-1 shadow-[inset_0_-6px_0_0_#323AAA] transition-transform hover:scale-105">
                <span className="font-[family-name:var(--font-kanit)] text-lg font-bold leading-5 tracking-[0.1px] text-white">
                  Claim your 5$  Bonus
                </span>
              </button>

              {/* App Store Button */}
              <a href="#" className="app-store-btn block">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/438b846973bb42948f0191d1296856ce486088f1?width=291"
                  alt="Download on the App Store"
                  width={145}
                  height={47}
                  className="h-auto w-[145px] rounded-lg"
                />
              </a>

         
          
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
        <div className="relative -mx-6 -mb-4 h-[400px] w-screen flex-shrink-0 md:mx-0 md:mb-0 md:h-auto md:w-auto md:flex-1 lg:h-auto">
          <img
            src={getImagePath('/images/rightimage1.png')}
            alt="Download VYBS"
            className="h-full w-full object-cover lg:object-contain"
          />
        </div>
      </div>
    </section>
  );
}
