  $(document).ready(function(){
    $("body").smoothWheel()
  });

  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(".nav .nav-link");

  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  
  function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
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





function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="hero_cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".hero__title");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}

$(document).ready(function(){
  // Now to start autoTyping just call the autoType function with the 
  // class of outer div
  // The second paramter is the speed between each letter is typed.   
  autoType(".type-js",200);
});