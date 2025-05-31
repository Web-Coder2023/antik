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

const questionsItems = document.querySelectorAll('.questions ul li');

questionsItems.forEach((item, index) => {
    const questionsItemText = item.querySelector('.questions__col p');
    const questionsItemWrapper = item.querySelector('.questions__text');

    // Устанавливаем начальное состояние
    if (index === 0) {
        questionsItemText.style.height = "165px";
        questionsItemText.style.paddingTop = "14px";

        questionsItemWrapper.style.height = "159px";
    } else {
        questionsItemText.style.height = "0";
        questionsItemText.style.paddingTop = "0";

        questionsItemWrapper.style.height = "auto";
    }

    // Добавляем обработчик клика
    item.addEventListener("click", () => {
        const isOpen = questionsItemText.style.height === "165px";

        // Закрываем все
        questionsItems.forEach(otherItem => {
            const otherText = otherItem.querySelector('.questions__col p');
            const otherWrapper = otherItem.querySelector('.questions__text');
            otherText.style.height = "0";
            otherText.style.paddingTop = "0";
            otherWrapper.style.height = "auto";
        });

        // Если был закрыт — открываем текущий
        if (!isOpen) {
            questionsItemText.style.height = "165px";
            questionsItemText.style.paddingTop = "14px";
            questionsItemWrapper.style.height = "159px";
        }
    });
});
