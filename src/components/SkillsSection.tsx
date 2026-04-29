import { useState } from "react";
import { cn } from "../lib/utils";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Android", level: 80, category: "mobile", imgPath: "/ab-portfolio/projects/android.png" },
  { name: "Kotlin", level: 80, category: "languages", imgPath: "/ab-portfolio/projects/kotlin.png" },
  { name: "Jetpack Compose", level: 80, category: "mobile", imgPath: "/ab-portfolio/projects/jetpack-compose.svg" },
  { name: "XML", level: 80, category: "mobile", imgPath: "/ab-portfolio/projects/xml.png" },
  { name: "Java", level: 70, category: "languages", imgPath: "/ab-portfolio/projects/java.png" },
  { name: "Gradle", level: 80, category: "mobile", imgPath: "/ab-portfolio/projects/gradle.png" },
  { name: "React Native", level: 75, category: "mobile", imgPath: "/ab-portfolio/projects/react-native.png" },
  { name: "HTML/CSS", level: 40, category: "languages", imgPath: "/ab-portfolio/projects/html.png" },
  { name: "JavaScript", level: 75, category: "languages", imgPath: "/ab-portfolio/projects/javascript.png" },
  { name: "React", level: 75, category: "web", imgPath: "/ab-portfolio/projects/react.png" },
  { name: "TypeScript", level: 75, category: "languages", imgPath: "/ab-portfolio/projects/typescript.png" },
  { name: "Tailwind CSS", level: 40, category: "web", imgPath: "/ab-portfolio/projects/tailwind.png" },
  { name: "Spring Boot", level: 60, category: "backend", imgPath: "/ab-portfolio/projects/spring-boot.png" },
  { name: "Node.js", level: 40, category: "backend", imgPath: "/ab-portfolio/projects/nodejs.png" },
  { name: "Express", level: 40, category: "backend", imgPath: "/ab-portfolio/projects/expressjs.png" },
  { name: "MongoDB", level: 40, category: "backend", imgPath: "/ab-portfolio/projects/mongo.png" },
  { name: "Android Studio", level: 90, category: "tools", imgPath: "/ab-portfolio/projects/android-studio.png" },
  { name: "GitHub", level: 80, category: "tools", imgPath: "/ab-portfolio/projects/github.png" },
  { name: "VS Code", level: 80, category: "tools", imgPath: "/ab-portfolio/projects/vscode.png" },
];

const categories = ["all", "languages", "mobile", "web", "backend", "tools"];

export const SkillsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = skills.filter(
    skill => activeCategory === "all" || skill.category === activeCategory
  );

  const staggerClass = (i: number) => {
    const classes = ["stagger-1", "stagger-2", "stagger-3", "stagger-4", "stagger-5"];
    return classes[Math.min(i, classes.length - 1)];
  };

  return (
    <section ref={ref} id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="mono-label text-center mb-3">Technical Skills</div>
        <h2 className="section-heading">
          What I <span style={{ color: "var(--android-green)" }}>Build With</span>
        </h2>
        <p className="section-subheading">
          Technologies and tools I work with every day
        </p>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "capitalize cursor-pointer",
                activeCategory === category ? "md-chip-active" : "md-chip"
              )}
              onMouseEnter={e => {
                if (activeCategory !== category) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--foreground-muted)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)";
                }
              }}
              onMouseLeave={e => {
                if (activeCategory !== category) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground-muted)";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredSkills.map((skill, i) => (
            <div
              key={skill.name}
              className={cn(
                "md-card p-4 flex items-center gap-3 reveal",
                staggerClass(i),
                inView && "reveal-visible"
              )}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 4px 8px 3px rgba(0,0,0,0.15)";
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = "rgba(61,220,132,0.4)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--border)";
              }}
            >
              {skill.imgPath && (
                <img src={skill.imgPath} alt={skill.name} className="w-9 h-9 object-contain flex-shrink-0" />
              )}
              <div className="flex-grow min-w-0">
                <h3 className="font-medium text-sm text-left mb-2 truncate" style={{ color: "var(--foreground)" }}>
                  {skill.name}
                </h3>
                {/* Progress bar */}
                <div className="w-full h-1 rounded-full" style={{ backgroundColor: "var(--surface-elevated)" }}>
                  <div
                    className="h-1 rounded-full"
                    style={{
                      width: inView ? `${skill.level}%` : "0%",
                      backgroundColor: "var(--android-green)",
                      transition: "width 0.7s ease-out 0.3s",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
