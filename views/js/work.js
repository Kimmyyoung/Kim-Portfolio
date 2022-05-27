
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
  
  