import { faGithub, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import TrackedLink from "./TrackedLinkComponent";
import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";
import type { Project } from "./ProjectSection";
import { useRef } from "react";

const creativeProjects: Project[] = [
   {
    id: 1,
    title: "Android Showcase",
    description: "Sample repo to learn and explore Android development with modern patterns.",
    image: "/ab-portfolio/projects/android-lg.svg",
    tags: ["Android", "Kotlin","Coroutines", "Jetpack Compose", ],
    demoUrl: "",
    githubUrl: "https://github.com/aravindhan2612/android_showcase",
  },
  {
    id: 2,
    title: "SpringBoot Showcase",
    description: "Sample repo to learn and explore the Spring framework with modern Java.",
    image: "/ab-portfolio/projects/spring-boot.png",
    tags: ["Spring", "Java", "MongoDB", "Spring AI", "REST API"],
    demoUrl: "",
    githubUrl: "https://github.com/aravindhan2612/spring_showcase",
  },
  {
    id: 3,
    title: "MoMusic App",
    description: "Simple app to showcase a list of music tracks and a media player screen to play selected music.",
    image: "/ab-portfolio/projects/momusic.png",
    tags: ["Android", "Kotlin", "XML", "Gif", "RecyclerView"],
    demoUrl: "",
    githubUrl: "https://github.com/aravindhan2612/MoMusicApp-Android-native",
  },
  {
    id: 4,
    title: "Passblock Android",
    description: "A password manager app to save all passwords in one place — built with clean architecture and MVVM.",
    image: "/ab-portfolio/projects/android-lg.svg",
    tags: ["Android", "Kotlin", "MVVM", "Clean Architecture"],
    demoUrl: "",
    githubUrl: "https://github.com/aravindhan2612/Passblock-Android",
  },
  {
    id: 5,
    title: "Passblock Backend",
    description: "Backend service for Passblock — built to learn Node.js, Express.js, and MongoDB with TypeScript.",
    image: "/ab-portfolio/projects/nodejs.png",
    tags: ["Node.js", "Express.js", "MongoDB", "TypeScript"],
    demoUrl: "",
    githubUrl: "https://github.com/aravindhan2612/passblock-backend-Node.js-Express.js-MongoDB",
  },
  {
    id: 7,
    title: "SpaceTutorial KMP",
    description: "A Kotlin Multiplatform project exploring shared code across Android and iOS with native UI, Ktor, and SqlDelight.",
    image: "/ab-portfolio/projects/kotlin.png",
    tags: ["KMP", "Kotlin", "iOS", "Ktor", "SqlDelight"],
    demoUrl: "",
    githubUrl: "https://github.com/aravindhan2612/SpaceTutorial-KMP-Shared-NativeUI",
  },
  
  {
    id: 8,
    title: "StickerSmash",
    description: "React Native sample app built by following official Expo tutorials to explore the Expo framework.",
    image: "/ab-portfolio/projects/sticksmash.png",
    tags: ["React Native","TypeScript", "Expo", ],
    demoUrl: "",
    githubUrl: "https://github.com/aravindhan2612/StickerSmash-React-Native-Latest-Sample",
  },
];

type Direction = "left" | "right";

export const CreativeSamplesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: Direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} id="projects" className="px-4 py-24 relative" style={{ backgroundColor: "var(--surface-elevated)" }}>
      <div className="container mx-auto max-w-5xl">
        <div className={cn("reveal", inView && "reveal-visible")}>
          <div className="mono-label text-center mb-3">Creative Samples</div>
          <h2 className="section-heading">
            Personal <span style={{ color: "var(--android-green)" }}>Projects</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Demonstrative projects designed to showcase technical skills, creativity, and
            ability to prototype concepts — personal explorations and technical experiments.
          </p>
        </div>

        {/* Scrollable card carousel with flanking arrows */}
        <div className="flex items-center gap-2">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex-shrink-0 p-2 border rounded-full transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--foreground-muted)", backgroundColor: "var(--surface-elevated)" }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "var(--surface)";
              el.style.color = "var(--foreground)";
              el.style.borderColor = "rgba(61,220,132,0.5)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "var(--surface-elevated)";
              el.style.color = "var(--foreground-muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar scroll-smooth gap-3 pb-2">
            {creativeProjects.map(project => (
              <div
                key={project.id}
                className="group min-w-[270px] md-card overflow-hidden flex-shrink"
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
                  el.style.transform = "translateY(-4px)";
                  el.style.borderColor = "rgba(61,220,132,0.3)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)";
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "var(--border)";
                }}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                   <h3 className="text-base font-semibold p-2" style={{ color: "var(--foreground)" }}>
                    {project.title}
                  </h3>
                  <div className="flex overflow-x-auto no-scrollbar gap-2 mb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="md-chip flex-shrink-0">{tag}</span>
                    ))}
                  </div>
                 
                  <p className="text-xs mb-3 line-clamp-3" style={{ color: "var(--foreground-muted)" }}>
                    {project.description}
                  </p>
                  {project.githubUrl && (
                    <TrackedLink
                      target="_blank"
                      to={project.githubUrl}
                      eventName="github_url"
                      eventParams={{ link: `${project.title} clicked` }}
                      className="text-xs font-medium transition-colors duration-150 flex items-center gap-1"
                      style={{ color: "var(--foreground-muted)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--android-green)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground-muted)"; }}
                    >
                      <FontAwesomeIcon icon={faGithub} /> GitHub
                    </TrackedLink>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="flex-shrink-0 p-2 border rounded-full transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--foreground-muted)", backgroundColor: "var(--surface-elevated)" }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "var(--surface)";
              el.style.color = "var(--foreground)";
              el.style.borderColor = "rgba(61,220,132,0.5)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "var(--surface-elevated)";
              el.style.color = "var(--foreground-muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-8">
          <TrackedLink
            className="md-button-outlined w-fit flex items-center mx-auto gap-2 active:scale-[0.98]"
            target="_blank"
            eventName="check_my_github_clicked"
            to="https://github.com/aravindhan2612"
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--android-container)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
            }}
          >
            <FontAwesomeIcon icon={faGithubAlt} /> Check My GitHub <ArrowRight size={16} />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
};
