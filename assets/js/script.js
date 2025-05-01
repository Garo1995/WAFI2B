$(document).ready(function () {
    setTimeout(function () {
        $(".tagilskaya-sec").addClass("tagilskaya-act");
    }, 800);
    setTimeout(function () {
        $(".home-page").addClass("home-main-active");
    }, 4000);
});


$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.header-menu').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.header-menu').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.header-menu').removeClass('transition-menu');
        }
    });
    $('.header-menu a').on('click', function () {
        $('.header-menu').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.header-menu').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});




let slideSwiper = new Swiper(".slideLab-slider", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 1,
    mousewheel: true,
    speed: 2000,

});


let businessSwiper = new Swiper(".business-center-slider", {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: true,
    navigation: {
        nextEl: ".business-button-next",
        prevEl: ".business-button-prev",
    },
});

let blockSwiper = new Swiper(".block-new-slider", {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: ".block-button-next",
        prevEl: ".block-button-prev",
    },
});




$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
});
$('.close').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});

$('.close-this').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});

$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});







