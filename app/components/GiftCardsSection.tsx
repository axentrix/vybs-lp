'use client';

import { useRef, useEffect, useState } from 'react';

interface GiftCard {
  src: string;
  alt: string;
  backAmount?: string;
  backColor?: string;
}

export default function GiftCardsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});
  const [flippedCardIndex, setFlippedCardIndex] = useState<{ [key: number]: number }>({});
  const [flippedAmounts, setFlippedAmounts] = useState<{ [key: number]: string }>({});

  const giftCardAmounts = ['$40', '$60', '$100', '$200'];

  const getRandomAmount = () => {
    return giftCardAmounts[Math.floor(Math.random() * giftCardAmounts.length)];
  };

  const allCards: GiftCard[] = [
    {
      src: '/images/cards/card-1.png',
      alt: 'Gift Card 1'
    },
    {
      src: '/images/cards/card-2.png',
      alt: 'Gift Card 2'
    },
    {
      src: '/images/cards/card-3.png',
      alt: 'Gift Card 3'
    },
    {
      src: '/images/cards/card-4.png',
      alt: 'Gift Card 4'
    },
    {
      src: '/images/cards/card-5.png',
      alt: 'Gift Card 5'
    },
    {
      src: '/images/cards/card-6.png',
      alt: 'Gift Card 6'
    },
    {
      src: '/images/cards/card.png',
      alt: 'Gift Card 7'
    },
    {
      src: '/images/cards/amazon.png',
      alt: 'Amazon Gift Card'
    },
    {
      src: '/images/cards/apple.png',
      alt: 'Apple Gift Card'
    },
    {
      src: '/images/cards/bbw.png',
      alt: 'BBW Gift Card'
    },
    {
      src: '/images/cards/doordash.png',
      alt: 'DoorDash Gift Card'
    },
    {
      src: '/images/cards/gamestop.png',
      alt: 'GameStop Gift Card'
    },
    {
      src: '/images/cards/google.png',
      alt: 'Google Gift Card'
    },
    {
      src: '/images/cards/nike.png',
      alt: 'Nike Gift Card'
    },
    {
      src: '/images/cards/paypal.png',
      alt: 'PayPal Gift Card'
    },
    {
      src: '/images/cards/pink.png',
      alt: 'Pink Gift Card'
    },
    {
      src: '/images/cards/playstation.png',
      alt: 'PlayStation Gift Card'
    },
    {
      src: '/images/cards/roblox.png',
      alt: 'Roblox Gift Card'
    },
    {
      src: '/images/cards/venmo.png',
      alt: 'Venmo Gift Card'
    },
    {
      src: '/images/cards/visa.png',
      alt: 'Visa Gift Card'
    },
  ];

  // Only show first 10 cards
  const visibleCards = allCards.slice(0, 10);
  const hiddenCards = allCards.slice(10);

  // Random flip animation on mount and at intervals
  useEffect(() => {
    const startRandomFlips = () => {
      const flipRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * visibleCards.length);
        const cardElement = cardsRef.current[randomIndex];

        if (cardElement) {
          // Pick a random card from the hidden rows to show when flipped
          const randomHiddenIndex = Math.floor(Math.random() * hiddenCards.length);
          const randomAmount = getRandomAmount();

          // Start flip
          setFlipped((prev) => ({ ...prev, [randomIndex]: true }));
          setFlippedCardIndex((prev) => ({ ...prev, [randomIndex]: randomHiddenIndex }));
          setFlippedAmounts((prev) => ({ ...prev, [randomIndex]: randomAmount }));

          // Flip back after 2500ms (800ms animation + 1700ms pause)
          setTimeout(() => {
            setFlipped((prev) => ({ ...prev, [randomIndex]: false }));
          }, 2500);
        }
      };

      // Initial flip after 500ms
      const initialTimer = setTimeout(flipRandomCard, 500);

      // Then flip every 2-4 seconds randomly
      const intervalId = setInterval(() => {
        flipRandomCard();
      }, 2000 + Math.random() * 2000);

      return () => {
        clearTimeout(initialTimer);
        clearInterval(intervalId);
      };
    };

    return startRandomFlips();
  }, [visibleCards.length, hiddenCards.length]);

  return (
    <section className="gift-cards-section flex w-full flex-col items-center gap-11 px-6 py-16 md:px-11 lg:py-20">

      {/* Section Title */}
      <h2 className="max-w-[1200px] text-center font-[family-name:var(--font-kanit)] text-[36px] font-bold uppercase leading-tight tracking-normal text-[#191C45] md:text-[52px] lg:text-[64px] lg:leading-[88px]">
        Multiple Awesome Gift Cards
      </h2>

      {/* Gift Cards Grid */}
      <div className="flex w-full max-w-[1092px] flex-wrap items-start justify-center gap-3 md:gap-3">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="gift-card-wrapper perspective h-[100px] w-[150px] flex-shrink-0 md:h-[127px] md:w-[202px]"
            style={{
              perspective: '1000px',
            }}
          >
            <div
              className="gift-card-inner relative h-full w-full transition-transform duration-700"
              style={{
                transformStyle: 'preserve-3d',
                transform: flipped[index] ? 'rotateY(360deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Card Front */}
              <div
                className="gift-card-face absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg md:rounded-[8.977px]"
                style={{
                  backfaceVisibility: 'hidden',
                }}
              >
                <img
                  src={flipped[index] && flippedCardIndex[index] !== undefined ? hiddenCards[flippedCardIndex[index]].src : card.src}
                  alt={flipped[index] && flippedCardIndex[index] !== undefined ? hiddenCards[flippedCardIndex[index]].alt : card.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Back */}
              <div
                className="gift-card-face absolute inset-0 flex items-end justify-end overflow-hidden rounded-lg p-4 md:rounded-xl md:p-6"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  backgroundColor: card.backColor || '#1a1a2e',
                  boxShadow: '1px 2px 2px 0 rgba(0, 0, 0, 0.06)',
                }}
              >
                {flippedAmounts[index] ? (
                  <div className="font-[family-name:var(--font-kanit)] text-[28px] font-bold leading-6 tracking-tight text-white md:text-[44px] md:leading-6">
                    {flippedAmounts[index]}
                  </div>
                ) : card.backAmount ? (
                  <div className="font-[family-name:var(--font-kanit)] text-[28px] font-bold leading-6 tracking-tight text-white md:text-[44px] md:leading-6">
                    {card.backAmount}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full border-4 border-white/30 md:h-12 md:w-12" />
                    <span className="text-[10px] font-bold text-white/50 md:text-xs">GIFT CARD</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
