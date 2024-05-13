export default function createMovieModal(movieData) {
    // Запрет прокрутки страницы при открытом модальном окне
    document.body.style.overflowY = "hidden";

    // Создаем задний фон модального окна
    const modalBackGround = document.createElement('div');
    modalBackGround.classList.add('modal-bg');

    // Создаем блок модального окна
    const modalMovie = document.createElement('div');
    modalMovie.classList.add('modal-movie');

    // Создаем блок с изображением
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('modal-movie__image-container');
    imgContainer.style.backgroundImage = "url(" + movieData.Poster + ")";

    // Создаем контент модального окна
    const content = document.createElement('div');
    content.classList.add('modal-movie__content');

    // Создаем заголовок
    const title = document.createElement('div');
    title.classList.add('modal-movie__title');
    title.textContent = movieData.Title;

    // Создаем кнопки
    const buttons = document.createElement('div');
    buttons.classList.add('modal-movie__buttons');

    // Кнопка "Смотреть"
    const watchButton = document.createElement('button');
    watchButton.classList.add('modal-movie__button');
    watchButton.setAttribute("type", "button");
    watchButton.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M13.8756 8.46594C14.4266 8.87529 14.4108 9.7053 13.8447 10.0934L6.06546 15.4267C5.40185 15.8817 4.5 15.4066 4.5 14.602L4.5 3.48879C4.5 2.66682 5.4366 2.19588 6.09639 2.68609L13.8756 8.46594Z"/></svg> Смотреть`;

    // Кнопка "Добавить в избранное"
    const favoritesButton = document.createElement('button');
    favoritesButton.classList.add('modal-movie__button-more');
    favoritesButton.setAttribute("type", "button");
    favoritesButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"/></svg>`;

    // Кнопка "Поделиться"
    const shareButton = document.createElement('button');
    shareButton.classList.add('modal-movie__button-more');
    shareButton.setAttribute("type", "button");
    shareButton.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3542_1188)"><path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06ZM13.5 3C13.9125 3 14.25 3.3375 14.25 3.75C14.25 4.1625 13.9125 4.5 13.5 4.5C13.0875 4.5 12.75 4.1625 12.75 3.75C12.75 3.3375 13.0875 3 13.5 3ZM4.5 9.75C4.0875 9.75 3.75 9.4125 3.75 9C3.75 8.5875 4.0875 8.25 4.5 8.25C4.9125 8.25 5.25 8.5875 5.25 9C5.25 9.4125 4.9125 9.75 4.5 9.75ZM13.5 15.015C13.0875 15.015 12.75 14.6775 12.75 14.265C12.75 13.8525 13.0875 13.515 13.5 13.515C13.9125 13.515 14.25 13.8525 14.25 14.265C14.25 14.6775 13.9125 15.015 13.5 15.015Z"/></g><defs><clipPath id="clip0_3542_1188"><rect width="18" height="18"/></clipPath></defs></svg>`;

    // Добавляем созданные кнопки в блок кнопок
    buttons.append(watchButton, favoritesButton, shareButton);

    // Создаем блок "О фильме"
    const about = document.createElement('div');
    about.classList.add('modal-movie__about');

    // Создаем блок "Данные о фильме"
    const data = document.createElement('div');
    data.classList.add('modal-movie__data');

    // Создаем обертку для иконки рейтинга и значения
    const ratingWrapper = document.createElement('div');
    ratingWrapper.classList.add('modal-movie__rating-wrapper');

    // Создаем иконку рейтинга
    const starIcon = document.createElement('span');
    starIcon.classList.add('modal-movie__star-icon');
    starIcon.innerHTML = `
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
    `

    // Создаем разделитель меня рейтингом и годом выспуска
    const dlimiter = document.createElement('span');
    dlimiter.textContent = '|'

    // Создаем блок рейтинга и добавляем рейтинг фильма
    const rating = document.createElement('div');
    rating.classList.add('modal-movie__rating');
    const ratingValue = document.createElement('span');
    ratingValue.classList.add('modal-movie__rating-value');
    ratingValue.textContent = movieData.imdbRating;

    ratingWrapper.appendChild(starIcon);
    ratingWrapper.appendChild(ratingValue);

    // Создаем блок года выпуска фильма и добавляем год выпуска
    const year = document.createElement('div');
    year.classList.add('modal-movie__year');
    year.textContent = movieData.Year;
    rating.append(ratingWrapper, dlimiter, year);

    // Создаем блок "Возрастное ограничение"
    const frame = document.createElement('div');
    frame.classList.add('modal-movie__frame');
    const age = document.createElement('div');
    age.classList.add('modal-movie__age');
    age.textContent = movieData.Rated;

    // Создаем блок "Жанры" и добавляем список жанров
    const group = document.createElement('div');
    group.classList.add('modal-movie__group');
    const genres = movieData.Genre.split(', ');
    genres.forEach((genre, index) => {
        const genreDiv = document.createElement('div');
        genreDiv.classList.add('modal-movie__genre');
        genreDiv.textContent = genre;
        group.appendChild(genreDiv);
        if (index !== genres.length - 1) {
            const innerFrame = document.createElement('div');
            innerFrame.classList.add('modal-movie__frame-inner');
            group.appendChild(innerFrame);
        }
    });

    // Создаем блок "Описание" и добавляем описание фильма
    const description = document.createElement('div');
    description.classList.add('modal-movie__description');
    const paragraphs = movieData.Plot.split('\n');
    paragraphs.forEach(paragraphText => {
        const paragraph = document.createElement('p');
        paragraph.classList.add('modal-movie__paragraph');
        paragraph.textContent = paragraphText.trim();
        description.appendChild(paragraph);
    });

    // Создаем кнопку для закрытия модального окна
    const buttonIcon = document.createElement('button');
    buttonIcon.classList.add('modal-movie__button-icon', 'btn-reset');
    buttonIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#090808"/></svg>`;

    // Функция для удаления модального окна
    function removeModal () {
        document.body.style.overflowY = "auto";
        modalBackGround.remove()
        buttonIcon.removeEventListener('click', removeModal)
    };

    buttonIcon.addEventListener('click', removeModal);

    // Добавляем событие для закрытия модального окна при клике вне его области
    buttonIcon.addEventListener('click', removeModal);

    // Функция для закрытия модального окна при клике вне его области
    function closeOnOutsideClick(event) {
        if (!modalMovie.contains(event.target)) {
            removeModal()
            modalBackGround.removeEventListener('click', closeOnOutsideClick);
        }
    }

    // Добавляем обработчик события для закрытия модального окна при клике вне его области
    modalBackGround.addEventListener('click', closeOnOutsideClick);

    // Добавляем элементы в DOM
    content.appendChild(title);
    content.appendChild(buttons);
    content.appendChild(about);
    data.appendChild(rating);
    frame.appendChild(age);
    data.appendChild(frame);
    data.appendChild(group);
    about.appendChild(data);
    about.appendChild(description);
    modalMovie.appendChild(imgContainer);
    modalMovie.appendChild(content);
    modalMovie.appendChild(buttonIcon);
    modalBackGround.appendChild(modalMovie);

    // Добавляем модальное окно в DOM
    document.body.appendChild(modalBackGround);
};