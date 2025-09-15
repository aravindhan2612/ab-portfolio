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
    company: "Infosys",
    roles: [
      {
        name: "Lead Technical Developer",
        tenure: "December 2024 - Present",
      },
    ],
    description:
      "At Infosys, developed and maintained the reusable UI components using jetpack compose for the client T-Mobile. Also contributed and supported to migrating the old UI design system to new UI design system. Actively contributed to code reviews, agile sprint planning and mentored Junior developers.",
    icon: "/ab-portfolio/projects/infosys.png", // Replace with your own icons
  },
  {
    company: "EMIS Health",
    roles: [
      {
        name: "Software Development Engineer",
        tenure: "April 2024 - December 2024",
      },
      {
        name: "Junior Software Development Engineer",
        tenure: "November 2021 - March 2024",
      },
      {
        name: "Associate Engineer",
        tenure: "May 2019 - October 2021",
      },
    ],
    description:
      "At Emis, I had the opportunity to learn Android development, where I worked on and successfully deployed over three applications in the healthcare domain. Additionally, I explored and gained experience with multiple tech stacks and programming languages, including Kotlin, Java, Typescript, React Native, Redux, Sqlite, Room DB, Firebase, MVVM and web development.",
    icon: "/ab-portfolio/projects/emis.png",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="flex bg-card p-6">
          <ParentStepper />
        </div>
      </div>
    </section>
  );
};

const ParentStepper: React.FC = () => {
  return (
    <div>
      {experiences.map((exp, index) => {
        return (
          <div key={index} className="relative ">
            <div key={index} className="flex flex-row  gap-2">
              <div className=" hidden md:block absolute mx-3.5 my-2 h-full w-1 bg-gray-400"></div>
              <div className="hidden md:block z-10">
                <div className=" mx-2 md:m-2 rounded-full bg-white  w-4 h-4 ring-3 ring-blue-400" />
              </div>

              <div className="flex justify-between mb-12 w-full items-center gap-1">
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {exp.company}
                  </h3>
                  <ChildStepper roles={exp.roles} />
                  <p className="text-xs md:text-sm mb-2">{exp.description}</p>
                </div>
                <div className="hidden md:block">
                  <img src={exp.icon} className="w-30 h-full bg rounded" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface ChildStepperProps {
  roles: Roles[];
}
const ChildStepper: React.FC<ChildStepperProps> = (
  props: ChildStepperProps
) => {
  return props.roles.map((exp, index) => {
    return (
      <div key={index} className="relative ">
        <div key={index} className="flex flex-row  gap-2">
          {index < props.roles.length - 1 && (
            <div className=" hidden md:block absolute mx-3.5 my-2 h-full w-1 bg-gray-400"></div>
          )}
          {props.roles.length > 1 && (
            <div className="z-10  hidden md:block">
              <div className=" mx-2 md:m-2 rounded-full bg-white  w-4 h-4 ring-3 ring-blue-400" />
            </div>
          )}

          <div className="flex">
            <div className="text-left">
              <h3 className="text-primary text-xs md:text-lg mb-1 font-semibold">
                {exp.name}
              </h3>
              <h3 className="text-gray-400 text-xs mb-2 font-semibold">
                {exp.tenure}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
