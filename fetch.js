//Входящие данные
const body = {
    a: 38,
    b: 39
}

const requestURL = './req.php';

//Функция генерирующая fetch запрос
function sendRequest(method, url, body = null) {
    //Формируем заголовок запроса (можно и без него я в php просто парсю полезную нагрузку)
    const headers = {
        'Content-Type': 'application/json',
    }
    //В выводе функции вызываем fetch запрос с подготовленными данными
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
        //Так как результатом fetch возвращается promise, то стрелочной функцией разбираем ответ как json (можно получать объекты)
    }).then(response => {
        return response.json();
    })
};

//Вызов функции
sendRequest('post', requestURL, body)
    //Здесь ответ в случае успеха
    .then(data => console.log(data))
    //Здесь ответ в случае неудачи
    .catch(err => console.error(err))