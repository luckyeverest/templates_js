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

// Object.keys() возвращает массив имен перечислимых собс­твенных свойств объекта.

// Object.getOwnPropertyNames() работает подобно Object.keys(), но возвращает массив также имен не перечислимых
// собственных свойств при условии, что их имена представлены строками.

// Object.getOwnPropertySymbols () возвращает собственныесвойства, имена которых являются значениями Symbol

// Reflect.ownKeys() возвращает имена всех собственных свойств, перечислимых и не перечислимых, представленных как строками,
// так и значениями Symbol.

//Расширение объектов
let target = { х: 1 }, source = { у: 2, z: 3 };
for (let key of Object.keys(source)) {
    target[key] = source[key];
}
target// => {x: 1, y: 2, z: 3}

// Для каждого исходного объекта функцияObject.assign() копирует его перечислимые собственные свойства в целевой объект.
// Похожа на Object .assign (), но не переопределяет существующие
// свойства (и также не обрабатывает свойства Symbol).

//создать новый объект, скопировать в него стандартные свойства и затем переопределить их посредством свойств в о:
//о = Object.assign({}, defaults, о);
// операции распростра­нения ... , например:
// о = {...defaults, ...0 };

//Object.assign (),которая копирует свойства, только если они отсутствуют:
function merge(target, ...sources) {
    for (let source of sources) {
        for (let key of Object.keys(source)) {
            if (!(key in target)) { // Это отличается от Object .assign ()
                target[key] = source[key];
                return target;
            }
            Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }) // => {x: 2, y: 3, z: 4}
            merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }) // => {x: 1, y: 2, z: 4}
        }
    }
}

//Сериализация объектов JSON.stringify() и JSON.parse() сериализируют и восстанавливают объек­ты
let o3 = {
    х: 1,
    у: { z: [false, null, ""] }
};// Определение тестового объекта
let s = JSON.stringify(o3); //s == ' {"х": 1, "у":{"z": [false,null,,,,f]}}1'
let p1 = JSON.parse(s); // p == {x: 1, y: {z : [false, null, ""])}
console.log(s)
console.log(p1)

//Метод toString()
//возвращает строку, каким-то об­разом представляющую значение объекта, на котором он вызван

let s3 = { x: 1, у: 1 }.toString();// s == "[object Object]"

//массив преобразуется в строку
let point1 = {
    x: 333,
    y: 666,
    toString: function () {
        return (
            `(${this.x}, ${this.y})`
        )
    }
};
console.log(point1)// => "(1, 2)": toString() применяется для преобразований в строки

//valueOf () преобразовать объект в какой-то элементарный тип, отличающийся от строки — обычно в число
let point12 = {
    х: 3,
    у: 4,
    valueOf: function () { return Math.hypot(this.х, this.у); }
};
Number(point12) // => 5: valueOf () применяется для преобразования в числа
point12 > 4// => true
point12 > 5// => false
point12 < 6// => true

//toJSON() JSON.stringify() ищет метод toJSON() в каждом объекте,который нужно сериализировать
let point44 = {
    x: 1,
    y: 2,
    toString: function () { return `(${this.x}, ${this.y})`; },
    toJSON: function () { return this.toString(); }
}
console.log(JSON.stringify(point44))// = > ["(1, 2)"]

// Сокращенная запись свойств
let х = 1, у = 2;
let o9 = { х, у };//можно упустить двоеточение
o9.х + o9.у // => 3

//Вычисляемые имена свойств
const PROPERTY__NAME = "p1"; //создание переменой 
function computePropertyName() { return "p" + 2; }//создание второй переменой через функцию
let о5 = {};//создание пустого объекта
о5[PROPERTY__NAME] = 1;//добавление в объект имени свойства через переменую
о5[computePropertyName()] = 2;//добавление в объект имени свойства через вызов функции
console.log(о5)

//копировать свойства существующе­го объекта в новый объект, используя внутри объектного литерала “операциюраспространения” ...
let position = { х: 0, у: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.у + rect.width + rect.height // => 175

//Сокращенная запись методов
let square = {
    area: function () { return this.side * this.side; },
    side: 10
};
square.area()// => 100
//тоже самое что и
let square2 = {
    area() { return this.side * this.side; },
    side: 10
};
square2.area()// => 100

// Методы получения и установки свойств
let value1 = 2
let p23 = {
    dataProp: value1,// Обыкновенное свойство с данными
    // Свойство с методами доступа определяется как пара функций
    get accessorProp() { return this.dataProp; },
    set accessorProp(value1) { this.dataProp = value1; }
};