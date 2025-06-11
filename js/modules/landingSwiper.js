export const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    autoHeight: true,
    spaceBetween: 32,
    grabCursor: true,
    allowTouchMove: true,
    watchOverflow: true,

    // Твои любимые отступы
    
    slidesOffsetBefore: calculateOffset(),
    slidesOffsetAfter: calculateOffset(),

    on: {
        init: function () {
            addHoverListeners(this);
        },
        resize: function () {
            updateOffsets(this);
            addHoverListeners(this);
        }
    }
});

// Функция для расчёта отступов
function calculateOffset() {
    const titleElement = document.querySelector('.slayder__title-main');
    const containerWidth = titleElement ? titleElement.offsetWidth : 500;
    return (window.innerWidth - containerWidth) / 2;
}

// Обновление отступов при изменении размера экрана
function updateOffsets(swiperInstance) {
    const newOffset = calculateOffset();
    
    swiperInstance.params.slidesOffsetBefore = newOffset;
    swiperInstance.params.slidesOffsetAfter = newOffset;
    swiperInstance.update(); // Перерисовка
}


window.addEventListener('resize', () => {
    if (swiper && swiper.initialized) {
        updateOffsets(swiper);
    }
});