$(document).ready(() => {

    $('#masters-photo').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
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
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 760,
                settings: {
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
    })

    $('#header-container a, #territory').click(() => {
        $('#header-menu').removeClass('menu-open')
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

        if (name.val() && phone.val() && ritual.val() && timeDate.val()) {
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
            $('.input').css('border-color', 'red')
        }
    })



    $('#my-number').click(() => {
        let number = $('#number');

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
            number.css('border-color', 'red')
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