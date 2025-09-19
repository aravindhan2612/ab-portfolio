import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ConfigProvider, FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <StarBackground />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <ConfigProvider
        theme={{
          components: {
            FloatButton: {
              colorPrimary: "#80c774",
              colorPrimaryHover: "#80c774",
            },
          },
        }}
      >
        <FloatButton.BackTop
          type="primary"
          className="hover:scale-120"
          icon={<ArrowUpOutlined />}
        />
      </ConfigProvider>
    </div>
  );
};
