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

export const HeroSection = () => {
  const container = useRef<HTMLDivElement>(null);

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const resumeUrl =
    "https://github.com/aravindhan2612/ab-portfolio/releases/download/v1.0/Aravindhan_resume.pdf";

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16"
      style={{
        background:
          "radial-gradient(ellipse at 15% 60%, rgba(61,220,132,0.05) 0%, transparent 55%), radial-gradient(ellipse at 85% 40%, rgba(61,220,132,0.03) 0%, transparent 50%)",
      }}
    >
      <div ref={container} className="container mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 items-center">
          {/* Lottie animation with float */}
          <div className="animate-float">
            <Lottie
              animationData={MobileDevelopement}
              loop={true}
              className="w-auto h-auto opacity-0 animate-fade-in"
            />
          </div>

          <div className="flex flex-col md:items-start">
            {/* Eyebrow label */}
            <div className="mono-label mb-4 opacity-0 animate-fade-in">
              Android Developer
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              <span className="opacity-0 animate-fade-in-delay-1">Welcome, I'm</span>
            </h1>
            <h1 className="text-2xl md:text-5xl font-semibold tracking-tight mt-1">
              <span
                className="opacity-0 animate-fade-in-delay-2"
                style={{ color: "var(--android-green)" }}
              >
                Aravindhan
              </span>
              <span
                className="ml-2 opacity-0 animate-fade-in-delay-3"
                style={{ color: "var(--foreground)" }}
              >
                Baskaran
              </span>
            </h1>

            <TextType
              className="font-mono text-xl md:text-3xl mt-4"
              text={["Android Developer", "KMP Developer", "React Developer"]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor={true}
              deletingSpeed={100}
              cursorCharacter="|"
              textColors={["#3DDC84"]}
            />

            <div className="flex flex-col md:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-4 mt-6">
              <TrackedLink
                to={resumeUrl}
                target="_blank"
                eventName="download_cv"
                className="md-button-filled mx-auto md:mx-0 hover:opacity-90 active:scale-[0.98]"
              >
                Download CV <FontAwesomeIcon icon={faDownload} />
              </TrackedLink>
              <TrackedLink
                to="#featured_projects"
                eventName="view_my_work_click"
                className="md-button-outlined mx-auto md:mx-0 active:scale-[0.98]"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "var(--android-container)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                }}
              >
                View My Work <FontAwesomeIcon icon={faBriefcase} />
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
          <span
            className="hidden md:block text-sm mb-2 font-mono"
            style={{ color: "var(--foreground-muted)" }}
          >
            Scroll
          </span>
          <ArrowDown className="h-5 w-5" style={{ color: "var(--android-green)" }} />
        </div>
      )}
    </section>
  );
};
