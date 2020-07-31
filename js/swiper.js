// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 5000
    }
});


