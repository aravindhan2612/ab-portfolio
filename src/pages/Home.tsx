import { useEffect, useState } from "react";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { CreativeSamplesSection } from "../components/CreativeSamplesSection";

export const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById("hero");
      if (firstSection) {
        const { bottom } = firstSection.getBoundingClientRect();
        setShowButton(bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <CreativeSamplesSection />
        <ContactSection />
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full border z-50
                       transition-colors duration-150"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--foreground-muted)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--android-green)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--android-green)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground-muted)";
            }}
          >
            ↑
          </button>
        )}
      </main>
    </div>
  );
};
