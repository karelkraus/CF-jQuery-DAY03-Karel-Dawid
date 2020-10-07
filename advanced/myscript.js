$(document).bind('mousemove', function(e){
   $('#moveme').css({
     top: e.pageY - $("#moveme").height(), 
     left:  e.pageX - $("#moveme").width(), 
   });
 });

$(function() {
$("#moveme").click(function() {
    $("#moveme").clone().appendTo('body').fadeOut(3000).fadeIn(3000);
});
});