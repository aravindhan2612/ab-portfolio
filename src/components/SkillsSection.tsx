import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    name: "Android",
    level: 80,
    category: "mobile",
    icon: undefined,
    imgPath: "/ab-portfolio/projects/android.png",
  },
  {
    name: "Kotlin",
    level: 80,
    category: "mobile",
    imgPath: "/ab-portfolio/projects/kotlin.png",
  },
  {
    name: "Jetpack compose",
    level: 80,
    category: "mobile",
    imgPath: "/ab-portfolio/projects/jetpack-compose.svg",
  },
  {
    name: "Java",
    level: 70,
    category: "mobile",
    imgPath: "/ab-portfolio/projects/java.png",
  },
  {
    name: "React-native",
    level: 75,
    category: "mobile",
    imgPath: "/ab-portfolio/projects/react-native.png",
  },

  {
    name: "HTML/CSS",
    level: 75,
    category: "web",
    imgPath: "/ab-portfolio/projects/html.png",
  },
  {
    name: "JavaScript",
    level: 75,
    category: "web",
    imgPath: "/ab-portfolio/projects/javascript.png",
  },
  {
    name: "React",
    level: 75,
    category: "web",
    imgPath: "/ab-portfolio/projects/react.png",
  },
  {
    name: "TypeScript",
    level: 75,
    category: "web",
    imgPath: "/ab-portfolio/projects/typescript.png",
  },
  {
    name: "Tailwind CSS",
    level: 40,
    category: "web",
    imgPath: "/ab-portfolio/projects/tailwind.png",
  },

  // Backend
  {
    name: "Node.js",
    level: 60,
    category: "backend",
    imgPath: "/ab-portfolio/projects/nodejs.png",
  },
  {
    name: "Express",
    level: 60,
    category: "backend",
    imgPath: "/ab-portfolio/projects/expressjs.png",
  },
  {
    name: "MongoDB",
    level: 60,
    category: "backend",
    imgPath: "/ab-portfolio/projects/mongo.png",
  },

  // Tools
  {
    name: "Android studio",
    level: 90,
    category: "tools",
    imgPath: "/ab-portfolio/projects/android-studio.png",
  },
  {
    name: "Gradle",
    level: 80,
    category: "tools",
    imgPath: "/ab-portfolio/projects/gradle.png",
  },
  {
    name: "GitHub",
    level: 80,
    category: "tools",
    imgPath: "/ab-portfolio/projects/github.png",
  },
  {
    name: "VS Code",
    level: 80,
    category: "tools",
    imgPath: "/ab-portfolio/projects/vscode.png",
  },
];
const categories = ["all", "mobile", "web", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [ref, inView, entry] = useInView({
    threshold: 0.4,
  });

  useEffect(() =>{
    console.log("in view-project", inView, entry)
  }, [inView, entry])

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section ref={ref}  id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-xs card-hover flex items-center gap-2"
            >
              <div>
              {skill.imgPath !== "" && (
                <img
                  src={skill.imgPath}
                  alt={skill.name}
                  className="w-10 h-10"
                />
              )}
              </div>
              <div className="flex-grow">
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full">
                  <div
                    className={cn(
                      "bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out",
                    )}
                    style={{
                      width: inView ? `${skill.level}%` : `0%`
                    }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
