"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/libs/scrollReveal";
import initTiltEffect from "@/libs/tiltAnimation";
import { targetElements, defaultProps } from "@/constants/scrollRevealConfig";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SectionWrapper from "@/components/SectionWrapper";
import data from "@/constants/userData.json";

const HomePage: React.FC = () => {
  useEffect(() => {
    initScrollReveal(targetElements, defaultProps);
    initTiltEffect();
  }, []);

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
