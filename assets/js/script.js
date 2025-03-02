$('.xmark-icon').hide();
$('.menu-bar .menu-tabs').on('click', function () {
    $('.quick-links').show();
    // $('.quick-links').animate({ top: '4.5rem' });
    if ($(window).width() <= 768) {
        $('.quick-links').animate({ top: '4.7rem' });
    }
    else if ($(window).width() > 768) {
        $('.quick-links').animate({ top: '5.7rem' });
    }
    $('.menu-tabs').hide();
    $('.xmark-icon').show();
})
$('.xmark-icon').on('click', function () {
    $('.quick-links').hide();
    $('.quick-links').animate({ top: '-6.5rem' });
    $('.menu-tabs').show();
    $('.xmark-icon').hide();
})

$('.quick-links li a').click(function () {
    $('.quick-links .tabs').removeClass("active ");
    $(this).addClass("active ");
});