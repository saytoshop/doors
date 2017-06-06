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
