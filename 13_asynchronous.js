// асинхронное программирование JavaScript производится с помощью обратных вызовов. Обратный вызов
//Это функция, которую вы пишете и затем передаете какой-то другой функции

//Таймеры
const checkForUpdates = () => {
    console.log("1 сек")
}
setTimeout(checkForUpdates, 1000)

//запускать функцию многократно

// повторить с интервалом 1 секунды
let timerId = setInterval(() => console.log('загрузка'), 1000);

// остановить вывод через 3 секунд
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 3000);

//События
// Запросить у веб-браузера возврат объекта, представляющего HTML-элемент <button>, который соответствует этому селектору CSS.
//       let okay = document.querySelector('#confirmUpdateDialog button.okay1');
// Зарегистрировать функцию обратного вызова, которая должна вызываться, когда пользователь щелкает на данной кнопке,
//       okay.addEventListener('click', applyUpdate)
//applyUpdate () — гипотетическая функция обрат­ного вызова,
// которая по нашему предположению реализована где-то в другом месте

//События сети -сетевые запросы
function getCurrentVersionNumber(versionCallback) {//Обратите внимание на аргумент.
    // Сделать HTTP-запрос к API-интерфейсу версии сервера,
    let request = new XMLHttpRequest();
    request.open("GET", "http://www.example.com/api/version");
    request.send();
    // Зарегистрировать обратный вызов, который будет вызываться при поступлении ответа.
    request.onload = function () {
        if (request.status === 200) {
            // Если состояние HTTP нормально, тогда получить номер версии и вызвать обратный вызов,
            let currentVersion = parseFloat(request.responseText);
            versionCallback(null, currentVersion);
        } else {
            versionCallback(response.statusText, null); // В противном случае сообщить обратному вызову об ошибке.
        }
    };
    request.onerгor = request.ontimeout = function (e) {// Зарегистрировать еще один обратный вызов, который будет
        // вызываться при возникновении ошибок сети
        versionCallback(e.type, null);
    };
}

//Объекты Promise средства базового языка, которое предназначено для упрощения асинхронного програм­мирования

console.log('асинхроный запрос на сервер')

setTimeout(() => {
    console.log('сервер готовит данные')

    const backendData = {//данные формируемые на сервервере
        server: 'rus',
        port: 2000,
        statusWork: 'open'
    }
    setTimeout(() => {//передача данных клиенту
        console.log('данные получены', backendData)
    }, 1000);
}, 1000)

const p = new Promise(function (resolve, reject) {//Promis это класс внутрь которого передается function с параметрами
    setTimeout(() => {
        console.log('promise сервер готовит данные')

        const backendData2 = {//данные формируемые на сервере 
            server: 'usa',
            port: 3000,
            statusWork: 'close'
        }
        resolve(backendData2)//вызыватся когда закончена асинхроная операция(успешно)
        //передаем как параметр что бы имет доступ в then
    }, 1000);
})

p.then((data) => {// вызывается когда закончен resolve  //получение объекта data из backendData2
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {//передача данных клиенту
            console.log('данные сформированы промис', data)
            resolve(data)//передача данных
        }, 1000);
    })
    
    p2.then(clientData => {
        console.log('данные получены через промис', clientData)
    })
})
