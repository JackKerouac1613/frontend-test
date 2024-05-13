import createHome from "../components/createHome.js";
import resultSearch from "../components/createSearchResult.js";

// Получаем параметры из текущего URL
const params = new URLSearchParams(window.location.search);

// Получаем элементы DOM
const headerForm = document.querySelector('.header__form'); // Форма поиска в шапке
const searchInput = document.querySelector('.header__search-bar'); // Поле ввода поискового запроса
const clearBtn = document.querySelector('.clear-btn'); // Кнопка "Очистить" для поля ввода
const submitBtn = document.querySelector('.search-btn'); // Кнопка "Поиск" для отправки формы
const searchBtn = document.querySelector('.navigation-bar__button-search'); // Кнопка "Поиск" в навигационной панели
const searchPlaceholder = document.querySelector('.search-placeholder'); // Заглушка поиска для поля ввода

// Обработчик события отправки формы
submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.style.display = 'none'; // Скрываем кнопку "Поиск"
});

// Обработчик события фокуса на поле ввода
searchInput.addEventListener('focus', function() {
    clearBtn.style.display = 'block'; // Показываем кнопку "Очистить"
    submitBtn.style.display = 'block'; // Показываем кнопку "Поиск"
    searchPlaceholder.style.display = 'none'; // Скрываем заглушку поиска
});

// Обработчик события клика на заглушку поиска
searchPlaceholder.addEventListener('click', () => {
    searchInput.focus(); // Переводим фокус на поле ввода
});

// Обработчик события клика на кнопку "Очистить"
clearBtn.addEventListener('click', function(e) {
    e.preventDefault();
    searchInput.value = ''; // Очищаем содержимое поля ввода
    clearBtn.style.display = 'none'; // Скрываем кнопку "Очистить"
    submitBtn.style.display = 'none'; // Скрываем кнопку "Поиск"
    searchPlaceholder.style.display = 'block'; // Показываем заглушку поиска
});

// Обработчик события потери фокуса поля ввода
searchInput.addEventListener('blur', function(e) {
    if (!e.target.value) {
        // Если поле ввода пустое, показываем заглушку поиска и скрываем кнопку "Поиск"
        searchPlaceholder.style.display = 'block';
        submitBtn.style.display = 'none';
    } else {
        // Если в поле ввода есть текст, показываем кнопку "Поиск" и скрываем заглушку поиска
        submitBtn.style.display = 'block';
        searchPlaceholder.style.display = 'none';
    }
    // Если фокус ушел на что-то другое, кроме кнопки "Очистить", скрываем кнопку "Очистить"
    if (!e.relatedTarget || e.relatedTarget !== clearBtn) {
        clearBtn.style.display = 'none';
    }
});

// Обработчик события клика на кнопку "Поиск" в навигационной панели
searchBtn.addEventListener('click', function() {
    // Показываем форму поиска и скрываем кнопку "Поиск"
    headerForm.style.display = 'block';
    submitBtn.style.display = 'none';
    // Переводим фокус на поле ввода
    searchInput.focus();
});

// Обработчик события загрузки документа
document.addEventListener('DOMContentLoaded', () => {
    // Получаем значение параметра 'search' из URL
    const res = params.get('search');
    // Если параметр 'search' не существует, вызываем функцию createHome(), иначе вызываем функцию resultSearch()
    if(!res) {
        createHome();
    } else {
        resultSearch(res);
    }
});

// Обработчик события отправки формы поиска
headerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.style.display = 'none'; // Скрываем кнопку "Поиск"
    params.set('search', searchInput.value); // Устанавливаем значение параметра 'search' из поля ввода
    searchInput.value = ''; // Очищаем содержимое поля ввода
    // Получаем обновленный поисковый запрос
    const newSearch = params.toString();
    // Получаем текущий URL без параметров
    const baseUrl = window.location.href.split('?')[0];
    // Обновляем URL с новыми параметрами
    const newUrl = baseUrl + '?' + newSearch;
    // Перенаправляем пользователя на новый URL
    window.location.href = newUrl;
});