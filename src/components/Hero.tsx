import React, { FC } from "react";

interface HeroProps {
  name: string;
  description?: string;
}

const Hero: FC<HeroProps> = ({ name, description }) => (
  <div className="container">
    <h1 className="hero-title load-hidden">
      Hi, my name is <span className="text-color-main">[{name}]</span>
      <br />
      {description}
    </h1>
    <p className="hero-cta load-hidden">
      <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
        Know more
      </a>
    </p>
  </div>
);

export default Hero;
