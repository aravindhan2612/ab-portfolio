import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrackedLink from "./TrackedLinkComponent";
import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const workProjects: Project[] = [
  {
    id: 4,
    title: "T-Life",
    description:
      "T-Life is now the go-to app for T-Mobile. Get the latest exclusive deals from T-Mobile Tuesdays, and take advantage of all your Magenta Status benefits. You can manage your account, configure your T-Mobile Home Internet gateway, access T-Mobile Money, and more.",
    image: "/ab-portfolio/projects/t-life.png",
    tags: ["Mobile", "Android", "Kotlin", "MVI", "Jetpack compose", "Retrofit"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.tmobile.tuesdays&hl=en",
    githubUrl: "",
  },
  {
    id: 2,
    title: "EMIS-X Mobile",
    description:
      "Experience seamless access to real-time patient data, securely at the point of care with EMIS-X Mobile. Our app empowers clinicians to efficiently manage their day, providing quick synchronisation for remote work, whether online or offline, for more flexibility. With EMIS-X Mobile, you can effortlessly view, book, and manage appointments, while also editing, updating, and sharing crucial information - all designed to optimise care delivery, bringing it closer to home.",
    image: "/ab-portfolio/projects/emis-x.png",
    tags: [
      "React-native",
      "Android",
      "iOS",
      "Typescript",
      "Kotlin",
      "Swift",
      "Redux",
    ],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.emisx.mobile&hl=en_IN",
    githubUrl: "",
  },

  {
    id: 3,
    title: "Patient Access",
    description:
      "Patient Access connects you to healthcare services when you need them most. Book GP appointments, order repeat prescriptions and explore your local pharmacy services.",
    image: "/ab-portfolio/projects/pa.png",
    tags: ["Mobile", "Android", "Java", "Kotlin", "SSO", "RxJava", "MVP"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=uk.co.patient.patientaccess&hl=en_GB",
    githubUrl: "",
  },
  {
    id: 1,
    title: "EMIS Mobile",
    description:
      "EMIS Mobile allows clinicians to access the information they need at the point-of-care securely. Whether online or offline, clinicians can use the app to view and book appointments and up-to-date medical records, making it easier to deliver care closer to home",
    image: "/ab-portfolio/projects/emis-mobile.png",
    tags: [
      "Mobile",
      "Android",
      "Kotlin",
      "Java",
      "Firebase",
      "Sqlite",
      "MVVM",
      "Room",
    ],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.emishealth.emismobile.emismobileapp&hl=en_IN",
    githubUrl: "",
  },
];

type Direction = "left" | "right";

export const ProjectSection = () => {
  const [workRef, inWorkView] = useInView({
    threshold: 0.1,
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
    <section ref={workRef} id="featured_projects" className="px-4 relative">
      <div
        ref={workRef}
        className={cn(
          "container mx-auto max-w-5xl py-14 transition-all duration-1000 ease-out transform",
          inWorkView
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-100"
        )}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          To showcase of real-world projects I contributed to while working with
          clients or companies. These projects demonstrate practical solutions,
          collaboration with teams, and experience delivering results in a
          professional environment
        </p>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 no-scrollbar scroll-smooth gap-4"
        >
          {workProjects.map((project, key) => (
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
                    {project.demoUrl !== "" && (
                      <TrackedLink
                        target="_blank"
                        to={project.demoUrl}
                        eventName="demo_url"
                        eventParams={{ link: `${project.title} clicked` }}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <FontAwesomeIcon
                          size="xl"
                          icon={faSquareArrowUpRight}
                        />
                      </TrackedLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex py-10 gap-3 justify-center">
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
      </div>
    </section>
  );
};
