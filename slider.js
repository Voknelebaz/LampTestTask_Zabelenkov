"use strict";

(function () {
    
    let breakpoint = window.matchMedia('(max-width:56.25rem)');
    let swiperWrapper = document.getElementById("swiperWrapper");
    let swiper;
    let breakpointChecker = function breakpointChecker() {
        if (breakpoint.matches === true) {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;
        } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
        
    };
    let enableSwiper = function enableSwiper() {
        swiper = new Swiper('.swiper', {

            slidesPerView: 4.5,
            spaceBetween: 15,
        });
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
})();


