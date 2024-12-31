import ScrollReveal, { ScrollRevealObjectOptions } from "scrollreveal";

// Define types for target elements and animations
interface TargetElement {
  element: string;
  animation: Partial<ScrollRevealObjectOptions>;
}

export function initScrollReveal(targetElements: TargetElement[], defaultProps: Partial<ScrollRevealObjectOptions>) {
  if (!targetElements.length) return;

  // Initialize ScrollReveal
  ScrollReveal({ reset: false });

  // Apply animations
  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, { ...defaultProps, ...animation });
  });
}
