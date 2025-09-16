import TrackedLink from "./TrackedLinkComponent";
import { useInView } from "react-intersection-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../lib/utils";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false
  });
  return (
    <section
      ref={ref}
      id="about"
      className={cn(
        "py-2 px-4 relative",
      )}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn("justify-center flex transition-all duration-700 ease-out transform",
            inView ? "opacity-100 translate-x-0 ": "opacity-0 -translate-x-100 scale-150"
          )}>
            <img
              src={"/ab-portfolio/projects/dp.jpg"}
              className="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover "
            />
          </div>
          <div className={cn("space-y-6 transition-all duration-700 ease-out transform",
            inView ? "opacity-100 translate-x-0": "opacity-0 translate-x-100"
          )}>
            <h3 className="text-2xl font-semibold">
              Passionate Mobile Developer
            </h3>
            <p className="text-muted-foreground">
              As an experienced Android developer with over 6+ years of
              industrial experience, I have a deep understanding of the
              intricacies of the Android platform and have gained expertise in
              programming languages like Kotlin, Java, Typescript, as well as
              Android and web frameworks. I am committed to creating innovative
              and impactful mobile applications that are user-friendly and
              visually appealing, and am passionate about staying up-to-date
              with the latest trends and technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <TrackedLink
                to="#contact"
                className="cosmic-button"
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
