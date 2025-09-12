import { ArrowDown } from "lucide-react";
import TextType from "./TextType";
import TrackedLink from "./TrackedLinkComponent";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Aravindhan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Baskaran
            </span>
          </h1>
          <TextType
            className="font-jersey  text-2xl md:text-5xl"
            text={[
              "Android Developer",
              "React-native Developer",
              "Frontend Developer",
              "Backend Developer",
            ]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            deletingSpeed={100}
            cursorCharacter="|"
            textColors={["#7c1ab0"]}
          />

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <TrackedLink
              to="#projects"
              eventName="view_my_work_click"
              className="cosmic-button"
            >
              View My work
            </TrackedLink>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
      </div>
    </section>
  );
};
