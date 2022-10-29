jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel touchmove", function (event) {
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();
                positionX =  $(this).scrollLeft();
           
                console.log(position);
            ;
            const container = document.querySelector('#box')
               var me_ofset =  document.getElementById('box');
               x = container.scrollLeft = '0' ;
               console.log(x);
               position += direction > 0 ? -amount : amount;
               $(this).scrollLeft(position);
               event.preventDefault();
            
               if(position <= x ){
                $("#me2d").attr("src","images/go_left1.png");
            
                if(position >x ){
                    $("#me2d").attr("src","images/me_wal2.png");
                }
               }
               if(position >x ){
                $("#me2d").attr("src","images/me_walk.png");
            
               }

               var _scrollTimeout = null;
               clearTimeout(_scrollTimeout);
               _scrollTimeout = setTimeout(function() {
                   console.log("Haven't scrolled in 1s");
                   $("#me2d").attr("src","images/me_walk2.png");

               }, 200);
          
        
               var _scrollTimeout = null;
               clearTimeout(_scrollTimeout);
               _scrollTimeout = setTimeout(function() {
                   console.log("Haven't scrolled in 1s");
                   $("#me2d").attr("src","images/me_walk3.png");

               }, 250);
 
               var _scrollTimeout = null;
               clearTimeout(_scrollTimeout);
               _scrollTimeout = setTimeout(function() {
                   console.log("Haven't scrolled in 1s");
                   $("#me2d").attr("src","images/me.png");

               }, 350);

               if(position >3475){
                window.scrollTo( 0,1000);        
                    //  $('html,body').animate({
                    //         scrollTop: $("#me").offset().top},
                    //         'slow');

                    $('#me').css({border:'3px solid #eee',borderRadius:'300px',padding:'20px',backgroundColor: 'rgba(90,42,205,0.5)'});
                    $('.submarine').css({top: '-2500px', position:'relative'});
                    $('#bubbles').css({display:'block'});
               }
              if(position<3499 && position <=0){
                
                $('html,body').animate({
          scrollTop: 0},
          'slow');
         }
         //     $('html,body').animate({
        //         scrollTop: $("#me").offset().top},
        //         'slow');
         
          
            if (position > 3499) {
                $('#me').addClass('me');
                $('#me').slideDown(1000);

                 $('#me2d').css({top: '0px', position:'relative'});

           
            } else {
        
                //$('#me2d').slideUp(300);
                $('#me').removeClass('me');
                $('#me2d').css({top: '0px', position:'relative'});
                $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'0px',backgroundColor: 'rgba(0,0,0,0)'});
                $('#bubbles').css({display:'none'});
            }

            if (position < 3499){
                
                $('#me').css({top: '340px', position:'fixed'})
                //    $('html,body').animate({
                //     scrollTop: $("#me").offset().top},
                //     'slow');
                $('.submarine').css({top: '-3350px', position:'relative'});
                $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'0px',backgroundColor: 'rgba(0,0,0,0)'});
                window.scrollTo( 0,0);   

            }
          

            if (position > 5200){

                $('#me2d').css({top: '0px', position:'relative'});
                $('.submarine').css({top: '-3350px', position:'relative'});
              //  $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'0px',backgroundColor: 'rgba(0,0,0,0)'});
                window.scrollTo( 0,0);   
                $('#me').removeClass('me');
                $('#bubbles').css({display:'none'});
            }
            if (position > 5280){
                $('#me').css({border:'0px solid white',borderRadius:'300px',padding:'0px',backgroundColor: 'rgba(0,0,0,0)'});   
            }
        else if(position <= 5200 && position>=3499){
            $('.submarine').css({top: '-2500px', position:'relative'});
            //$('#me2d').slideUp(300);
            $('#me2d').css({top: '0px', position:'relative'});
            $('#me').addClass('me');
            $('#bubbles').css({display:'block'});
        }
             
            // if (position >=0 && position < 3799){
            //     $('#me').css({top: '305px', position:'fixed'})
            //    $('html,body').animate({
            //     scrollTop: $(".scene2").offset().top},
            //     'slow');
           
            //     }
                //$('#me').css({top: '305px', position:'fixed'});
                if (position > 900) {
                     $('.greet').slideDown(300);
                   // alert('hello');
                 } else {
                      $('.greet').slideUp(300);
                 }
                 if (position > 2200) {
                    $('.educ').slideDown(500);
                  // alert('hello');
                } else {
                     $('.educ').slideUp(500);
                }

                if (position > 2200) {
                    $('#cloud1').css({position:'absolute'});
                  // alert('hello');
                } 
                if (position > 2200) {
                    $('#cloud2').css({position:'absolute'});
                  // alert('hello');
                } 

                 if (position >3490) {
                    $('.submarine').fadeIn(200);
                    $('.submarine').css({zIndex:'99'});
                  $('.submarine').animate({left:'20px'},960);
                  // alert('hello');

                } 
           if(position >= 3600) {
              
                $('.submarine').animate({left:'1120px'},960);
                // $('.submarine').fadeOut(300);
                 }

        
        })
       
       
    };
});

$(document).ready(function() {
    $('#box').hScroll(60); // You can pass (optionally) scrolling amount
});


// $(document).scroll(function () {
//     var y = $(this).scrollLeft();
//     if (y > 900) {
//        // $('.greet').slideDown(300);
//        alert('hello');
//     } else {
//         // $('.bottomMenu').slideUp(300);
//     }

// });


     