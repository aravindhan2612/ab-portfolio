import { ArrowDown } from "lucide-react";
import TextType from "./TextType";
import TrackedLink from "./TrackedLinkComponent";
import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import MobileDevelopement from "../../public/projects/mobile_application_development.json";
import Lottie from "lottie-react";
import { useTheme } from "../ThemeContext";

export const HeroSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true
  });

  const resumeUrl =
    "https://github.com/aravindhan2612/aravindhan-b-resume/releases/download/v1.0/Aravindhan_resume.pdf";

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div ref={container} className="container mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 items-center">
          <Lottie
            animationData={MobileDevelopement}
            loop={true}
            className="w-auto h-auto opacity-0 animate-fade-in"
          />
          <div className="flex flex-col md:items-start">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Welcome, I'm</span>
            </h1>
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight">
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
              className="font-jersey  text-2xl md:text-4xl mt-4"
              text={[
                "Android Developer",
                "React Developer",
                "Full Stack Developer",
              ]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor={true}
              deletingSpeed={100}
              cursorCharacter="|"
              textColors={[ theme == 'dark'? "#09db68" : "#b96fff"]}
            />

            <div className="flex flex-col  md:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-4 mt-6">
              <TrackedLink
                to={resumeUrl}
                target="_blank"
                eventName="download_cv"
                className="cosmic-button mx-auto md:mx-0"
              >
                Download CV <FontAwesomeIcon icon={faDownload} />
              </TrackedLink>
              <TrackedLink
                to="#projects"
                eventName="view_my_work_click"
                className="cosmic-button mx-auto md:mx-0"
              >
                View My work <FontAwesomeIcon icon={faBriefcase} />
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
      {inView && (
        <div
          className={cn(
            "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
          )}
        >
          <span className="hidden md:block text-lg text-muted-foreground mb-2">
            Scroll
          </span>
          <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
        </div>
      )}
    </section>
  );
};
