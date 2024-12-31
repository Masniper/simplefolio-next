import { ScrollRevealObjectOptions } from "scrollreveal";

// Default properties for animations
export const defaultProps: Partial<ScrollRevealObjectOptions> = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

// Function to dynamically generate target elements
export const getTargetElements = () => {
  if (typeof window === "undefined") {
    // Return an empty array to avoid server-side issues
    return [];
  }

  const isWideScreen = window.innerWidth > 768;

  return [
    {
      element: ".section-title",
      animation: {
        delay: 300,
        distance: "0px",
        origin: "bottom",
      },
    },
    {
      element: ".hero-title",
      animation: {
        delay: 500,
        origin: isWideScreen ? "left" : "bottom",
      },
    },
    {
      element: ".hero-cta",
      animation: {
        delay: 1000,
        origin: isWideScreen ? "left" : "bottom",
      },
    },
    {
      element: ".about-wrapper__image",
      animation: {
        delay: 600,
        origin: "bottom",
      },
    },
    {
      element: ".about-wrapper__info",
      animation: {
        delay: 1000,
        origin: isWideScreen ? "left" : "bottom",
      },
    },
    {
      element: ".project-wrapper__text",
      animation: {
        delay: 500,
        origin: isWideScreen ? "left" : "bottom",
      },
    },
    {
      element: ".project-wrapper__image",
      animation: {
        delay: 1000,
        origin: isWideScreen ? "right" : "bottom",
      },
    },
    {
      element: ".contact-wrapper",
      animation: {
        delay: 800,
        origin: "bottom",
      },
    },
  ];
};
