import getData from "../service/getData.js";
import createPosters from "./createPosters.js";
import getExtendedData from "../service/getExtended.js";

export default async function resultSearch (title) {
    const data = await getData(title, getExtendedData);

    const container = document.querySelector('.catalog-container');

    // Создаем блок posters
    const posters = document.createElement('div');
    posters.classList.add('posters');

    // Создаем блок posters__wrapper для популярных фильмов
    const searchWrapper = document.createElement('div');
    searchWrapper.classList.add('posters__wrapper');

    // Добавляем заголовок для популярных фильмов
    const searchTitle = document.createElement('h2');
    searchTitle.classList.add('posters__title');
    searchTitle.textContent = 'Результат поиска';
    searchWrapper.appendChild(searchTitle);

    // Создаем список для популярных фильмов
    const searchList = document.createElement('ul');
    searchList.classList.add( 'posters__cards');
    searchWrapper.appendChild(searchList);

    // Добавляем блок popularWrapper к блоку posters
    posters.appendChild(searchWrapper);

    data.map(item => {
        if(!item) return

        createPosters(item, searchList)
    });

    container.innerHTML = ''

    container.appendChild(posters);
};