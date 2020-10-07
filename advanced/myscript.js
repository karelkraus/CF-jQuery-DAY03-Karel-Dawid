$(document).bind('mousemove', function(e){
   $('#moveme').css({
     top: e.pageY - $("#moveme").height()/2, // just minus by half the height
     left:  e.pageX - $("#moveme").width()/2, // just minus by half the width
   });
 });


$(function() {
$("#moveme").click(function(e) {
    var o = {
        left: e.pageX - 12.5,
        top: e.pageY - 12.5            
    };
    $("#moveme").clone().appendTo('body').offset(o).fadeOut(3000).fadeIn(3000);
});
});

/*let moveme = document.getElementById('moveme');
const onMouseMove = (e) =>{
  moveme.style.left = e.pageX + 'px';
  moveme.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);
*/