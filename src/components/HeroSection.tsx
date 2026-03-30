const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center bg-primary text-primary-foreground overflow-hidden px-4 py-16">
      {/* Floating football emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["⚽", "🏆", "⭐", "🥅", "👟", "🎯"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-4xl md:text-6xl opacity-20 float-animation"
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-8xl font-display mb-4 bounce-in">
          ⚽ Football Fun!
        </h1>
        <p className="text-xl md:text-3xl font-body font-bold mb-8 max-w-2xl mx-auto">
          Learn about the coolest players and teams in the world! 🌍
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#stars" className="kid-button bg-accent text-accent-foreground text-xl">
            ⭐ Meet the Stars
          </a>
          <a href="#quiz" className="kid-button bg-coral text-coral-foreground text-xl">
            🧠 Take the Quiz
          </a>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 40C840 52 960 68 1080 72C1200 76 1320 68 1380 64L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
