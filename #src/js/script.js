$(document).ready(function () {
    if ($(window).width() <= '1024') {
        $('.container-slider').removeClass('container-slider')
    }
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
    if ($(window).width() <= '1024') {
        $('.header__menu').addClass('sidenav')
    }
    $('.header__burger-menu').on('click', function () {
        if ($(this).hasClass('change')) {
            $('.header__burger-menu').removeClass('change')
            $('.header__menu').removeClass('width')
            $('.pop-up__wall').removeClass('active')
        } else {
            $('.header__burger-menu').addClass('change')
            $('.header__menu').addClass('width')
            $('.pop-up__wall').addClass('active')
        }
    })

    $('.menu__link').on('click', function () {
        $('.header__mobile').removeClass('change')
        $('.header__menu').removeClass('width')
    })

    /**
     * Определение слайдера преимуществ
     */
    if ($(window).width() <= '1024') {
        $('.benefits__list-slider').slick({
            slidesToShow: 1,
            dots: true,
            arrows: false,
            infinite: false
        })
    }

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
        infinite: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    /**
     * Определение слайдера цен
     */
    if ($(window).width() > '1024') {
        $('.price-slider').slick({
            variableWidth: false,
            variableHeight: false,
            slidesToShow: 3,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"></div>',
            nextArrow: '<div class="arrow-next arrow"></div>',
            infinite: false
        })
    }

    /**
     * Определение слайдера преподавателей
     */
    $('.teachers-slider').slick({
        slidesToShow: 3,
        arrows: true,
        prevArrow: '<div class="arrow-prev arrow"></div>',
        nextArrow: '<div class="arrow-next arrow"></div>',
        infinite: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    })

    /**
     * Кнопка с вопросом
     */
    $(".specialities__ask").hover(function () {
        $(".specialities__ask").removeClass("hidden")
    }, function () {
        $(".specialities__ask").addClass("hidden")
    })

    /**
     * Определение кнопок в блоке документов
     */
    let btnArrows = $(".documents-item__head--btn")
    let docs = $(".documents-item")

    for (let i = 0; i < btnArrows.length; i++) {
        btnArrows[i].addEventListener("click", function () {
            if (docs[i].classList.contains("close"))
                docs[i].classList.remove("close")
            else
                docs[i].classList.add("close")
        })
    }

    /**
     * Показать больше в специальностях
     */
    let showMore = $(".specialities__card-more")
    let cardsMore = $(".specialities__card-with-more")

    for (let i = 0; i < showMore.length; i++) {
        showMore[i].addEventListener("click", function () {
            if (cardsMore[i].classList.contains("show"))
                cardsMore[i].classList.remove("show")
            else
                cardsMore[i].classList.add("show")
        })
    }

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