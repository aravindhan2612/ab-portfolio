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
    id: 4,
    title: "MoMusic App",
    description:
      "Simple app to showcases a list of music tracks and a media player screen to play selected music",
    image: "/ab-portfolio/projects/momusic.png",
    tags: ["Android", "Kotlin", "XML", "Gif", "Recyclerview"],
    demoUrl: "",
    githubUrl: "https://github.com/aravindhan2612/MoMusicApp-Android-native",
  },
  {
    id: 5,
    title: "StickerSmash App",
    description:
      "Simple app created by following official expo tutorials, to explore the Expo framework",
    image: "/ab-portfolio/projects/sticksmash.png",
    tags: ["React-Native", "Android", "iOS", "Web", "Expo", "Typescript"],
    demoUrl: "",
    githubUrl:
      "https://github.com/aravindhan2612/StickerSmash-React-Native-Latest-Sample",
  },
  {
    id: 6,
    title: "YoDoApp",
    description:
      "Created a sample app to download youtube videos to learn the ktor and workmanager library",
    image: "/ab-portfolio/projects/android-lg.svg",
    tags: ["Android", "Kotlin", "WorkManager", "Room", "ktor"],
    demoUrl: "",
    githubUrl: "https://github.com/aravindhan2612/YoDoApp-Android-native",
  },
];
type Direction = "left" | "right";
export const CreativeSamplesSection = () => {
   const [sampleRef, inSampleView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
   const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: Direction) => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: direction === "left" ? -300 : 300,
          behavior: "smooth",
        });
      }
    };
  return (
    <section ref={sampleRef} id="projects" className="px-4 relative">

      {/* creative samples */}
      <div  className={cn(
          "container mx-auto max-w-5xl py-24 transition-all duration-1000 ease-out",
          inSampleView
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-100"
        )}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Creative <span className="text-primary"> Samples</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Demonstrative projects designed to showcase my technical skills,
          creativity, and ability to prototype concepts. These are personal
          explorations that reflect my interests and technical experiments
        </p>
        <div ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4 ">
          {creativeProjects.map((project, key) => (
            <div
              key={key}
              className="min-w-[270px] bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap overflow-x gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium  border rounded-full bg-primary/20 -text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.githubUrl !== "" && (
                      <TrackedLink
                        target="_blank"
                        to={project.githubUrl}
                        eventName="github_url"
                        eventParams={{ link: `${project.title} clicked` }}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <FontAwesomeIcon size="xl" icon={faGithub} />
                      </TrackedLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
         <div className="flex py-10 gap-3 justify-center">
          <button
            onClick={() => scroll("left")}
            className=" -translate-y-1/2 bg-primary p-2 rounded-full shadow z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="-translate-y-1/2 bg-primary p-2 rounded-full shadow z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center mt-12">
          <TrackedLink
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            eventName="check_my_github_clicked"
            to="https://github.com/aravindhan2612"
          >
            <FontAwesomeIcon icon={faGithubAlt} /> Check My GitHub{" "}
            <ArrowRight size={16} />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
};
