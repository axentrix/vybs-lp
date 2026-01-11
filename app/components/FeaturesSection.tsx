export default function FeaturesSection() {
  return (
    <section className="features-section flex w-full flex-col items-center gap-0 px-6 py-16 md:gap-[-44px] md:px-11 lg:py-20">
      
      {/* Feature 1 - Turn your playtime into PAYTIME */}
      <div className="feature-row flex w-full max-w-[1200px] flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-12 lg:gap-16">
        <div className="feature-text flex flex-col items-start justify-center gap-6 md:items-end">
          <h2 className="text-heading w-full max-w-[556px] font-[family-name:var(--font-kanit)] text-right text-[28px] font-bold leading-[1.15] text-[#191C45] md:text-[36px] lg:text-[46px] lg:leading-[46px]">
            <span className="block text-[22px] md:text-[26px] lg:text-[32px]">
              Turn your playtime into
            </span>
            <span className="block text-[32px] md:text-[40px] lg:text-[46px]">
              PAYTIME
            </span>
          </h2>
        </div>
        <div className="feature-image flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/66391d4cd30f2c359fcd4971107803402281d94c?width=699"
            alt="Person earning rewards while gaming"
            className="h-auto w-[280px] md:w-[320px] lg:w-[350px]"
          />
        </div>
      </div>

      {/* Feature 2 - Get Paid to PLAY GAMES */}
      <div className="feature-row flex w-full max-w-[1200px] flex-col-reverse items-center justify-center gap-8 md:flex-row-reverse md:gap-12 lg:gap-16">
        <div className="feature-text flex flex-col items-start justify-center gap-6">
          <h2 className="text-heading w-full max-w-[556px] font-[family-name:var(--font-kanit)] text-left text-[28px] font-bold leading-[1.15] text-[#191C45] md:text-[36px] lg:text-[46px] lg:leading-[46px]">
            <span className="block text-[22px] md:text-[26px] lg:text-[32px]">
              Get Paid to
            </span>
            <span className="block text-[32px] md:text-[40px] lg:text-[46px]">
              PLAY GAMES
            </span>
          </h2>
        </div>
        <div className="feature-image flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cf87cb10fa9b94c6afca77d22f7a1915fa2b4f5f?width=694"
            alt="Woman with payment cards and rewards"
            className="h-auto w-[280px] md:w-[320px] lg:w-[347px]"
          />
        </div>
      </div>

      {/* Feature 3 - Enjoy a 5$ SIGNUP BONUS */}
      <div className="feature-row flex w-full max-w-[1200px] flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-12 lg:gap-16">
        <div className="feature-text flex flex-col items-start justify-center gap-6 md:items-end">
          <h2 className="text-heading w-full max-w-[556px] font-[family-name:var(--font-kanit)] text-right text-[28px] font-bold leading-[1.15] text-[#191C45] md:text-[36px] lg:text-[46px] lg:leading-[46px]">
            <span className="block text-[22px] md:text-[26px] lg:text-[32px]">
              Enjoy a
            </span>
            <span className="block text-[32px] md:text-[40px] lg:text-[46px]">
              5$ SIGNUP BONUS
            </span>
          </h2>
        </div>
        <div className="feature-image flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1810ae836b4b7aa3fc9491b564acf4dd2d531700?width=680"
            alt="Person celebrating signup bonus"
            className="h-auto w-[280px] md:w-[300px] lg:w-[340px]"
          />
        </div>
      </div>
    </section>
  );
}
