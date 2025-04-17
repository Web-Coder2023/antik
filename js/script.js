document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card__pagination").forEach((item) => {
        const card = item.closest(".card"); // Находим родительскую карточку
        const slider = card.querySelector(".card__slider"); // Ищем слайдер внутри этой карточки

        if (slider) {
            new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                pagination: {
                    el: item, // Подключаем конкретную пагинацию
                    clickable: true,
                },
            });
        }
    });
});
