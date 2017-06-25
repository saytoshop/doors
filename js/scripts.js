$('.scrollToTop').click(function(e) {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    e.preventDefault()
});
$(window).scroll(function() {
    var top_scroll = $(document).scrollTop();
    if ($(this).scrollTop() >= 300) $('.scrollToTop').slideDown();
    else $('.scrollToTop').slideUp();

});


var menu_selector = ".menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

function onScroll() {
    var scroll_top = $(document).scrollTop() + 100;

    $(menu_selector + " a").each(function() {
        var hash = $(this).attr("href");
        if (hash == "#") return;
        if (hash.substring(0, 3) == "tel") return;
        if (hash.substring(0, 6) == "mailto") return;
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });

}


$(document).on("scroll", onScroll);

$(menu_selector + " a").click(function(e) {

    e.preventDefault();

    $(document).off("scroll");
    $(menu_selector + " a.active").removeClass("active");

    var hash = $(this).attr("href");
    var target = $(hash);
    var d = $(".top").height()+30;

    $("html, body").animate({
        scrollTop: target.offset().top - d
    }, 500, function() {
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
    });
    $(this).addClass("active");


});
$('.slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 639,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
]
});

$(".triggers a").click(function(e) {
    e.preventDefault();
    var t = $(this).data("t");
    $('.slider').slick('slickUnfilter');
    if (t != "all") $('.slider').slick('slickFilter', '.' + t);
});




$(".calc a").click(function(e) {
    e.preventDefault();

    var c = $(this).siblings(".count");
    var cnt = Number($(c).data("v")) - 1;
    if ($(this).hasClass("plus")) cnt = cnt + 2;
    if (cnt > -1) {
        var v = $(this).siblings(".value");
        var vl = Number($(v).data("v"));
        var b = Number($(v).data("b"));
        $(c).data("v", cnt);
        $(v).data("v", b * cnt);
        $(c).html(cnt);
        $(v).html(b * cnt);
        if (cnt == 0) {
            $(v).html(b);
        }
    }
    var total = 0;
    $(".value").each(function() {
        total = total + Number($(this).data("v"));
    });
    $("#total-value").html(total).data("v", total);
});

$(".total a").click(function(e) {
    e.preventDefault();

    var total = $("#total-value").data("v");
    $("#send-total").val(total);
    $(".st span").html(total);
    $("#layer").addClass("active");
});

$(".close").click(function(e) {
    e.preventDefault();
    $("#layer").removeClass("active");
});

$(".mm").click(function(e) {
  $(".menu").toggleClass("active");
});
$("body").on( "click", ".menu.active a","click", function() {
  $(".menu").removeClass("active");
});
