'use client';

import { getImagePath } from '../utils/basePath';

export default function HeroRightImage() {
  // Call at render time so it evaluates in the browser
  const rightImageSrc = getImagePath('/images/rightimage.png');
  const progressBarSrc = getImagePath('/images/progressbar.svg');

  return (
    <div className="relative h-auto w-full lg:h-[668px] lg:w-auto flex-shrink-0">
      <img
        src={rightImageSrc}
        alt="Hero image"
        className="h-full w-full object-cover"
      />

      {/* Progress Bar - Positioned under middle of image vertically */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8">
        <div className="relative">
          <img
            src={progressBarSrc}
            alt="Progress bar"
            className="w-auto"
          />
          {/* Bright white shadow beneath progress bar */}
          <div className="absolute left-0 right-0 top-full mt-2 h-12 w-full bg-gradient-to-b from-white/60 to-transparent blur-lg" />
        </div>
      </div>
    </div>
  );
}
