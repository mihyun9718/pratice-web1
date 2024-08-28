$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrolltop: 0 }, 1000)
    })
});

$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        pauseOnHover: false,
        useTransform: false
    });

    $('.main_visual_slide').on('afterChange', function (e, s, c) {
        $('main_visual .lnk li').removeClass('on');
        $('main_visual .lnk li').eq(c).addClass('on')
    });

    $('.main_visual .arrow .prev').on('click', function () {
        $('.main_visual_slide').slick('slcikPrev')
    });

    $('main_visual .arrow .next').on('click', function () {
        $('.main_visual_slide').slick('slckNext')
    });

});

$(function () {
    $('.main_product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
    });
});

$(function () {
    $('#flnk').on('change', function () {
        const lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
});

$(function () {
    $('.main_promotion .left .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();

        $('.main_promotion .left .tab_content .itm')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .parent()
            .addClass('on')
            .siblings()
            .removeClass('on')
    })
})