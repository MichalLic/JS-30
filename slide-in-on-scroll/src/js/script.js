const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImages.forEach(function (sliderImage) {
        //height of half the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

        //bottom height of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrollPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrollPast) {
            sliderImage.classList.add('active')
        } else {
            sliderImage.classList.remove('active')
        }
    });
}
window.addEventListener('scroll', checkSlide);