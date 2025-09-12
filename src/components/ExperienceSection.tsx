const experiences = [
  {
    company: "Infosys",
    role: "Lead Technical Developer",
    tenure: "December 2024 - Present",
    description:
      "As a Lead Android Developer, developed and maintained the reusable UI components using jetpack compose for telecom applications. Also contributed and supported to migrating the old UI design system to new UI design system. Actively contributed to code reviews, agile sprint planning and mentored Junior developers.",
    icon: "/ab-portfolio/projects/infosys.png", // Replace with your own icons
  },
  {
    company: "EMIS Health",
    role: "Software Development Engineer",
    tenure: "April 2024 - December 2024",
    description:
      "As a SDE, I led a Proof of Concept to modernize legacy Android and iOS apps by migrating them to a React Native tech stack using Typescript, Redux, Realm, and native bridging for secure API calls and improved performance. I owned the full migration process, contributed to architecture and design, and worked closely with cross-functional teams to ensure a smooth transition.Afterward, I developed a web-based admin app from scratch using React.js, Typescript, and React Router to support kiosk management, delivering the project in a short timeframe while learning the web development lifecycle.",
    icon: "/ab-portfolio/projects/emis.jpg",
  },
  {
    company: "EMIS Health",
    role: "Junior Software Development Engineer",
    tenure: "November 2021 - March 2024",
    description:
      "As a JSDE, took ownership for version release in Google play console, acted as scrum master to the couple of feature releases and supported for production bug fixes. Worked on big features enhancements like integrating maps feature with Direction API, Annotating the image with Custom view, revamped the whole UI to mobile supporting UX design, Contributed on migrating the old Java code to Kotlin, contributed to Single sign on feature to easy and secured way of sign in. Implemented latest tech frameworks and architectures like used Jetpack compose for new screen, migrated the SQLite to Room DB, used Datastore instead of shared preferences, implemented Dagger hilt, converted MVP to MVVM architecture. Automated the android build generation using Github actions. Learned iOS development and contributed to Annotating the image feature like designing a screen on storyboard and UIKit, writing a logic for customize view on iOS app.",
    icon: "/ab-portfolio/projects/emis.jpg",
  },
  {
    company: "EMIS Health",
    role: "Associate Engineer",
    tenure: "May 2019 - October 2021",
    description:
      "Started as a fresher and quickly ramped up on Android development by maintaining and enhancing a legacy healthcare app using Java, Kotlin, and SQLite. Contributed to feature enhancement, bug fixes, app stability.",
    icon: "/ab-portfolio/projects/emis.jpg",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-400"></div>
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between mb-12 relative"
              >
                {/* Left Side */}
                {isLeft ? (
                  <div className="md:w-1/2 md:pr-8 flex lg:justify-end">
                    <div className="bg-card rounded-lg p-6 card-hover">
                      <h3 className="text-2xl font-semibold mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-primary text-lg mb-1 font-semibold">
                        {exp.role}
                      </p>
                      <p className="text-muted-foreground text-sm mb-2 line-clamp-4">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block md:w-1/2">
                    <h3 className="text-lg font-semibold mb-2">{exp.tenure}</h3>
                  </div>
                )}

                {/* Stepper Icon */}
                <div className=" hidden md:block z-10 bg-white p-2 rounded-full  w-16 h-15 flex items-center justify-center">
                  <img
                    src={exp.icon}
                    alt={exp.company}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                {/* Right Side */}
                {!isLeft ? (
                  <div className="md:w-1/2 md:pl-8 flex justify-start">
                    <div className="bg-card rounded-lg p-6 card-hover">
                      <h3 className="text-2xl font-semibold mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-primary text-lg mb-1 font-semibold">
                        {exp.role}
                      </p>
                      <p className="text-muted-foreground text-sm mb-2 line-clamp-4">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block md:w-1/2">
                    <h3 className="text-lg font-semibold">{exp.tenure}</h3>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
