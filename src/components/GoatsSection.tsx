import PlayerCard from "./PlayerCard";

const legends = [
  { name: "Pelé", flag: "🇧🇷", country: "Brazil", team: "Santos", funFact: "He scored over 1,000 goals in his career!", stars: 5, emoji: "👑", bgColor: "#FFF9C4" },
  { name: "Diego Maradona", flag: "🇦🇷", country: "Argentina", team: "Napoli", funFact: "He scored a goal using his hand and got away with it!", stars: 5, emoji: "🪄", bgColor: "#B3E5FC" },
  { name: "Ronaldo Nazário", flag: "🇧🇷", country: "Brazil", team: "Real Madrid", funFact: "He was so fast that defenders couldn't catch him!", stars: 5, emoji: "💨", bgColor: "#C8E6C9" },
  { name: "Lionel Messi", flag: "🇦🇷", country: "Argentina", team: "Inter Miami", funFact: "Messi has won the Ballon d'Or a record 8 times!", stars: 5, emoji: "🐐", bgColor: "#E1BEE7" },
  { name: "Cristiano Ronaldo", flag: "🇵🇹", country: "Portugal", team: "Al Nassr", funFact: "He does 3,000 sit-ups every single day!", stars: 5, emoji: "💪", bgColor: "#FFCCBC" },
  { name: "Ronaldinho", flag: "🇧🇷", country: "Brazil", team: "Barcelona", funFact: "He smiled so much that fans loved him everywhere!", stars: 5, emoji: "😁", bgColor: "#DCEDC8" },
];

const GoatsSection = () => {
  return (
    <section id="goats" className="py-16 px-4 bg-pitch-light">
      <h2 className="section-title text-primary">🐐 The Legends</h2>
      <p className="text-center text-lg md:text-xl font-body text-muted-foreground mb-10 max-w-xl mx-auto">
        The greatest football players of all time!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {legends.map((player) => (
          <PlayerCard key={player.name} {...player} />
        ))}
      </div>
    </section>
  );
};

export default GoatsSection;
