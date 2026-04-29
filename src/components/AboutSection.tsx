import TrackedLink from "./TrackedLinkComponent";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../lib/utils";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="mono-label text-center mb-3 opacity-0 animate-fade-in">About Me</div>
        <h2
          className={cn(
            "section-heading",
            inView ? "opacity-100 animate-fade-in" : "opacity-0"
          )}
        >
          Passionate Software{" "}
          <span style={{ color: "var(--android-green)" }}>Developer</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
          <div
            className={cn(
              "justify-center flex transition-all duration-700 ease-out transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <img
              src="/ab-portfolio/projects/dp.png"
              className="rounded-2xl w-60 h-60 md:w-80 md:h-80 object-cover border"
              style={{ borderColor: "var(--border)" }}
              alt="Aravindhan Baskaran"
            />
          </div>

          <div
            className={cn(
              "space-y-6 transition-all duration-700 ease-out transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <h3 className="text-2xl font-semibold" style={{ color: "var(--foreground)" }}>
              6+ Years Android Experience
            </h3>
            <p style={{ color: "var(--foreground-muted)", lineHeight: "1.7" }}>
              As an experienced Android developer with over 6+ years of industrial experience,
              I have a deep understanding of the intricacies of the Android platform and have
              gained expertise in programming languages like Kotlin, Java, TypeScript, as well
              as Android and web frameworks. I am committed to creating innovative and impactful
              mobile applications that are user-friendly and visually appealing, and am passionate
              about staying up-to-date with the latest trends and technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <TrackedLink
                to="#contact"
                className="md-button-filled hover:opacity-90 active:scale-[0.98]"
                eventName="get_in_touch_clicked"
              >
                Get In Touch <FontAwesomeIcon icon={faContactCard} />
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
