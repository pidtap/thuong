function swipwerBanner() {
    new Swiper('.banner .swiper', {
        loop: true,
        effect: 'coverflow',
        autoplay: {
            delay: 10000,
        },

        // pagination: {
        //     el: '.swiper-pagination',
        // },
    });
}
function initialize() {
    swipwerBanner()
}

initialize()