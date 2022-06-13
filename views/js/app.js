//------ All Page + Project Page --------


//MouseCursor
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav .nav-link");
let featured = document.querySelectorAll(".featured-card .featured");
let workbtn = document.querySelectorAll(".filter .work-btn");
let workcard = document.querySelectorAll(".box");
let aboutlinks = document.querySelectorAll(".about-links");

window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);


function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY + "px";
}



navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    mouseCursor.style.zIndex = "3";
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    mouseCursor.style.zIndex = "1000";
  });
});


featured.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow-2");
    mouseCursor.style.zIndex = "1";
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow-2");
    mouseCursor.style.zIndex = "1000";
  });
});

workbtn.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    mouseCursor.style.zIndex = "1";
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    mouseCursor.style.zIndex = "1000";
  });
});

workcard.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow-2");
    mouseCursor.style.zIndex = "1";
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow-2");
    mouseCursor.style.zIndex = "1000";
  });
});


aboutlinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow-3");
    mouseCursor.style.zIndex = "1";
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow-3");
    mouseCursor.style.zIndex = "1000";
  });
});

// Mobile Menu 
const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-items');


menu.addEventListener('click', () => {
  //nav.style.transform = "translateX(0%)";
  nav.classList.toggle('.nav-active');
});

// Transforming to close btn
$(".hamburger").click(function(){
  $(".hamburger").toggleClass("close");
  $(".nav-items").toggleClass("nav-active");
});

  