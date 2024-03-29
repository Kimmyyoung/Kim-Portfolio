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
  
  

  
// // Mobile Menu 
// const menu = document.querySelector('.hamburger');
// const nav = document.querySelector('.nav-items');


// menu.addEventListener('click', () => {
//   //nav.style.transform = "translateX(0%)";
//   nav.classList.toggle('.nav-active');
// });

// // Transforming to close btn
// $(".hamburger").click(function(){
//   $(".hamburger").toggleClass("close");
//   $(".nav-items").toggleClass("nav-active");
// });

  
/*----------------- Loading Page ------------------- */  
  
  let navbarhid = function(){
    document.getElementsByClassName("navbar")[0].style.visibility = "hidden";
  }
  
  let navbarshw = setTimeout(function(){
    document.getElementsByClassName("navbar")[0].style.visibility = "visible";
  },2500);
  
  let loading = setTimeout(function() { 
    document.getElementById("loading-page").className += "loaded";
    document.getElementById("loader").className += "opzero";
    document.getElementById("lastray").className += " finalray";
    document.body.className += "whitebk";
    navbarshw();
  },2000);
  
    navbarhid();
    loading();
  

    

  
  
  
  