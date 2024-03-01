"use strict"

const getPhoto = document.getElementById('getPhoto');
const sendResponse = document.getElementById('sendResponse');
let img = document.createElement('img');



sendResponse.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    let query = 'город деревья';
    let url = 'https://api.unsplash.com/photos/random?w=700&h500&page=1&query='+query;
    const YOUR_ACCESS_KEY = '9pRLp2nFjb4ao-xk4VZCTOOgRR9tn0I36NJrxMbHrZ4';

    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization', 'Client-ID ' + YOUR_ACCESS_KEY);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.response);

            let imgUrl = data['links']['download'];
            img.src = imgUrl;
            getPhoto.appendChild(img);

        } else {
            console.error("Ошибка запроса: " + xhr.status)
        }
    };

    xhr.onerror = function () {
        console.error("Запрос не найден")
    };

    xhr.send()
});
