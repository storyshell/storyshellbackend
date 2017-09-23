$( document ).ready(function(){
    $(".icon_close").click(function(){
        $( this ).closest(".chat-window").remove();
    });
});

$(document).on('click', '.icon_minim', function (e) {
    var toHide = $( this ).closest(".chat-window").find(".chat-body");
    if (toHide.hasClass("panel-hidden")){
        toHide.removeClass("panel-hidden");
        toHide.slideUp();
    }else{
        toHide.addClass("panel-hidden");
        toHide.slideDown();
    }
});