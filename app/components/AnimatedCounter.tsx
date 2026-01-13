'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter() {
  const [count, setCount] = useState(36900000);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start animation when element enters viewport
          setHasStarted(true);
        } else {
          // Reset animation when element leaves viewport
          setHasStarted(false);
          setCount(36900000);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const target = 37000000;
    const startValue = 36900000;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      
      const currentValue = startValue + (target - startValue) * easeOutQuad;
      setCount(Math.floor(currentValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted]);

  const formattedCount = count.toLocaleString('en-US');

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-3">
      <h1 className="font-[family-name:var(--font-kanit)] text-5xl font-bold leading-none text-[#1E2247] md:text-7xl lg:text-8xl h-20 md:h-28 lg:h-32 flex items-center">
        ${formattedCount}
      </h1>

      {/* Subtitle */}
      <p className="font-[family-name:var(--font-kanit)] text-lg font-medium text-[#2A2D5B] md:text-xl">
        Awarded in gift cards
      </p>
    </div>
  );
}
