import ScrollReveal, { ScrollRevealObject } from "scrollreveal";

// Define types for target elements and animations
interface TargetElement {
  element: string;
  animation: Partial<ScrollRevealObject>;
}

export function initScrollReveal(targetElements: TargetElement[], defaultProps: Partial<ScrollRevealObject>) {
  if (!targetElements.length) return;

  // Initialize ScrollReveal
  ScrollReveal({ reset: false });

  // Apply animations
  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, { ...defaultProps, ...animation });
  });
}
