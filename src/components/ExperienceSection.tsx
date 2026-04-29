import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";

interface Experience {
  company: string;
  roles: Roles[];
  icon: string;
  description?: string;
}

export interface Roles {
  name: string;
  tenure: string;
}

const experiences: Experience[] = [
  {
    company: "Synechron",
    roles: [
      { name: "Senior Associate - Technology", tenure: "December 2025 - Present" },
    ],
    description:
      "At Synechron, Joined as a Senior Android Developer to support upcoming Android projects. Participated in internal knowledge transfer sessions, Android architecture reviews, and project readiness activities. Worked on improving technical expertise in Kotlin, Jetpack components, and modern Android development practices.",
    icon: "/ab-portfolio/projects/synechron1.png",
  },
  {
    company: "Infosys",
    roles: [
      { name: "Lead Technical Developer", tenure: "December 2024 - November 2025" },
    ],
    description:
      "At Infosys, developed and maintained reusable UI components using Jetpack Compose for the client T-Mobile. Also contributed to migrating the old UI design system to the new UI design system. Actively contributed to code reviews, agile sprint planning and mentored junior developers.",
    icon: "/ab-portfolio/projects/infosys.png",
  },
  {
    company: "EMIS Health",
    roles: [
      { name: "Software Development Engineer", tenure: "April 2024 - December 2024" },
      { name: "Junior Software Development Engineer", tenure: "November 2021 - March 2024" },
      { name: "Associate Engineer", tenure: "May 2019 - October 2021" },
    ],
    description:
      "At EMIS, learned Android development and successfully deployed over three applications in the healthcare domain. Explored and gained experience with multiple tech stacks including Kotlin, Java, TypeScript, React Native, Redux, SQLite, Room DB, Firebase, MVVM, and web development.",
    icon: "/ab-portfolio/projects/emis.png",
  },
];

export const ExperienceSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="experience"
      className="py-24 px-4 relative"
      style={{ backgroundColor: "var(--surface-elevated)" }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="mono-label text-center mb-3">Work Experience</div>
        <h2 className="section-heading">
          Professional <span style={{ color: "var(--android-green)" }}>Journey</span>
        </h2>
        <p className="section-subheading">
          Companies and roles that shaped my expertise
        </p>

        <div
          className={cn(
            "md-card p-6 md:p-8 reveal",
            inView && "reveal-visible"
          )}
        >
          <ParentStepper inView={inView} />
        </div>
      </div>
    </section>
  );
};

const ParentStepper: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={cn(
            "relative reveal",
            index === 0 ? "stagger-1" : index === 1 ? "stagger-2" : "stagger-3",
            inView && "reveal-visible"
          )}
        >
          <div className="flex flex-row gap-2">
            {/* Timeline vertical line */}
            <div
              className="hidden md:block absolute mx-3.5 my-2 h-full w-px"
              style={{ backgroundColor: "var(--border)" }}
            />
            {/* Timeline dot with pulse ring */}
            <div className="hidden md:block z-10 relative">
              <div
                className="mx-2 md:m-2 rounded-full w-4 h-4"
                style={{
                  backgroundColor: "var(--android-green)",
                  boxShadow: "0 0 0 3px rgba(61,220,132,0.15)",
                }}
              />
            </div>

            <div className="flex justify-between mb-12 w-full items-start gap-4">
              <div className="text-left flex-1">
                <h3
                  className="text-xl md:text-2xl font-semibold mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  {exp.company}
                </h3>
                <ChildStepper roles={exp.roles} />
                <p
                  className="text-xs md:text-sm mt-3 leading-relaxed"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {exp.description}
                </p>
              </div>
              <div className="hidden md:block flex-shrink-0">
                <img
                  src={exp.icon}
                  className="w-24 h-auto rounded-lg object-contain"
                  alt={exp.company}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

interface ChildStepperProps {
  roles: Roles[];
}

const ChildStepper: React.FC<ChildStepperProps> = ({ roles }) => {
  return (
    <>
      {roles.map((role, index) => (
        <div key={index} className="relative">
          <div className="flex flex-row gap-2">
            {index < roles.length - 1 && (
              <div
                className="hidden md:block absolute mx-3.5 my-2 h-full w-px"
                style={{ backgroundColor: "var(--border)" }}
              />
            )}
            {roles.length > 1 && (
              <div className="z-10 hidden md:block">
                <div
                  className="mx-2 md:m-2 rounded-full w-3 h-3 ring-2"
                  style={{
                    backgroundColor: "var(--android-green)",
                    boxShadow: "0 0 0 3px rgba(61,220,132,0.12)",
                  }}
                />
              </div>
            )}
            <div className="flex mb-2">
              <div className="text-left">
                <h4
                  className="text-xs md:text-base mb-0.5 font-semibold"
                  style={{ color: "var(--android-green)" }}
                >
                  {role.name}
                </h4>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {role.tenure}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
