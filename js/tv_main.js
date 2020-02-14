
$(document).ready(function(){
       

    $('#SideBar').hide();

    $(".lazy").Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime:300, //duration
        throttle:1000,//delay
        //delay: 2000,
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
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

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

