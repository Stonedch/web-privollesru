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

    const swiper = new Swiper('#productsCarousel', {
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: "#productsCarousel .swiper-button-next",
          prevEl: "#productsCarousel .swiper-button-prev",
        },
    });
});

