const slider = function() {

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const maxSlide= slides.length;
let curSlide = 0;

const slider = document.querySelector('.slider')
slider.style.transfrom = 'scale(0.5)';
slider.style.overflow = 'visible';

// -100% 0% 100% 200% 
const goToSlide = function (slide) {
    slides.forEach(
        (s, i) => (s.style.transfrom = `translateX(${100 * ( i - slide)}%)`)
    )
}

const nextSlide = function () {
    if (curSlide === maxSlide -1) {
        curSlide =0;
    } else {
        curSlide++;
    }

    goToSlide(curSlide);

};

const prevSlide = function () {
    if (curSlide === maxSlide -1) {
        curSlide =0;
    } else {
        curSlide--;
    }

    goToSlide(curSlide);

};
// init();

btnRight.addEventListener('click', function() {
    console.log("leftbutton")
    // curSlide++;
    nextSlide();
});
btnLeft.addEventListener('click', function() {
    console.log("rightbutton")
    // curSlide--;
    prevSlide();
});

};
slider();