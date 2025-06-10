export const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 32,
    grabCursor: true,

    // Отступы для симметрии
    slidesOffsetBefore: calculateOffset(),
    slidesOffsetAfter: calculateOffset(),

    watchOverflow: true,
    allowTouchMove: false, // ← отключаем автоматическое изменение activeIndex
});

// Функция для расчёта отступов
function calculateOffset() {
    const titleElement = document.querySelector('.slayder__title-main');
    const containerWidth = titleElement ? titleElement.offsetWidth : 500;
    return (window.innerWidth - containerWidth) / 2;
}

function updateOffsets() {
    const newOffset = calculateOffset();
    swiper.params.slidesOffsetBefore = newOffset;
    swiper.params.slidesOffsetAfter = newOffset;
    swiper.update();
}

window.addEventListener('resize', updateOffsets);

// Делаем слайд активным при наведении
document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
    slide.addEventListener('mouseenter', () => {
        swiper.slideTo(index, 300); // 300 — скорость анимации в мс
    });
});