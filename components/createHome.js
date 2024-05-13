import getData from "../service/getData.js";
import createPosters from "./createPosters.js";
import getExtendedData from "../service/getExtended.js";

export default async function createHome() {
    // Получаем данные о фильмах с помощью функции getData().
    const data = await getData('Guardian', getExtendedData);

    // Получаем контейнер, в который будем добавлять содержимое раздела.
    const container = document.querySelector('.catalog-container');

    // Создаем блок posters для размещения постеров фильмов.
    const posters = document.createElement('div');
    posters.classList.add('posters');

    // Создаем блок posters__wrapper для популярных фильмов.
    const popularWrapper = document.createElement('div');
    popularWrapper.classList.add('posters__wrapper');

    // Добавляем заголовок для популярных фильмов.
    const popularTitle = document.createElement('h2');
    popularTitle.classList.add('posters__title');
    popularTitle.textContent = 'Популярные';
    popularWrapper.appendChild(popularTitle);

    // Создаем список для популярных фильмов.
    const popularList = document.createElement('ul');
    popularList.classList.add('posters__cards-popular', 'posters__cards');
    popularWrapper.appendChild(popularList);

    // Добавляем блок popularWrapper к блоку posters.
    posters.appendChild(popularWrapper);

    // Создаем блок posters__wrapper для недавно просмотренных фильмов.
    const lastWrapper = document.createElement('div');
    lastWrapper.classList.add('posters__wrapper');

    // Добавляем заголовок для недавно просмотренных фильмов.
    const lastTitle = document.createElement('h2');
    lastTitle.classList.add('posters__title');
    lastTitle.textContent = 'Недавно просмотренные';
    lastWrapper.appendChild(lastTitle);

    // Создаем список для недавно просмотренных фильмов.
    const lastList = document.createElement('ul');
    lastList.classList.add('posters__cards-last', 'posters__cards');
    lastWrapper.appendChild(lastList);

    // Добавляем постеры фильмов в списки популярных и недавно просмотренных фильмов.
    data.map(item => {
        if(!item) return

        createPosters(item, popularList)
        createPosters(item, lastList)
    });

    // Добавляем блок lastWrapper к блоку posters.
    posters.appendChild(lastWrapper);

    // Очищаем содержимое контейнера перед добавлением нового контента.
    container.innerHTML = '';

    // Добавляем блок posters к контейнеру.
    container.appendChild(posters);
};