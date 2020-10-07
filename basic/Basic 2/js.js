

$(document).ready(function(){
    $("li").on("click", function(){
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 1000, function(){
            $(this).remove();
        });
    });
})

$("button").on("click", function(){
    var text = $("input").val();
    $("ul").append(`<li class="item">`+text+`</li>`)
    $("li").on("click", function(){
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 1000, function(){
            $(this).remove();
        });
    });
});