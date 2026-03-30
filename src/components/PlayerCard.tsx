import { useState } from "react";

interface PlayerCardProps {
  name: string;
  flag: string;
  country: string;
  team: string;
  funFact: string;
  stars: number;
  emoji: string;
  bgColor: string;
}

const PlayerCard = ({ name, flag, country, team, funFact, stars, emoji, bgColor }: PlayerCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer perspective-1000"
      style={{ perspective: "1000px", minHeight: "320px" }}
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      aria-label={`${name} card. Click to ${flipped ? "see front" : "see fun fact"}`}
      onKeyDown={(e) => e.key === "Enter" && setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "320px",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 kid-card flex flex-col items-center justify-center text-center gap-2"
          style={{ backfaceVisibility: "hidden", backgroundColor: bgColor }}
        >
          <div className="text-6xl mb-2">{emoji}</div>
          <h3 className="text-xl md:text-2xl font-display text-foreground">{name}</h3>
          <p className="text-lg font-body font-semibold text-muted-foreground">
            {flag} {country} · {team}
          </p>
          <div className="text-2xl mt-1">
            {"⭐".repeat(stars)}
          </div>
          <p className="text-sm font-body text-muted-foreground mt-2">👆 Tap to flip!</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 kid-card flex flex-col items-center justify-center text-center gap-3 bg-accent"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-5xl">🤯</div>
          <p className="text-xl md:text-2xl font-body font-bold text-accent-foreground px-4">
            "{funFact}"
          </p>
          <p className="text-sm font-body text-muted-foreground mt-2">👆 Tap to go back!</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
