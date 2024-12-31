"use client";

import { useEffect, useState } from "react";
import { defaultProps } from "@/constants/scrollRevealConfig";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SectionWrapper from "@/components/SectionWrapper";
import data from "@/constants/userData.json";
import Header from "@/components/Header";

const HomePage: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(data["Theme"]);

  useEffect(() => {
    // Dynamically import utilities and execute on the client
    (async () => {
      if (typeof window !== "undefined") {
        const { initScrollReveal } = await import("@/libs/scrollReveal");
        const initTiltEffect = (await import("@/libs/tiltAnimation")).default;
        const { getTargetElements } = await import("@/constants/scrollRevealConfig");

        const targetElements = getTargetElements();

        if (targetElements.length > 0) {
          initScrollReveal(targetElements, defaultProps);
          initTiltEffect();
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }
  }, [selectedTheme]);

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

  const sections = [
    {
      id: "hero",
      component: (
        <Hero name={data.hero.name} description={data.hero.description} />
      ),
      className: "jumbotron",
    },
    {
      id: "about",
      component: (
        <About
          profileImage={data.about.profileImage}
          description={data.about.description}
          resumeLink={data.about.resumeLink}
        />
      ),
    },
    { id: "projects", component: <Projects projects={data.projects} /> },
    {
      id: "contact",
      component: (
        <Contact
          callToAction={data.contact.callToAction}
          email={data.contact.email}
        />
      ),
    },
  ];

  return (
    <div>
      {/* Header Component: Uncomment this section to enable theme preview and switching functionality. */}
      {/* <Header
        selectedTheme={selectedTheme}
        onThemeChange={handleThemeChange}
      /> */}
      <div id="top"></div>
      {sections.map(({ id, component, className }) => (
        <SectionWrapper key={id} id={id} className={className || ""}>
          {component}
        </SectionWrapper>
      ))}
    </div>
  );
};

export default HomePage;
