
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";

gsapTrial.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);

const smoother = ScrollSmoother.create({
  smooth: 1.65,
  effects: true
});

/* Hero */

console.log("JavaScript Connect!");

const splitTitle = new SplitText(".hero__title", { type: "words,chars" });
const chars = splitTitle.chars;

const tlHero = () =>
  gsap
    .timeline()
    .to(chars, {
      opacity: 0,
      y: -100,
      stagger: { from: "random", each: 0.01 }
    })
    .from(
      ".sun__circle",
      {
        yPercent: 10,
        scale: 0.5,
        transformOrigin: "bottom center"
      },
      "<"
    );

ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  end: "bottom top",
  pin: true,
  scrub: 1,
  animation: tlHero()
});

/* Lyrics */

gsap.to(".asterisk__inner", {
  rotate: 360 * 3,
  scrollTrigger: {
    trigger: ".hero",
    endTrigger: ".lyrics",
    start: "top top",
    end: "bottom top",
    scrub: 1
  }
});

/* Marquee */

let tlMarquee = () =>
  gsap
    .timeline()
    .from(".marquee__a", { xPercent: 50 })
    .from(".marquee__b", { xPercent: -50 }, "<");

ScrollTrigger.create({
  trigger: ".marquee",
  start: "top bottom",
  end: "bottom top",
  scrub: 1,
  animation: tlMarquee()
});
