'use client';

import { useRef, useEffect, useState } from 'react';

export default function GamesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRowLeftRef = useRef<HTMLDivElement>(null);
  const scrollRowRightRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef<'up' | 'down'>('down');
  const speedRef = useRef(1.5);
  const isInViewportRef = useRef(false);


  useEffect(() => {
    if (!scrollRowLeftRef.current || !scrollRowRightRef.current) return;

    const leftContainer = scrollRowLeftRef.current;
    const rightContainer = scrollRowRightRef.current;
    const itemWidth = 152; // 140px + 12px gap

    // Calculate single set width based on cloned content
    const leftSingleSetWidth = (leftContainer.scrollWidth / 4);
    const rightSingleSetWidth = (rightContainer.scrollWidth / 4);

    let leftPosition = -leftSingleSetWidth;
    let rightPosition = 0;
    let animationId: number | null = null;

    const animate = () => {
      if (!isInViewportRef.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const speed = speedRef.current;
      const direction = scrollDirectionRef.current;

      // Adjust direction based on scroll
      if (direction === 'up') {
        // Scroll up: reverse directions (left goes left, right goes right)
        leftPosition -= speed;
        rightPosition += speed;

        if (leftPosition <= -leftSingleSetWidth * 2) {
          leftPosition = -leftSingleSetWidth;
        }
        if (rightPosition >= rightSingleSetWidth) {
          rightPosition = 0;
        }
      } else {
        // Scroll down (normal): left goes right, right goes left
        leftPosition += speed;
        rightPosition -= speed;

        if (leftPosition >= leftSingleSetWidth) {
          leftPosition = -leftSingleSetWidth;
        }
        if (rightPosition <= -rightSingleSetWidth) {
          rightPosition = 0;
        }
      }

      leftContainer.style.transform = `translateX(${leftPosition}px)`;
      rightContainer.style.transform = `translateX(${rightPosition}px)`;

      animationId = requestAnimationFrame(animate);
    };

    // Handle scroll direction detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirectionRef.current = currentScrollY < lastScrollYRef.current ? 'up' : 'down';
      lastScrollYRef.current = currentScrollY;
      speedRef.current = 1.5; // Normal speed when scrolling
    };

    // Handle viewport entry/exit
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewportRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          // On enter/enterback: restart with fast speed
          leftPosition = -leftSingleSetWidth;
          rightPosition = 0;
          speedRef.current = 3; // Fast speed on enter
          scrollDirectionRef.current = 'down'; // Reset to normal direction
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const gameIcons = [
    'https://api.builder.io/api/v1/image/assets/TEMP/9443229978948534816febfe1ea56d27218096bb?width=280',
    'https://api.builder.io/api/v1/image/assets/TEMP/1dc401952d5a1b9946350892d3eb638cc81a494d?width=280',
    'https://api.builder.io/api/v1/image/assets/TEMP/3e22c95232f69d95e6fbe34e8dce4ef18c84b7c2?width=280',
    'https://api.builder.io/api/v1/image/assets/TEMP/d7a3bc1be946200d961c99f56682a56c5c15485a?width=280',
    'https://api.builder.io/api/v1/image/assets/TEMP/ccfd0f3b068960d6e55d5f836516ca221d14acaf?width=280',
    'https://api.builder.io/api/v1/image/assets/TEMP/5681678c57ee882adf2e5052721a01c97862bdeb?width=280',
    'https://api.builder.io/api/v1/image/assets/TEMP/6146e3f60ec1ba4ed43fb40268737d2d6d81fe9b?width=280',
    'https://api.builder.io/api/v1/image/assets/TEMP/8143093ee609788f038a9002f93a8e5ec7ee787d?width=280',
  ];

  return (
    <section
      ref={sectionRef}
      className="games-section flex w-full flex-col items-center gap-11 px-6 py-16 md:px-11"
    >
      {/* Section Title */}
      <h2 className="max-w-[1440px] text-center font-[family-name:var(--font-kanit)] text-[32px] font-bold uppercase leading-tight tracking-[-0.25px] text-[#191C45] md:text-[42px] lg:text-[54px] lg:leading-[64px]">
        100+ of your favorite mobile games
      </h2>

      {/* Games Grid Container */}
      <div className="flex w-full max-w-[1200px] flex-col gap-[34px]">

        {/* First Row - Left aligned, Scroll Right */}
        <div className="scroll-row-left w-full overflow-hidden">
          <div ref={scrollRowLeftRef} className="scroll-content flex w-max gap-3">
            {[...gameIcons, ...gameIcons, ...gameIcons, ...gameIcons].map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className="game-icon h-[140px] w-[140px] flex-shrink-0 rounded-[5.594px] object-cover"
              />
            ))}
          </div>
        </div>

        {/* Second Row - Scroll Left, starts from right */}
        <div className="scroll-row-right w-full overflow-hidden">
          <div ref={scrollRowRightRef} className="scroll-content flex w-max gap-3">
            {[...gameIcons, ...gameIcons, ...gameIcons, ...gameIcons].map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className="game-icon h-[140px] w-[140px] flex-shrink-0 rounded-[5.594px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
