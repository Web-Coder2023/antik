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
                navigation: {
                    nextEl: '.card__btn-next',
                    prevEl: '.card__btn-prev',
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

const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__container');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', function() {
  // Получаем все кнопки для открытия модальных окон
  const openButtons = document.querySelectorAll('[data-modal="open"]');
  // Получаем все кнопки для закрытия модальных окон
  const closeButtons = document.querySelectorAll('[data-modal="close"]');
  // Получаем body для добавления/удаления класса блокировки
  const body = document.body;

  // Функция для открытия модального окна
  function openModal(modalId) {
    const modal = document.querySelector(modalId);
    if (modal) {
      modal.classList.add('open');
      body.classList.add('_lock');
    }
  }

  // Функция для закрытия модального окна
  function closeModal(modalId) {
    const modal = document.querySelector(modalId);
    if (modal) {
      modal.classList.remove('open');
      body.classList.remove('_lock');
    }
  }

  // Обработчики для кнопок открытия
  openButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-target') || this.getAttribute('href');
      if (modalId) {
        openModal(modalId);
      }
    });
  });

  // Обработчики для кнопок закрытия
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Находим ближайшее родительское модальное окно
      const modal = this.closest('.modal');
      if (modal) {
        closeModal(`#${modal.id}`);
      }
    });
  });

  // Закрытие модального окна при клике вне его области
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      closeModal(`#${e.target.id}`);
    }
  });

  // Закрытие модального окна при нажатии Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal.open');
      if (openModal) {
        closeModal(`#${openModal.id}`);
      }
    }
  });
});