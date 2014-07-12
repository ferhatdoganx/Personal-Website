$(window).load(function(){
    var hash = window.location.hash;
    if(hash.length > 0){
        $('header .list-group > a[href=' + hash + ']').trigger('click');
    }    
});
               
$(document).ready(function(){

    $("a[rel*=external]").attr("target", "_blank");
    
    /**
    * Animate
    */
    var animate = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    $('header').removeClass().addClass('bounceInDown animated')
    .one(animate, 
     function(){
        $(this).removeClass();
    });
    
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
    
    $('header .list-group a').click(function(){
        var id      = $(this).attr('href').replace('#','');
        var element = $(this);
        var title   = $(this).html();
        
        if(!$('.content').hasClass('display-none'))
            if(!$('#' + id).hasClass('display-none'))
                return false;
        
        $('.content .panel-body').addClass('display-none');
                
        if(!$('.content').hasClass('display-none')){
            $('header .list-group > a > i.fa-angle-double-right').remove();
            $('header .list-group a').removeClass('active');
            $(element).addClass('active').prepend('<i class="fa fa-angle-double-right right"></i>');
            
            $('.content').removeClass('display-none').addClass('bounceOutDown animated')
            .one(animate, 
             function(){
                 $(this).removeClass().addClass('content display-none');
                 $('.content .panel-heading').html(title);
                 $('.content #'+ id).removeClass('display-none');
                 
                 
                 $('.content').removeClass('display-none').addClass('bounceInUp animated')
                 .one(animate, 
                  function(){
                      $(this).removeClass().addClass('content');
                  });              
             });
        } else {
            $('header').removeClass().addClass('bounceOutRight animated')
            .one(animate, 
             function(){
                 $(this).removeClass();
                 $('header .me').css('margin','8% auto 10px 0');
                 $('header .list-group a').removeClass('active');
                 $('header .list-group > a > i.fa-angle-double-right').remove();
                 $(element).addClass('active').prepend('<i class="fa fa-angle-double-right right"></i>');
                 $('.content .panel-heading').html(title);
                 $('.content #'+ id).removeClass('display-none');

                 $('header').removeClass().addClass('bounceInLeft animated')
                 .one(animate, 
                  function(){
                      $(this).removeClass();

                      $('.content').removeClass('display-none').addClass('bounceInDown animated')
                      .one(animate, 
                       function(){
                           $(this).removeClass().addClass('content');
                       });

                  });

             });
        }
    });
});