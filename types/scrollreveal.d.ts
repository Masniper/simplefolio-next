declare module "scrollreveal" {
    interface ScrollRevealRotateObject {
        x?: number;
        y?: number;
        z?: number;
    }

    interface ScrollRevealPositionObject {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    interface ScrollRevealObjectOptions {
      origin?: string;
      distance?: string;
      duration?: number;
      delay?: number;
      interval?: number;
      rotate?: ScrollRevealRotateObject;
      opacity?: number;
      scale?: number;
      easing?: string;
      cleanup?: boolean;
      container?: any;
      mobile?: boolean;
      desktop?: boolean;
      reset?: boolean;
      useDelay?: string;
      viewFactor?: number;
      viewOffset?: ScrollRevealPositionObject;
      beforeReveal?(domEl: HTMLElement | NodeListOf<Element>): void;
      afterReveal?(domEl: HTMLElement | NodeListOf<Element>): void;
      beforeReset?(domEl: HTMLElement | NodeListOf<Element>): void;
      afterReset?(domEl: HTMLElement | NodeListOf<Element>): void;
    }

    interface ScrollRevealObject {
        clean(selector: string | HTMLElement | NodeListOf<Element>): void;
        destroy(): void;
        reveal(
            selector: string | HTMLElement | NodeListOf<Element>,
            options?: ScrollRevealObjectOptions,
        ): ScrollRevealObject;
        sync(): void;
    }

    const ScrollReveal: {
        (): ScrollRevealObject;
        (options: ScrollRevealObjectOptions): ScrollRevealObject;
    };

    export default ScrollReveal;
    export type { ScrollRevealObject, ScrollRevealObjectOptions };
}
