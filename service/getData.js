import getExtendedData from "./getExtended.js";

export default function getData (title) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `http://www.omdbapi.com/?s=${title}&plot=full&apikey=ecb247d2`, true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                const response = JSON.parse(xhr.responseText);
                const promises = response.Search.map((item, index) => {
                    if (index > 5) return;
                    return getExtendedData(item.imdbID);
                });

                Promise.all(promises)
                    .then(data => resolve(data))
                    .catch(error => reject(error));
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
