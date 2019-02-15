$(function (){
   $('body > header .nav_two .nav_bar .nav_item > div').mouseover(function (){
       $('body > header .nav_one .user .form_login:visible').hide();
       $('body > header .nav_one .user .form_subscription:visible').hide();
      
       
       $('body > header .nav_two .nav_bar .nav_item > div').css('background-color','white');
       $('body > header .nav_two .nav_bar .nav_item > div > strong').css('color','black');
       $('body > header .nav_two .nav_bar .nav_item > div .drop_down').attr('src','img/fleche-icon-png-7.png');
       $('body > header .nav_two .nav_bar .nav_item > div > .sub_menu_border:visible').hide();
       $('body > header .nav_two .nav_bar .nav_item > div > .sub_menu:visible').hide();
       
       $('body > header .nav_two .nav_bar .nav_item > div > .mega_menu:visible').hide();
       $(this).find('> .mega_menu').show();
       $(this).css('background-color', '#00d57f');
       $(this).find('> strong').css('color','white'); 
       $(this).find('.drop_down').attr('src','img/fleche-icon-png-7_white.png');
       $(this).find('> .sub_menu_border').show();
       $(this).find('> .sub_menu').show();
   });
   
   $('body > header .nav_two .nav_bar .sub_menu_item > div').mouseover(function (){
       $('body > header .nav_two .nav_bar .sub_menu_item > div > .sub_menu:visible').hide();
       $(this).find('> .sub_menu').show();
   });
   
   $('#login').click(function (){
      $('body > header .nav_one .user .form_subscription:visible').hide();
      $('body > header .nav_one .user .form_login').show();
   });
   $('#sign_up').click(function (){
      $('body > header .nav_one .user .form_login:visible').hide();
      $('body > header .nav_one .user .form_subscription').show();
   });
   
   $('body').children().not('header').mouseover(function (){
      $('body > header .nav_one .user .form_login:visible').hide();
       $('body > header .nav_one .user .form_subscription:visible').hide();
      
       
       $('body > header .nav_two .nav_bar .nav_item > div').css('background-color','white');
       $('body > header .nav_two .nav_bar .nav_item > div > strong').css('color','black');
       $('body > header .nav_two .nav_bar .nav_item > div .drop_down').attr('src','img/fleche-icon-png-7.png');
       $('body > header .nav_two .nav_bar .nav_item > div > .sub_menu_border:visible').hide();
       $('body > header .nav_two .nav_bar .nav_item > div > .sub_menu:visible').hide();
       
       $('body > header .nav_two .nav_bar .nav_item > div > .mega_menu:visible').hide();
   });
   
   
   $('.menu_icon').click(function (){
      $('.mobile_backgroud_effect').show();
      $('body > header .nav_two .nav_bar').css('left','100px');
      $('body > header .nav_two .nav_bar').show();
      $('body > header .nav_two .nav_bar').animate({
           left: '0'
       },200);
   });
   $('.mobile_backgroud_effect').click(function (){
      $('body > header .nav_two .nav_bar').animate({
           left: '100px'
       },200,function (){
           $('body > header .nav_two .nav_bar').hide();
           $('.mobile_backgroud_effect').hide();
       });
   });
});