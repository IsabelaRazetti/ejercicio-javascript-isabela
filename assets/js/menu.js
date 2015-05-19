$(document).ready(function(){
$('li').click(function(e){
    e.preventDefault();
    if($(this).hasClass('current-menu-item')){
    $(this).removeClass('current-menu-item');
        }
    else{
        $('li').removeClass('current-menu-item');
        $(this).addClass('current-menu-item');
}
});
    $("li").hover(function() {
     $(this).find('ul').fadeToggle('1000');
    });
 });

$(document).ready(function(){
        $("#mobile-button").on( "click", function() {
            $('#menu-container').show();
            $('#mobile-close').show();
            $('#mobile-button').hide();
         });

        $("#mobile-close").on( "click", function() {
            $('#menu-container').hide();
            $('#mobile-close').hide();
            $('#mobile-button').show();
        });

        /* e intentado corregir el error del resposive que al llegar a desktop se quitara la hamburguesa (ya que antes me quedaban ambos logos)*/
        $(window).resize(function(){
         if ($(window).width() > 900) {
        $('#mobile-close').hide();
        $('#mobile-button').hide();
       }
       else{
        $('#mobile-close').hide();
        $('#mobile-button').show();
       }
    });
    });