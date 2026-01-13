'use client';

import { getImagePath } from '../utils/basePath';

export default function HeroImages() {
  // Call at render time so it evaluates in the browser
  const pathSvgSrc = getImagePath('/images/path.svg');
  const heroGlowSrc = getImagePath('/images/heroglow.png');
  

  return (
    <>
      {/* Decorative Wave SVG */}
      <img
        src={pathSvgSrc}
        alt=""
        className="absolute inset-x-0 bottom-0 w-screen"
        style={{ height: '546px', objectFit: 'cover' }}
      />

      {/* Decorative Glow - Hidden on mobile */}
      <img
        src={heroGlowSrc}
        alt=""
        className="absolute right-0 top-0 hidden h-[668px] opacity-70 lg:block"
      />
    </>
  );
}

