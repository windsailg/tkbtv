

$(document).ready(function(){

   btnFunctionheader()

   function btnFunctionheader(){

      $('#HeaderLogin').click(function(){
         LightingBoxOpening();
         $('#LoginBlock').show();
         
      })

      $('#HEaderRegister').click(function(){
         LightingBoxOpening();
         $('#RegisterBlock').show();
         
      })

      //全域關閉
      $('.lightingbox_mask , .btn_close').click(function(){
         LightingBoxClosing();

      })

   }


   function LightingBoxOpening(BoxType){
      // $('#LightingBox').fadeIn(200);
      //noscroll.bind();
      let target = $('#LightingBox');
      target.hide().children('.lightingbox_wrap').removeClass('isopen').css({'transform':'scale(0)'});
      target.fadeIn(100).children('.lightingbox_wrap').addClass('isopen').animate({
               'opacity': '1'
            }, 200, function () {
         $('#LightingBox .lightingbox_wrap').css({'transform':'scale(1)'});
      });
      $('body').css({
         'overflowY':'hidden', 
      })
   }
   function LightingBoxClosing(BoxType){
      $(' .lightingbox, .user_lr').delay(50).hide();
      $('body').css({
         'overflowY': 'scroll',
      })
      //noscroll.unbind();
   }


});
