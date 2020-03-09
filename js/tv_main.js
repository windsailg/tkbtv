

$(document).ready(function(){

    //lazy function

});


    runlazy();

    function runlazy(fp_delay){

        $(".lazy").Lazy({
            scrollDirection: 'vertical',
            effect: 'fadeIn',
            effectTime: 300, //duration
            throttle: 1000, //delay
            // delay: 20000,
            visibleOnly: true,
            onError: function (element) {
                console.log('lazy error loading' + element.data('src'));
            },
            beforeLoad: function (element) {
                // Create virtual img to set imgs src src
                pureLazyfocusepointer(element);
            },
            afterLoad(element) {
                element.parent('.focuspoint').delay(fp_delay).focusPoint();
                element.addClass('lazied');
            },
            onFinishedAll() {
                console.log('img Complete');
            },
        });

    }

    function pureLazyfocusepointer(target) {
        var img = new Image();
        img.src = target.data('src');
        var target_focuspoint = target.parent('.focuspoint');
        $(target_focuspoint).attr({
            'data-focus-x': "0.00",
            'data-focus-y': "0.00",
            'data-image-w': img.width,
            'data-image-h': img.height,
        });
    }

    $('#Header').load('header.html');
    $('#Footer').load('footer.html');

