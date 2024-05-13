import createMovieModal from "./createMovieModal.js";

export default function createPosters(movies, container) {    
    // Создаем элемент списка для постера фильма.
    const posterElement = document.createElement('li');
    posterElement.classList.add('poster');

    // Создаем элемент изображения для постера.
    const imageElement = document.createElement('img');
    imageElement.classList.add('poster__image');
    imageElement.alt = '';
    imageElement.src = movies.Poster;
    posterElement.appendChild(imageElement);

    // Создаем элемент контента для постера.
    const contentElement = document.createElement('div');
    contentElement.classList.add('poster__content');

    // Создаем элемент заголовка.
    const titleElement = document.createElement('h3');
    titleElement.classList.add('poster__title');
    titleElement.textContent = movies.Title;
    contentElement.appendChild(titleElement);

    // Создаем элемент рейтинга.
    const ratingElement = document.createElement('div');
    ratingElement.classList.add('poster__rating');

    // Создаем элемент иконки рейтинга.
    const ratingIconElement = document.createElement('span');
    ratingIconElement.classList.add('poster__rating-icon');

    ratingIconElement.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3517_1104)">
                <path d="M10 14.3917L15.15 17.5L13.7833 11.6417L18.3333 7.70002L12.3417 7.19169L10 1.66669L7.65833 7.19169L1.66667 7.70002L6.21667 11.6417L4.85 17.5L10 14.3917Z" fill="#FBBC09"/>
            </g>
            <defs>
                <clipPath id="clip0_3517_1104">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    `;
    ratingElement.appendChild(ratingIconElement);

    // Создаем элемент значения рейтинга.
    const ratingValueElement = document.createElement('div');
    ratingValueElement.classList.add('poster__rating-value');
    ratingValueElement.textContent = movies.imdbRating;

    // Добавляем обработчик события клика на элемент постера, который вызывает модальное окно.
    posterElement.addEventListener('click', () => {
        createMovieModal(movies);
    });

    ratingElement.appendChild(ratingValueElement);
    contentElement.appendChild(ratingElement);

    posterElement.appendChild(contentElement);
    container.appendChild(posterElement);
};