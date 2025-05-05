$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');

});

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


$('.menu li').on('click', function () {
    $('.menu li').removeClass('active-menu');
    $(this).addClass('active-menu');
})



let slideSwiper = new Swiper(".slideLab-slider", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    speed: 1600,
    allowTouchMove: true,
    on: {
        slideChange: function () {
            // Получаем активный слайд
            const activeSlide = this.slides[this.activeIndex];

            // Проверяем, есть ли у слайда атрибут data-hide-header
            const shouldHideHeader = activeSlide.getAttribute("data-hide-header") === "true";

            if (shouldHideHeader) {
                $(".header").addClass("hide-header");
            } else {
                $(".header").removeClass("hide-header");
            }
        }
    }
});


document.querySelector('header').addEventListener('wheel', function(e) {
    // Создаем новое событие
    let newEvent = new WheelEvent("wheel", e);
    // Отправляем его в swiper container
    document.querySelector('.slideLab-slider').dispatchEvent(newEvent);
});




document.querySelectorAll('[data-slide]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        slideSwiper.slideTo(slideIndex);
    });
});


const innerSwiper = new Swiper('.renowned-slider', {
    direction: 'vertical',
    nested: true,
    mousewheel: true,
    speed: 600,
    slidesPerView: 3,
    on: {
        touchStart: () => {
            slideSwiper.allowSlideNext = false;
            slideSwiper.allowSlidePrev = false;
        },
        reachEnd: () => {
            slideSwiper.allowSlideNext = true;
        },
        reachBeginning: () => {
            slideSwiper.allowSlidePrev = true;
        },
        touchEnd: () => {
            if (!innerSwiper.isBeginning) slideSwiper.allowSlidePrev = false;
            if (!innerSwiper.isEnd) slideSwiper.allowSlideNext = false;
        }
    },

    breakpoints: {

        '2880': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '1940': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '1600': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
    },

});



let businessSwiper = new Swiper(".business-center-slider", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".business-button-next",
        prevEl: ".business-button-prev",
    },
});

let blockSwiper = new Swiper(".block-new-slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".block-button-next",
        prevEl: ".block-button-prev",
    },
});


let gallerySwiper = new Swiper(".gallery-slider", {
    slidesPerView: 3,
    spaceBetween: 24,

    loop: true,
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
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





$('.open-gallery').on('click', function (){
    $('.gallery-box').addClass('gallery-box-active')
})


$('.go-back').on('click', function (){
    $('.gallery-box').removeClass('gallery-box-active')
})





$('.see-more').on('click', function (){
    $('.more-black-new').toggleClass('more-black-new-active')
})





$(document).ready(function () {
    $('.world-renowned-photo').on('click', function () {
        const bg = $(this).css('background-image');
        $('.world-renowned').css('background-image', bg);
    });
});




$(document).ready(function () {
    // При фокусе убираем placeholder, при потере — возвращаем если поле пустое
    $('input').each(function () {
        const $input = $(this);
        const placeholderText = $input.attr('placeholder');

        $input.on('focus', function () {
            $input.attr('placeholder', '');
        });

        $input.on('blur', function () {
            if (!$input.val()) {
                $input.attr('placeholder', placeholderText);
            }
        });
    });
});