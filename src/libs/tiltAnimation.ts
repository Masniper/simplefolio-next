import VanillaTilt from "vanilla-tilt";

export default function initTiltEffect(): void {
  const elements = document.querySelectorAll<HTMLElement>(".js-tilt");
  const elementArray = Array.from(elements);
  VanillaTilt.init(elementArray);
}
