import { Briefcase, Code, User } from "lucide-react";
import TrackedLink from "./TrackedLinkComponent";

export const AboutSection = () => {
  const resumeUrl =
    "https://github.com/aravindhan2612/aravindhan-b-resume/releases/download/v1.0/Aravindhan_7.pdf";
  return (
    <section id="about" className="py-2 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Mobile Developer
            </h3>
            <p className="text-muted-foreground">
              With over 6+ years of experience in Mobile development, I
              specialize in building high-quality apps using Kotlin, Java and
              cross-platform tools like React-native.
            </p>
            <p className="text-muted-foreground">
              I enjoy tackling challenges, optimizing performance, and bringing
              creative solutions to life. Whether it's building seamless mobile
              experiences, exploring the latest Android trends, or enhancing
              cross-platform applications, I'm always eager to learn and
              innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <TrackedLink
                to="#contact"
                className="cosmic-button"
                eventName="get_in_touch_clicked"
              >
                Get In Touch
              </TrackedLink>
              <TrackedLink
                to={resumeUrl}
                target="_blank"
                eventName="download_cv"
                className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </TrackedLink>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className=" text-center md:text-left">
                  <h4 className="font-semibold text-lg"> Mobile Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Creating high performance, scalable and user-centric mobile
                    applications using modern frameworks.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-lg"> Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
