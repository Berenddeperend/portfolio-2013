$(document).ready(function(){

    $(".mapmarker").tooltip();


     $(function() {
        $(".goto").click(function() {
          var target = $(this).attr("href");
          target = target.substring(1,target.length);
          $(window).scrollTop($('a[name="'+target+'"]').offset().top - 135); 
          return false; 
        });
    });
});


 