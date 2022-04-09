function showFeedbackForm() {
    Fancybox.show([{
        src: "#fancyboxFeedbackForm",
        preload: true,
    }]);
}

function showMessage(message) {
    $('#message #messageContent').text(message);
    Fancybox.show([{
        src: "#message",
        preload: true,
    }]);
}

function sendAjaxForm(form, url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data: $(form).serialize(),
        statusCode: {
            201: function (response) {
                showMessage('Заявка была отправлена!');
            },
            400: function (response) {
                showMessage('Данные заполнены некорректно!');
            }
        }
    });
}

$(document).ready(function () {
    $('#footerFeedbackForm #phoneNumber').mask("+7 (999) 999-99-99");
    $('#exportFeedbackForm #phoneNumber').mask("+7 (999) 999-99-99");
    $('#fancyboxFeedbackForm #phoneNumber').mask("+7 (999) 999-99-99");

    $('.resp-menu .resp-menu__header').each(function (key, value) {
        $(value).click(function () {
            if ($(this).parent().find('.resp-menu__content').hasClass('resp-menu__content_hidden')) {
                $(this).parent().find('.resp-menu__icon').css({transform: 'rotate(45deg)'});
                $(this).parent().find('.resp-menu__content').fadeIn(function () {
                    $(this).parent().find('.resp-menu__content').removeClass('resp-menu__content_hidden');
                });
            } else {
                $(this).parent().find('.resp-menu__icon').css({transform: 'rotate(0)'});
                $(this).parent().find('.resp-menu__content').fadeOut(function () {
                    $(this).parent().find('.resp-menu__content').addClass('resp-menu__content_hidden');
                });
            }
        });
    });

    const productsCarousel = new Swiper('#productsCarousel', {
        speed: 400,
        spaceBetween: 10,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoHeight: true,
        navigation: {
          nextEl: "#productsCarousel .swiper-button-next",
          prevEl: "#productsCarousel .swiper-button-prev",
        },
    });

    const clientsCarousel = new Swiper('#clientsCarousel', {
        speed: 400,
        spaceBetween: 10,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            900: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [56.32096154775088, 44.00040879833978],
            zoom: 11,
            controls: [''],
        });
        multiRoute.editor.stop();
        myMap.geoObjects.add(multiRoute);
    });
});

