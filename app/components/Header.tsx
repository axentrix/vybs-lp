'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get hero section element
      const heroSection = document.querySelector('.hero-section');
      
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Show header when hero section is out of viewport (top is above screen)
        setIsVisible(heroRect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex justify-center px-6 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mt-4 flex w-full max-w-[990px] items-center justify-between rounded-xl bg-white px-6 py-4 shadow-lg backdrop-blur-[18.7px]">
        {/* Logo */}
        <div className="flex flex-col items-start pb-2">
          <svg
            width="123"
            height="47"
            viewBox="0 0 123 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-[90px] md:w-[123px]"
          >
            <g clipPath="url(#clip0_logo)">
              <path
                d="M68.4805 45.782V15.0488H86.9354C88.2172 15.0488 90.5818 15.9144 91.6676 16.6443C95.8704 19.4718 96.0785 27.1249 91.8349 30.0384C94.0593 31.2086 95.6954 32.6397 95.9051 35.3059C96.3484 40.9518 93.7908 44.7007 88.1222 45.6131C81.5986 45.9886 75.0222 45.684 68.4805 45.782ZM77.2179 27.2516H83.7716C83.9722 27.2516 85.1515 26.7298 85.343 26.5624C86.4303 25.6184 86.3669 22.9357 85.2103 22.046C83.657 20.8516 79.1768 21.5951 77.2179 21.3749V27.2501V27.2516ZM77.2179 39.4544H83.9224C84.3281 39.4544 85.6355 38.9402 85.9628 38.6325C86.854 37.7956 86.9746 35.4883 86.3247 34.49C85.9809 33.9622 84.8182 33.2776 84.2225 33.2776H77.2179V39.4544Z"
                fill="#5E69FF"
              />
              <path
                d="M120.606 15.9523V23.4848C117.229 22.206 113.024 21.3102 109.421 22.0175C107.966 22.3025 106.777 23.2299 107.767 24.7998C108.439 25.8674 113.012 26.7587 114.394 27.2111C118.44 28.5351 121.817 30.5166 122.244 35.1794C123.222 45.8576 112.574 47.0971 104.435 45.9073C102.492 45.6223 100.308 45.1639 98.6101 44.2003V36.894C100.445 37.5424 102.255 38.2587 104.179 38.6312C105.901 38.966 111.467 39.5511 112.687 38.2406C113.541 37.3238 113.06 35.772 112.068 35.11C110.581 34.1192 107.587 33.5824 105.803 32.937C100.48 31.0143 97.28 28.2938 98.3236 22.0688C99.8934 12.7071 113.922 14.004 120.604 15.9523H120.606Z"
                fill="#5E69FF"
              />
              <path
                d="M9.27459 15.0488L16.2054 35.0857L23.5102 15.0488H32.7753L21.1592 45.7639L11.7537 45.7925L-0.216797 15.0488H9.27459Z"
                fill="#5E69FF"
              />
              <path
                d="M44.4517 15.0488L50.5546 26.4976L56.7299 15.0488H66.2213L55.2234 34.4071V45.782H46.1844V34.5579L35.1865 15.0488H44.4517Z"
                fill="#5E69FF"
              />
              <path
                d="M41.7061 8.30911C41.9926 8.01505 44.5457 7.1962 45.1836 6.89158C46.681 6.17679 47.5858 5.57359 48.3745 4.05653C48.9762 2.89989 49.3336 1.12799 49.979 0.0874642C50.1962 -0.263901 50.4691 -0.265409 50.7903 -0.0286522C51.1115 0.208105 51.9379 2.73703 52.2305 3.35079C53.0041 4.97189 53.7144 5.87821 55.3415 6.71816C56.2915 7.20827 58.2474 7.6863 58.9788 8.20355C59.3633 8.47499 59.4568 8.88969 59.0467 9.15661C57.0093 10.369 54.3899 11.028 53.0508 13.1031C52.2727 14.308 51.766 16.1025 50.9803 17.2094C50.8461 17.3979 50.7481 17.6014 50.4767 17.6165C50.1917 17.6165 50.0469 17.3194 49.9187 17.1144C48.4001 14.685 48.9023 12.4214 45.737 10.7491C45.0599 10.3917 41.6458 9.28328 41.5387 8.77508C41.5116 8.64841 41.6111 8.40411 41.7046 8.30911H41.7061Z"
                fill="#FFCA00"
              />
            </g>
            <defs>
              <clipPath id="clip0_logo">
                <rect width="122.524" height="46.4677" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Start Earning Button */}
        <button className="flex h-14 items-center justify-center gap-2 rounded-lg bg-[#5E69FF] px-6 pb-1 shadow-[inset_0_-6px_0_0_#4854EB] transition-transform hover:scale-105">
          {/* Download Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_icon)">
              <path
                d="M19 12V19H5V12H3V21H21V12H19ZM13 12.67L15.59 10.09L17 11.5L12 16.5L7 11.5L8.41 10.09L11 12.67V3H13V12.67Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_icon">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          
          {/* Button Text */}
          <span className="font-[family-name:var(--font-kanit)] text-lg font-bold leading-5 tracking-[0.1px] text-white">
            Start Earning
          </span>
        </button>
      </div>
    </header>
  );
}
