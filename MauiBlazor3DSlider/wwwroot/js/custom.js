var swiperx;

function SlideTo(page) {
    console.log('to' + page);
    swiperx.slideTo(page);
    HideHeader();
}
function Load() {
    SetTouchEvents();
    var isMove = false;
    swiperx = new Swiper('.swiper-container', {


        init: false,
        loop: false,
        speed: 800,
        autoplay: {
            delay: 3000
        },
        effect: 'cube', // 'cube', 'fade', 'coverflow',

        grabCursor: true,

        // Events
        on: {
            init: function () {
                this.autoplay.stop();
            },
            //slideChange: (swiper) => {
            //    console.log(swiper.touches.diff);
            //},
            touchMove: function (event) {
                if (!isMove) {
                    this.el.classList.remove('scale-in');
                    this.el.classList.add('scale-out');
                    isMove = true;
                }
            },
            touchEnd: function (event) {
                this.el.classList.remove('scale-out');
                this.el.classList.add('scale-in');
                setTimeout(function () {
                    isMove = false;
                }, 300);
            },
            slideChangeTransitionStart: function () {
                console.log('slideChangeTransitionStart ' + this.activeIndex);
                if (!isMove) {
                    this.el.classList.remove('scale-in');
                    this.el.classList.add('scale-out');
                }
            },
            slideChangeTransitionEnd: function () {
                console.log('slideChangeTransitionEnd ' + this.activeIndex);
                if (!isMove) {
                    this.el.classList.remove('scale-out');
                    this.el.classList.add('scale-in');
                }
            },

            transitionStart: function () {
                console.log('transitionStart ' + this.activeIndex);
            },
            transitionEnd: function () {
                console.log('transitionEnd ' + this.activeIndex);
            },
            slideChange: function () {
                console.log('slideChange ' + this.activeIndex);
                console.log(this);
            }

        }
    });
    swiperx.init();
}
function SetTouchEvents() {
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                ////////console.log("right swipe");
            } else {
                // console.log("left swipe");

            }
        } else {
            if (yDiff > 0) {
                if (evt.touches[0].clientY < 300) {
                    HideHeader();
                }
                if (evt.touches[0].clientY > (window.innerHeight - 200)) {

                    ShowFooter();
                }

            } else {
                if (evt.touches[0].clientY < 150) {
                    ShowHeader();
                }

                if (evt.touches[0].clientY > (window.innerHeight - 200)) {
                    HideFooter();
                }

            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };
}
function HideHeader() {
    document.getElementById("header-menu").classList.remove("slide-down");
    document.getElementById("header-menu").classList.add("slide-up");
}
function ShowHeader() {
    document.getElementById("header-menu").classList.remove("slide-up");
    document.getElementById("header-menu").classList.add("slide-down");
}
function ShowFooter() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        }

        // Navigation arrows
        //navigation: {
        //    nextEl: '.swiper-button-next',
        //    prevEl: '.swiper-button-prev',
        //},

        // And if we need scrollbar

    });
    document.getElementById("footer-menu").classList.remove("slide-down");
    document.getElementById("footer-menu").classList.add("slide-up");

}
function HideFooter() {
    console.log("üstte");
    document.getElementById("footer-menu").classList.remove("slide-up");
    document.getElementById("footer-menu").classList.add("slide-down");
}


