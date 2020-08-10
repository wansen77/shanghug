
$(document).ready(function () {

    // // loading
    // $('#loading').delay(4000).fadeOut(500);

    // language
    $("#language").on('change', function () {
        var language = $("#language").val();
        if (language == "EN") {
            $(location).attr('href', 'en-index.html');
        } else if (language == "TC") {
            $(location).attr('href', 'index.html');
        }
    })
    $("#language-sm").on('change', function () {
        var language = $("#language-sm").val();
        if (language == "EN") {
            $(location).attr('href', 'en-index.html');
        } else if (language == "TC") {
            $(location).attr('href', 'index.html');
        }
    })


    // var showanimate = false;

    //   onload時載入
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        var navToop = $('.nav-head').position().top;
        if (scrollPos > navToop) {
            $('.nav-head').css('background-color', 'rgba(' + 39 + ',' + 31 + ',' + 31 + ',' + 0.822 + ')')
        } else {

            $('.nav-head').css('background-color', 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + .5 + ')')
        }


    });
    // 置頂s
    $('.list-group-remove').click(function () {
        $('html, body').scrollTop(0);
    })
    // 選單localStorage
    $('.sel-juicer').click(function () {
        window.localStorage.setItem('sel-juicer', 'active')
    });
    $('.sel-sweet-potato').click(function () {
        window.localStorage.setItem('sel-sweet-potato', 'active')
    });
    $('.sel-shaver').click(function () {
        window.localStorage.setItem('sel-shaver', 'active')
    });
    $('.sel-meat-slicer').click(function () {
        window.localStorage.setItem('sel-meat-slicer', 'active')
    });
    $('.sel-potatoes').click(function () {
        window.localStorage.setItem('sel-potatoes', 'active')
    });
    $('.sel-rice-grinder').click(function () {
        window.localStorage.setItem('sel-rice-grinder', 'active')
    });
    $('.sel-kneading-dough').click(function () {
        window.localStorage.setItem('sel-kneading-dough', 'active')
    });
    $('.sel-fooder-mixer').click(function () {
        window.localStorage.setItem('sel-fooder-mixer', 'active')
    });


    if (window.localStorage.getItem('sel-juicer') == 'active') {
        $('#juicer-sel').addClass('active show')
        $('#juicer').addClass('show active')
        window.localStorage.setItem('sel-juicer', '')
    }
    if (window.localStorage.getItem('sel-sweet-potato') == 'active') {
        $('#sweet-potato-sel').addClass('active show')
        $('#sweet-potato').addClass('show active')
        window.localStorage.setItem('sel-sweet-potato', '')
    }
    if (window.localStorage.getItem('sel-shaver') == 'active') {
        $('#shaver-sel').addClass('active show')
        $('#shaver').addClass('show active')
        window.localStorage.setItem('sel-shaver', '')
    }
    if (window.localStorage.getItem('sel-meat-slicer') == 'active') {
        $('#meat-slicer-sel').addClass('active show')
        $('#meat-slicer').addClass('show active')
        window.localStorage.setItem('sel-meat-slicer', '')
    }
    if (window.localStorage.getItem('sel-potatoes') == 'active') {
        $('#potatoes-sel').addClass('active show')
        $('#potatoes').addClass('show active')
        window.localStorage.setItem('sel-potatoes', '')
    }
    if (window.localStorage.getItem('sel-rice-grinder') == 'active') {
        $('#rice-grinder-sel').addClass('active show')
        $('#rice-grinder').addClass('show active')
        window.localStorage.setItem('sel-rice-grinder', '')
    }
    if (window.localStorage.getItem('sel-kneading-dough') == 'active') {
        $('#kneading-dough-sel').addClass('active show')
        $('#kneading-dough').addClass('show active')
        window.localStorage.setItem('sel-kneading-dough', '')
    }
    if (window.localStorage.getItem('sel-fooder-mixer') == 'active') {
        $('#fooder-mixer-sel').addClass('active show')
        $('#fooder-mixer').addClass('show active')
        window.localStorage.setItem('sel-fooder-mixer', '')
    }


    //   menu
    $('.menu-button').click(function (e) {
        event.preventDefault();
        $(this).toggleClass('active')
        $('.menu').toggleClass('active')
        $('.nav-head-light').toggleClass('active')
    })


    // 摺疊

    $('.list-group-item').click(function (e) {
        event.preventDefault();
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().siblings().find('.list-group-item').removeClass('active')
        $(this).find('.fa-chevron-circle-down').toggleClass('d-none')
        $(this).find('.fa-chevron-circle-right').toggleClass('d-none')
        $(this).parent().siblings().find('.fa-chevron-circle-down').addClass('d-none')
        $(this).parent().siblings().find('.fa-chevron-circle-right').removeClass('d-none')
    })
    $('.list-group-remove').click(function () {
        $('.list-group-item').removeClass('active')
        $('.list-group-item').parent().find('ul').slideUp();
        // 主區塊的list-group-remove
        // $(this).parent().find('a').removeClass('active show') //移除切換原來的active show
        // $(this).parent().siblings().find('a').removeClass('active show')
        // 下方區塊的list-group-remove
        $('.list-group-remove').removeClass('active show')
        $('.fa-chevron-circle-down').addClass('d-none')
        $('.fa-chevron-circle-right').removeClass('d-none')
    })

    // 活動照片放大
    $('.activity-img').click(function (e) {
        event.preventDefault();
        $(this).toggleClass('active')
    })

    // 產品圖放大

    if ($(window).width() > 991) {
        $(".enlarge").addClass('zoom')
    } else {
        $(".enlarge").removeClass('zoom')
    }

});







