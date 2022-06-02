//MouseCursor
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav .nav-link");
let featured = document.querySelectorAll(".featured-card .featured");



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
