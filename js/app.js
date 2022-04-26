import { gsap } from "../gsap-public/src/all.js";
import { ScrollTrigger } from "../gsap-public/src/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);





//Main Text Rotate
const textrotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

textrotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new textrotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #f47731 }";
  document.body.appendChild(css);
};



// const tlHero = () =>
//   gsap
//     .timeline()
//     .to("top", {
//       opacity: 0,
//       y: -100,
//       stagger: { from: "random", each: 0.01 }
//     })
//     .from(
//       ".sun__circle",
//       {
//         yPercent: 10,
//         scale: 0.5,
//         opacity: 40,
//         transformOrigin: "bottom center"
//       },
//       "<"
//     );

// const tl = gsap.timeline({
//   defaults: { ease: "none", transformOrigin: "50% 50%" },
//   scrollTrigger: {
//     trigger: ".hero",
//     start: "top top",
//     end: "bottom top",
//     scrub: true
//   }
// });

// const nav = document.querySelector("nav");


// tl.to(nav, { y: "-100%", duration: 0.16 }, 0)

// ScrollTrigger.create({
//   trigger: ".hero",
//   start: "top top",
//   end: "bottom top",
//   pin: true,
//   scrub: 1,
//   animation: tlHero()
// });

// gsap.to(".asterisk__inner", {
//   rotate: 360 * 3,
//   scrollTrigger: {
//     trigger: ".hero",
//     endTrigger: ".lyrics",
//     start: "top top",
//     end: "bottom top",
//     scrub: 1
//   }
// });

//featured-work section


//MouseCursor
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav .nav-link");

window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);


function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY + "px";
}



navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    mouseCursor.style.zIndex = "-1";
    link.classList.add("hovered-link");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    mouseCursor.style.zIndex = "1000";
    link.classList.remove("hovered-link");
  });
});


