$(document).ready(function () {

    $('.scrollTop').click(function () {
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top - 102 + 'px';
        $('html, body').animate({ scrollTop: targetPos }, 500);
    });
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        var navToop = $('.nav-head').position().top;
        if (scrollPos > navToop) {
            $('.nav-head').css('background-color', 'rgba(' + 39 + ',' + 31 + ',' + 31 + ',' + 0.822 + ')')
        } else {

            $('.nav-head').css('background-color', 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + .5 + ')')
        }
        // active
        $('.scrollTop').each(function () {   //直接先定義三個a
            var target = $(this).attr('href');   //id
            var targetPos = $(target).offset().top;   //座標
            var targetHeight = $(target).outerHeight();   //該id範圍包含padding的高度
            if (targetPos - 1 <= scrollPos + 130 && (targetPos + targetHeight + 50) > scrollPos) {        //表示當視窗滾到大於該id座標及小於該id高度的範圍內時(-1是因為有誤差,要補足)
                $('.scrollTop').removeClass('active')   //先重置
                $(this).addClass('active');     //該a加入active
            } else {
                $(this).removeClass('active')  //不在範圍內要移除active
            }
        });

        // animated
        $('.animated').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });
    });
});