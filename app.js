"use strict"

const getPhoto = document.getElementById('getPhoto');
const sendResponse = document.getElementById('sendResponse');
const keyWorld = document.getElementById('keyWorld');
const keyWords = document.getElementById('keyWords');
let img = document.createElement('img');



sendResponse.addEventListener('click', () => {
    keyWords.innerHTML = ''
    const xhr = new XMLHttpRequest();

    let query = keyWorld.value;
    let url = 'https://api.unsplash.com/photos/random?w=200&h200&page=1&query='+query;
    const YOUR_ACCESS_KEY = '9pRLp2nFjb4ao-xk4VZCTOOgRR9tn0I36NJrxMbHrZ4';

    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization', 'Client-ID ' + YOUR_ACCESS_KEY);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.response);

            let imgUrl = data['links']['download'];
            img.src = imgUrl;
            getPhoto.appendChild(img);
            

            let p_tags = document.createElement('p')
            keyWords.appendChild(p_tags)
            data['tags'].forEach(element => {
                
                let text_node = document.createTextNode(element['title'] + ', ')
                p_tags.appendChild(text_node);
                console.log(p_tags)
            });
        } else {
            console.error("Ошибка запроса: " + xhr.status)
        }
    };

    xhr.onerror = function () {
        console.error("Запрос не найден")
    };

    xhr.send()
});


