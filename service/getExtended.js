export default function getExtendedData (id) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `http://www.omdbapi.com/?i=${id}&plot=full&apikey=ecb247d2`, true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                const movieData = JSON.parse(xhr.responseText);
                resolve(movieData);
            } else {
                reject('Ошибка при выполнении запроса: ' + xhr.statusText);
            }
        };

        xhr.onerror = function () {
            reject('Сетевая ошибка');
        };

        xhr.send();
    });
};
