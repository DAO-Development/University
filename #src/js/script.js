$(document).ready(function () {

    /**
     *  Фиксация header
     */
    // window.onscroll = function () {
    //     myFunction()
    // };
    // var header = document.getElementById("header-top");
    // var sticky = 10;
    // if (window.screen.width <= '768') {
    //     header = document.getElementById("header");
    //     sticky = 0
    // }
    //
    // function myFunction() {
    //     if (window.pageYOffset >= sticky) {
    //         header.classList.add("fixed");
    //     } else {
    //         header.classList.remove("fixed");
    //     }
    // }

    /**
     * Меню на мобильных
     */
    // if ($(window).width() <= '768') {
    //     $('.header__menu').addClass('sidenav')
    // }
    // $('.header__mobile').on('click', function () {
    //     if ($(this).hasClass('change')) {
    //         $('.header__mobile').removeClass('change')
    //         $('.header__menu').removeClass('width')
    //     } else {
    //         $('.header__mobile').addClass('change')
    //         $('.header__menu').addClass('width')
    //     }
    // })
    //
    // $('.menu__link').on('click', function(){
    //     $('.header__mobile').removeClass('change')
    //     $('.header__menu').removeClass('width')
    // })


    /**
     * Кнопка с вопросом
     */
    $(".specialities__ask").hover(function () {
        $(".specialities__ask").removeClass("hidden")
    }, function () {
        $(".specialities__ask").addClass("hidden")
    })

    /**
     * Определение слайдера выпускников
     */
    $('.graduates__photos-slider').slick({
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.graduates__review-slider',
        infinite: false
    });
    $('.graduates__review-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.graduates__photos-slider',
        arrows: true,
        prevArrow: '<div class="arrow-prev arrow"></div>',
        nextArrow: '<div class="arrow-next arrow"></div>',
        centerMode: false,
        // focusOnSelect: true
        infinite: false
    });

    /**
     * Форма для заявки
     */
    // $('.btn').on("click", function () {
    //     $('.pop-up__card').addClass('active')
    //     $('.pop-up__wall').addClass('active')
    // })
    //
    // $('.pop-up__close-btn').on("click", function () {
    //     $('.pop-up__card').removeClass('active')
    //     $('.pop-up__wall').removeClass('active')
    // })
})