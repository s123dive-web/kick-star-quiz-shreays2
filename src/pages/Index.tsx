import HeroSection from "@/components/HeroSection";
import StarsSection from "@/components/StarsSection";
import GoatsSection from "@/components/GoatsSection";
import TeamsSection from "@/components/TeamsSection";
import QuizSection from "@/components/QuizSection";
import FunFacts from "@/components/FunFacts";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-md shadow-md px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3 md:gap-6">
          <a href="#stars" className="kid-button bg-secondary text-secondary-foreground text-base py-2 px-4">⭐ Stars</a>
          <a href="#goats" className="kid-button bg-primary text-primary-foreground text-base py-2 px-4">🐐 Legends</a>
          <a href="#teams" className="kid-button bg-coral text-coral-foreground text-base py-2 px-4">🏟️ Teams</a>
          <a href="#quiz" className="kid-button bg-accent text-accent-foreground text-base py-2 px-4">🧠 Quiz</a>
        </div>
      </nav>

      <HeroSection />
      <StarsSection />
      <GoatsSection />
      <TeamsSection />
      <QuizSection />
      <FunFacts />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 text-center font-body">
        <p className="text-xl font-bold">⚽ Football Fun! ⚽</p>
        <p className="text-lg mt-2">Made with ❤️ for young football fans!</p>
      </footer>
    </div>
  );
};

export default Index;
