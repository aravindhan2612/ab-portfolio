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
    tags: ["Mobile", "Android", "Kotlin", "MVI", "Jetpack Compose", "Retrofit"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.tmobile.tuesdays&hl=en",
    githubUrl: "",
  },
  {
    id: 2,
    title: "EMIS-X Mobile",
    description:
      "Experience seamless access to real-time patient data, securely at the point of care with EMIS-X Mobile. Our app empowers clinicians to efficiently manage their day, providing quick synchronisation for remote work, whether online or offline.",
    image: "/ab-portfolio/projects/emis-x.png",
    tags: ["React Native", "Android", "iOS", "TypeScript", "Kotlin", "Swift", "Redux"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.emisx.mobile&hl=en_IN",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Patient Access",
    description:
      "Patient Access connects you to healthcare services when you need them most. Book GP appointments, order repeat prescriptions and explore your local pharmacy services.",
    image: "/ab-portfolio/projects/pa.png",
    tags: ["Mobile", "Android", "Java", "Kotlin", "SSO", "RxJava", "MVP"],
    demoUrl: "https://play.google.com/store/apps/details?id=uk.co.patient.patientaccess&hl=en_GB",
    githubUrl: "",
  },
  {
    id: 1,
    title: "EMIS Mobile",
    description:
      "EMIS Mobile allows clinicians to access the information they need at the point-of-care securely. Whether online or offline, clinicians can view and book appointments and up-to-date medical records.",
    image: "/ab-portfolio/projects/emis-mobile.png",
    tags: ["Mobile", "Android", "Kotlin", "Java", "Firebase", "SQLite", "MVVM", "Room"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.emishealth.emismobile.emismobileapp&hl=en_IN",
    githubUrl: "",
  },
];

type Direction = "left" | "right";

export const ProjectSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: Direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} id="featured_projects" className="px-4 py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <div
          className={cn("reveal", inView && "reveal-visible")}
        >
          <div className="mono-label text-center mb-3">Featured Work</div>
          <h2 className="section-heading">
            Professional <span style={{ color: "var(--android-green)" }}>Projects</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Real-world projects I contributed to while working with clients or companies —
            demonstrating practical solutions and professional collaboration.
          </p>
        </div>

        {/* Scrollable card carousel with flanking arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex-shrink-0 p-2 border rounded-full transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--foreground-muted)", backgroundColor: "var(--surface)" }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "var(--surface-elevated)";
              el.style.color = "var(--foreground)";
              el.style.borderColor = "rgba(61,220,132,0.5)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "var(--surface)";
              el.style.color = "var(--foreground-muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar scroll-smooth gap-3 pb-2">
            {workProjects.map((project) => (
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
                  <p className="text-xs mb-3 text-left line-clamp-3" style={{ color: "var(--foreground-muted)" }}>
                    {project.description}
                  </p>
                  {project.demoUrl && (
                    <TrackedLink
                      target="_blank"
                      to={project.demoUrl}
                      eventName="demo_url"
                      eventParams={{ link: `${project.title} clicked` }}
                      className="text-xs font-medium transition-colors duration-150 flex items-center gap-1"
                      style={{ color: "var(--foreground-muted)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--android-green)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground-muted)"; }}
                    >
                      <FontAwesomeIcon icon={faSquareArrowUpRight} /> Play Store
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
            style={{ borderColor: "var(--border)", color: "var(--foreground-muted)", backgroundColor: "var(--surface)" }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "var(--surface-elevated)";
              el.style.color = "var(--foreground)";
              el.style.borderColor = "rgba(61,220,132,0.5)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "var(--surface)";
              el.style.color = "var(--foreground-muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
