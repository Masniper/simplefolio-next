import React from "react";

interface SectionWrapperProps {
  id: string; // The ID of the section (e.g., "hero", "about")
  className?: string; // Additional custom class names
  children: React.ReactNode; // The content of the section
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className = "", children }) => (
  <section id={id} className={`section-wrapper ${className}`}>
    <div className="container">{children}</div>
  </section>
);

export default SectionWrapper;
