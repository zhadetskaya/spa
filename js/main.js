$(document).ready(() => {

    $('#masters-photo').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('#gallery-photo').slick({
        infinite: true,
        // centerMode: true,
        // variableWidth: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    centerMode: true,
                    variableWidth: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    $(function () {
        $("#accordion").accordion();
    });

    $('.header-item').click((e) => {
        let currentElement = $(e.target);
        $('.header-item').removeClass('active');
        currentElement.addClass('active');
    })



    $('#burger').click(() => {
        $('#header-menu').toggleClass('menu-open');
        $('body').css('position', 'fixed')
    })

    $('#header-container a, #territory, #close').click(() => {
        $('#header-menu').removeClass('menu-open');
        $('body').css('position', 'static')
    })

    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'flex')
    });
    $('#reserve-close, #reserve-closes, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reserve-close' || e.target.id === 'reserve-closes') {
            $('#reservation-container').hide();
        }
    });

    $('#reserve-button').click(() => {
        let name = $('#name');
        let phone = $('#phone');
        let ritual = $('#ritual');
        let timeDate = $('#time-date');

        name.css('border-color', 'rgb(114, 17, 99)');
        phone.css('border-color', 'rgb(114, 17, 99)');
        ritual.css('border-color', 'rgb(114, 17, 99)');
        timeDate.css('border-color', 'rgb(114, 17, 99)');

        $('#reserve-error').show();
        let hasError = false;
        $('#reserve-error').hide();
        if (!name.val()) {
            $('#reserve-error').show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!phone.val()) {
            $('#reserve-error').show();
            phone.css('border-color', 'red');
            hasError = true;
        }
        if (!ritual.val()) {
            $('#reserve-error').show();
            ritual.css('border-color', 'red');
            hasError = true;
        }
        if (!timeDate.val()) {
            $('#reserve-error').show();
            timeDate.css('border-color', 'red');
            hasError = true;
        }

        // if (name.val() && phone.val() && ritual.val() && timeDate.val()) {
        if (!hasError) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val() + '&ritual=' + ritual.val() + '&timeDate=' + timeDate.val(),
                success: () => {
                    $('#reservation-sent').show();
                    $('#reservation-content').hide();
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.')
                }
            });
        } else {
            $('#reserve-error').show();
        }
    })



    $('#my-number').click(() => {
        let number = $('#number');

        let hasError = false;
        $('#call-error').hide();
        if (!number.val()) {
            $('#call-error').show();
            name.css('border-color', 'red');
            hasError = true;
        }

        if (number.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'number=' + number.val(),
                success: () => {
                    $('#call-me-success').show();
                    $('#call-me-order').hide();
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.')
                }
            });
        } else {
            $('#call-error').show();
            // number.css('border-color', 'red')
        }
    })

    new WOW({
        animateClass: 'animate__animated '
    }).init();
    $('.photo-master').magnificPopup({
        type: 'image'
        // other options
    });

})