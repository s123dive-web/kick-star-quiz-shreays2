import { useState, useCallback } from "react";

interface Question {
  question: string;
  options: { label: string; text: string }[];
  correct: number;
}

const questions: Question[] = [
  {
    question: "Which country did Pelé play for?",
    options: [
      { label: "A", text: "🇧🇷 Brazil" },
      { label: "B", text: "🇦🇷 Argentina" },
      { label: "C", text: "🇵🇹 Portugal" },
      { label: "D", text: "🇮🇹 Italy" },
    ],
    correct: 0,
  },
  {
    question: "What team does Erling Haaland play for?",
    options: [
      { label: "A", text: "🔴 Liverpool" },
      { label: "B", text: "🩵 Manchester City" },
      { label: "C", text: "⚪ Real Madrid" },
      { label: "D", text: "🔵 Chelsea" },
    ],
    correct: 1,
  },
  {
    question: "How many Ballon d'Or awards has Messi won?",
    options: [
      { label: "A", text: "5" },
      { label: "B", text: "6" },
      { label: "C", text: "8" },
      { label: "D", text: "10" },
    ],
    correct: 2,
  },
  {
    question: "What sport uses a round ball and a goal?",
    options: [
      { label: "A", text: "🏀 Basketball" },
      { label: "B", text: "⚽ Football" },
      { label: "C", text: "🏈 Rugby" },
      { label: "D", text: "🎾 Tennis" },
    ],
    correct: 1,
  },
  {
    question: "Which country won the 2022 World Cup?",
    options: [
      { label: "A", text: "🇫🇷 France" },
      { label: "B", text: "🇧🇷 Brazil" },
      { label: "C", text: "🇦🇷 Argentina" },
      { label: "D", text: "🇩🇪 Germany" },
    ],
    correct: 2,
  },
];

const confettiColors = ["#00C853", "#2979FF", "#FFD600", "#FF3D00", "#AA00FF", "#FF6D00"];

const QuizSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswer = useCallback((index: number) => {
    if (selected !== null) return;
    setSelected(index);
    const isCorrect = index === questions[currentQ].correct;
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ((q) => q + 1);
        setSelected(null);
      } else {
        setFinished(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      }
    }, 1200);
  }, [selected, currentQ]);

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  const q = questions[currentQ];
  const progress = ((currentQ + (finished ? 1 : 0)) / questions.length) * 100;

  return (
    <section id="quiz" className="py-16 px-4 bg-secondary text-secondary-foreground">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: confettiColors[i % confettiColors.length],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                width: `${8 + Math.random() * 8}px`,
                height: `${8 + Math.random() * 8}px`,
              }}
            />
          ))}
        </div>
      )}

      <h2 className="section-title">🧠 Quiz Time!</h2>

      {/* Progress bar */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="h-4 rounded-full bg-secondary-foreground/20 overflow-hidden">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center mt-2 text-lg font-body font-bold">
          Score: {"⭐".repeat(score)} {score} / {questions.length}
        </p>
      </div>

      {!finished ? (
        <div className="max-w-2xl mx-auto">
          <div className="kid-card bg-card text-card-foreground text-center">
            <p className="text-lg font-body font-semibold text-muted-foreground mb-4">
              🧠 Question {currentQ + 1} of {questions.length}
            </p>
            <h3 className="text-2xl md:text-3xl font-display text-foreground mb-8">
              "{q.question}"
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {q.options.map((opt, i) => {
                let btnClass = "kid-button w-full text-left text-lg font-body font-bold border-2 ";
                if (selected === null) {
                  btnClass += "bg-muted text-foreground border-border hover:border-primary";
                } else if (i === q.correct) {
                  btnClass += "bg-primary text-primary-foreground border-primary glow-animation";
                } else if (i === selected) {
                  btnClass += "bg-destructive text-destructive-foreground border-destructive wiggle";
                } else {
                  btnClass += "bg-muted text-muted-foreground border-border opacity-50";
                }
                return (
                  <button
                    key={i}
                    className={btnClass}
                    onClick={() => handleAnswer(i)}
                    disabled={selected !== null}
                  >
                    {selected !== null && i === q.correct && "✅ "}
                    {selected === i && i !== q.correct && "❌ "}
                    [{opt.label}] {opt.text}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-xl mx-auto text-center bounce-in">
          <div className="kid-card bg-card text-card-foreground">
            <div className="text-7xl mb-4">🎉</div>
            <h3 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Amazing Job!
            </h3>
            <p className="text-2xl font-body font-bold text-foreground mb-2">
              You got {score} out of {questions.length}!
            </p>
            <p className="text-xl font-body text-muted-foreground mb-6">
              {"⭐".repeat(score)} {score === 5 ? "Perfect score! You're a football genius! 🏆" : "Great try! Play again to get them all! 💪"}
            </p>
            <button onClick={restart} className="kid-button bg-primary text-primary-foreground text-xl">
              🔄 Play Again
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuizSection;
