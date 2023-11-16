document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let isTransitioning = false;

    function nextSlide() {
        if (!isTransitioning) {
            isTransitioning = true;
            slider.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                slider.appendChild(slider.firstElementChild);
                slider.style.transform = 'translateX(0)';
                isTransitioning = false;
            }, 500);
        }
    }

    setInterval(nextSlide, 3000);
});
