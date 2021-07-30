//объектный литерал представляет собой разделенный запятыми список пар имя:значение
let point = {
    a: 1,
    b: 2
}

//new создает и инициализирует новый объект.
let о = new Object();// Создает пустой объект: то же, что и {}
let а = new Array();// Создает пустой массив: то же, что и []
let d = new Date(); // Создает объект Date, представляющий текущее время
let g = new Map(); // Создает объект Мар для отображения ключ/значение

//Object.create () создает новый объект, используя в качестве его прототи­па первый аргумент:
let ol = Object.create({ х: 1, у: 2 });// о1 наследует свойства х и у.
ol.x + ol.y //=>3

let о2 = Object.create(null);// о2 не наследует ни свойства,ни методы через null

let оЗ = Object.create(Object.prototype); //оЗ подобен {} или new Object () -пустой объект

//запрашивание и установка свойств
let book = {
    author: Object.create({ surname: 'имя' }),
    maintitle: 'заголовок'
}

let author = book.author; //Получить свойство "author” объекта book
let name = author.surname; //Получить свойство "surname” объекта author
let title = book["maintitle"]; // Получить свойство "main title" объекта book
console.log('author', author, 'name', name, 'title', title)


//имеют одно и то же значение:
let object = { property: 1 }
object.property
object["property"]//обращение к свойству объекта с помощью за­писи в форме массива [ ], имя свойства выражается в виде строки.

//цикл for/in при работе с ассоциативными массивами
function computeValue(portfolio) {
    let total = 0.0;
    for (let stock in portfolio) {// Для каждого пакета акций в портфеле ценных бумаг:
        let shares = portfolio[stock];// получить количество акций
        let price = getQuote(stock);// найти курс акций
        total += shares * price;// добавить стоимость пакета акций к общей стоимости
    }
    return total;// Возвратить общую стоимость
}

//Объекты имеют набор “собственных свойств” и наследу­ют набор свойств от своих объектов-прототипов
let o = {};// о наследует методы объекта от Object .prototype
o.х = 1;// и теперь имеет собственное свойство х.
let p = Object.create(o); //р наследует свойства от о и Object, prototype
p.у = 2;// и имеет собственное свойство у.
let q = Object.create(p); //q наследует свойства от р, о и . ..
q.z = 3;// .. .Object.prototype и имеет собственное свойство z.
let f = q.toStringO;//toString наследуется от Object .prototype
q.x + q.y// => 3; x и у наследуются от о и p

let unitcircle = { r: 1 };// Объект, от которого будет делаться наследование
let с = Object.create(unitcircle);// с наследует свойство г
с.х = 1; с.у = 1;// с определяет два собственных свойства
с.r = 2;// с переопределяет свое унаследованное свойство
unitcircle.r// => 1: прототип не затронут

//delete удаляет свойство из объекта
//delete вычисляется как true, когда применяется свыражением, не являющимся выражением доступа к свойству:
delete book.author;// Объект book теперь не имеет свойства author
delete book['main title']; // А теперь он не имеет и свойства "main title"

//Проверка свойств
let o1 = { х: 1 };
console.log('x' in o1)// => true: о имеет собственное свойство "х"
console.log("у" in o1)// => false: о не имеет свойства "у”
console.log("toString" in o1)// => true: о наследует свойство toString

//hasOwnProperty () объекта проверяет, имеет ли данный объект собственное свойство с заданным именем
o1.hasOwnProperty("х")// => true: о имеет собственное свойство х
o1.hasOwnProperty("у")// => false: о не имеет свойства у
o1.hasOwnProperty("toString") // => false: toString - унаследованное свойство

