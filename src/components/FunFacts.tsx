const facts = [
  { emoji: "🏃", fact: "Ronaldo can jump higher than a basketball player!" },
  { emoji: "🦶", fact: "Messi's left foot is worth more than gold!" },
  { emoji: "⚡", fact: "Mbappé can run 100 metres in about 10.6 seconds!" },
  { emoji: "📺", fact: "Over 1 billion people watched the World Cup final!" },
  { emoji: "🌍", fact: "Football is played in every country on Earth!" },
  { emoji: "🧤", fact: "Goalkeepers can touch the ball with their hands!" },
];

const FunFacts = () => {
  return (
    <section className="py-16 px-4 bg-accent">
      <h2 className="section-title text-accent-foreground">🤩 Fun Facts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {facts.map((f, i) => (
          <div
            key={i}
            className="kid-card bg-card text-card-foreground flex items-center gap-4"
          >
            <span className="text-5xl flex-shrink-0">{f.emoji}</span>
            <p className="text-lg md:text-xl font-body font-bold">{f.fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
