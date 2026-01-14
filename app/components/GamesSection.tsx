export default function GamesSection() {
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
    <section className="games-section flex w-full flex-col items-center gap-11 px-6 py-8 md:px-11">
      {/* Section Title */}
      <h2 className="max-w-[1440px] text-center font-[family-name:var(--font-kanit)] text-[32px] font-bold uppercase leading-tight tracking-[-0.25px] text-[#191C45] md:text-[42px] lg:text-[54px] lg:leading-[64px]">
        100+ of your favorite mobile games
      </h2>

      {/* Games Grid Container */}
      <div className="flex w-full max-w-[1200px] flex-col gap-[34px]">
        {/* First Row - Scroll Left */}
        <div className="scroll-row-left w-full overflow-hidden">
          <div className="scroll-content flex w-max gap-3">
            {/* Duplicate the icons twice for seamless loop */}
            {[...gameIcons, ...gameIcons].map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className="game-icon h-[140px] w-[140px] flex-shrink-0 rounded-[5.594px] object-cover"
              />
            ))}
          </div>
        </div>

        {/* Second Row - Scroll Right */}
        <div className="scroll-row-right w-full overflow-hidden">
          <div className="scroll-content flex w-max gap-3">
            {/* Duplicate the icons twice for seamless loop */}
            {[...gameIcons, ...gameIcons].map((src, index) => (
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

      {/* CTA Button */}
      <div className="cta-button-container mt-4 flex w-full justify-center md:mt-8">
        <button className="play-earn-btn flex h-14 w-[300px] items-center justify-center gap-2 rounded-lg bg-[#5E69FF] px-6 pb-1 shadow-[inset_0_-6px_0_0_#4854EB] transition-transform hover:scale-105">
          <span className="font-[family-name:var(--font-kanit)] text-lg font-bold leading-5 tracking-[0.1px] text-white">
            Play and Earn
          </span>
        </button>
      </div>
    </section>
  );
}
