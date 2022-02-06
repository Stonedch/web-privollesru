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
    const swiper = new Swiper('#productsCarousel', {
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});

