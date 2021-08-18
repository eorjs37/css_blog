//1.gnb 마우스오버, 포커스시 밑줄 => span.bar
$(function () {
    $('.gnb li a').on('mouseenter focus', function () {
        var left = $(this).position().left;
        var width = $(this).width();
        $('span.bar').css({left:`${left}px`,width:`${width}px`,opacity:1})
    })
})