import PlayerCard from "./PlayerCard";

const currentStars = [
  { name: "Erling Haaland", flag: "🇳🇴", country: "Norway", team: "Man City", funFact: "He scored 36 league goals in one season!", stars: 5, emoji: "⚡", bgColor: "#E3F2FD" },
  { name: "Kylian Mbappé", flag: "🇫🇷", country: "France", team: "Real Madrid", funFact: "He can run almost as fast as a cheetah cub!", stars: 5, emoji: "🚀", bgColor: "#FFF3E0" },
  { name: "Vinicius Jr.", flag: "🇧🇷", country: "Brazil", team: "Real Madrid", funFact: "He learned football playing on the streets of Rio!", stars: 5, emoji: "💃", bgColor: "#E8F5E9" },
  { name: "Jude Bellingham", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", team: "Real Madrid", funFact: "He became a pro footballer at just 16 years old!", stars: 5, emoji: "🌟", bgColor: "#FCE4EC" },
  { name: "Lamine Yamal", flag: "🇪🇸", country: "Spain", team: "Barcelona", funFact: "He scored at the Euros when he was only 16!", stars: 5, emoji: "👶", bgColor: "#F3E5F5" },
  { name: "Bukayo Saka", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", team: "Arsenal", funFact: "Fans call him the Starboy because he shines so bright!", stars: 5, emoji: "✨", bgColor: "#FFFDE7" },
];

const StarsSection = () => {
  return (
    <section id="stars" className="py-16 px-4 bg-background">
      <h2 className="section-title text-secondary">⭐ Today's Stars</h2>
      <p className="text-center text-lg md:text-xl font-body text-muted-foreground mb-10 max-w-xl mx-auto">
        These amazing players are lighting up football right now!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {currentStars.map((player) => (
          <PlayerCard key={player.name} {...player} />
        ))}
      </div>
    </section>
  );
};

export default StarsSection;
