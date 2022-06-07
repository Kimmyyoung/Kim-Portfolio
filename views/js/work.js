
// work page work-grid
$(document).ready(function(){
    $('.work-btn').click(function(){
      const value= $(this).attr('data-filter');
      if (value == 'all'){
        $('.box').show('1000');
      }else if(value == 'development'){
        $('.development').show('1000');
      }else if(value == 'design'){
        $('.design').show('1000');
      }
     
      $('.box').not('.'+value).hide('1000');
      $('.box').work('.'+value).show('1000');
  
    })
  })
  
  // add active class on selected tab
  $('.work-btn').click(function(){
    $(this).addClass('work-active').siblings().removeClass('work-active');
  })
  
    
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

