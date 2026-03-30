const teams = [
  { name: "Real Madrid", city: "Madrid, Spain", famous: "Vinícius Jr.", color: "#FFFFFF", border: "#FFD600", emoji: "🤍" },
  { name: "Barcelona", city: "Barcelona, Spain", famous: "Lamine Yamal", color: "#A41830", border: "#004D98", emoji: "❤️💙" },
  { name: "Manchester City", city: "Manchester, England", famous: "Erling Haaland", color: "#6CADDF", border: "#6CADDF", emoji: "🩵" },
  { name: "Arsenal", city: "London, England", famous: "Bukayo Saka", color: "#EF0107", border: "#EF0107", emoji: "🔴" },
  { name: "Bayern Munich", city: "Munich, Germany", famous: "Harry Kane", color: "#DC052D", border: "#DC052D", emoji: "❤️" },
  { name: "PSG", city: "Paris, France", famous: "Ousmane Dembélé", color: "#004170", border: "#004170", emoji: "💙" },
  { name: "Brazil 🇧🇷", city: "National Team", famous: "Vinícius Jr.", color: "#FFDF00", border: "#009C3B", emoji: "🇧🇷" },
  { name: "Argentina 🇦🇷", city: "National Team", famous: "Lionel Messi", color: "#75AADB", border: "#75AADB", emoji: "🇦🇷" },
];

const TeamsSection = () => {
  return (
    <section id="teams" className="py-16 px-4 bg-background">
      <h2 className="section-title text-coral">🏟️ Cool Teams</h2>
      <p className="text-center text-lg md:text-xl font-body text-muted-foreground mb-10 max-w-xl mx-auto">
        The most famous football teams in the world!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {teams.map((team) => (
          <div
            key={team.name}
            className="kid-card flex flex-col items-center justify-center text-center gap-3"
            style={{
              background: `linear-gradient(135deg, ${team.color}22, ${team.border}22)`,
              borderLeft: `6px solid ${team.border}`,
            }}
          >
            <div className="text-5xl">{team.emoji}</div>
            <h3 className="text-xl font-display text-foreground">{team.name}</h3>
            <p className="text-base font-body text-muted-foreground">📍 {team.city}</p>
            <p className="text-base font-body font-semibold text-foreground">⭐ {team.famous}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamsSection;
