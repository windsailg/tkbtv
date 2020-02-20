
$(document).ready(function(){
    
    $('#SideBar').hide();

    //lazy function
    $(".lazy").Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime:300, //duration
        throttle:1000,//delay
        // delay: 20000,
        visibleOnly: true,
        onError: function(element) {
            console.log('lazy error loading' + element.data('src'));
        },
        beforeLoad: function(element) {
            // Create virtual img to set imgs src src
            pureLazyfocusepointer(element);
        },
        afterLoad(element){
            element.parent('.focuspoint').delay(500).focusPoint();
            element.addClass('lazied');
        },
        onFinishedAll(){
            console.log('img Complete');
        },
    });     

    function pureLazyfocusepointer(target){
        var img = new Image();
        img.src = target.data('src');
        var target_focuspoint = target.parent('.focuspoint');
        $(target_focuspoint).attr({
            'data-focus-x':"0.00",
            'data-focus-y':"0.00",
            'data-image-w':img.width,
            'data-image-h':img.height,
        });
    }

    var BannerSwiper = new Swiper('#BannerSwiperBlock', {
        allowTouchMove: true,
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 0,
        loop: true,
        autoHeight: false,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 1,
        },
        autoplay: {
            delay: 10000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var RecommandCourseSwiper = new Swiper('.recommand__course__slider__box', {
        allowTouchMove: true,
        // slidesPerView: 5,
        effect: 'slide',
        spaceBetween: 25,
        // centeredSlides: true,
        loop: false,
        autoHeight: false,
        navigation: {
            nextEl: '.rcmd__swiper__next',
            prevEl: '.rcmd__swiper__prev ',
        },
        breakpoints: {
            0: {//大於等於
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 20,
                initialSlide: 0,
                centeredSlides: true,
            },
            861: {
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 30,
                initialSlide: 1,
            },
            1280: {
                centeredSlides: true,
                slidesPerView: 4,
                spaceBetween: 40,
                initialSlide: 1,
            }

        }
    });

    var CourseTypeTabSwiper = new Swiper('.course__type__tab__block', {
        allowTouchMove: true,
        slidesPerView: 'auto',
        effect: 'slide',
        spaceBetween: 25,
        loop: false,
        autoHeight: false,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 1,
        },
        autoplay: {
            delay: 10000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
    });

    $('.course__type__tab__box').on('click',function(){
        $('.course__type__tab__box').removeClass('course__type__tab__box--active');
        $(this).addClass('course__type__tab__box--active');
        var ActiveTarget = '#' + $(this).attr('data-tab-item');
        console.log(ActiveTarget);
        $('.course__type__main__tab__item').hide();
        $(ActiveTarget).fadeIn(300);
    });

    //header
    $('#HeaderSearchRWDTrigger').on('click',function(){
        if ($('#HeadSerachForm').hasClass('search__active')){
            $('#HeadSerachForm').fadeOut(150);
            $('#HeadSerachForm').removeClass('search__active');
        }else{
            $('#HeadSerachForm').fadeIn(150);
            $('#HeadSerachForm').addClass('search__active');
        }
    });


});


