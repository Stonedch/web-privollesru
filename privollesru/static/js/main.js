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
});

