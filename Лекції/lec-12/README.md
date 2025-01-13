# Формат JSON, метод toJSON

[Перелік усіх лекцій](README.md)

Припустимо, у нас є складний об'єкт, і ми хотіли б перетворити його в рядок, щоб відправити мережі або просто вивести для логування.

Природно, такий рядок повинна включати в себе всі важливі властивості.

Ми могли б реалізувати перетворення наступним чином:

```js
let user = {
  name: "John",
  age: 30,

  toString () {
    return `{name:" $ {this.name} ", age: $ {this.age}}`;
  }
};

alert (user); // {name: "John", age: 30}
```

... Але в процесі розробки додаються нові властивості, старі властивості перейменовуються і видаляються. Оновлення такого `toString` кожен раз може стати проблемою. Ми могли б спробувати перебрати властивості в ньому, але що, якщо об'єкт складний, і в його властивостях містить додаткові об'єкти? Ми повинні були б здійснити їх перетворення теж.

На щастя, немає необхідності писати код для обробки всього цього. У завдання є просте рішення.

## JSON.stringify

[JSON] (https://ru.wikipedia.org/wiki/JSON) (JavaScript Object Notation) - це загальний формат для представлення значень і об'єктів. Його опис задокументовано в стандарті [RFC 4627] (http://tools.ietf.org/html/rfc4627). Спочатку він був створений для JavaScript, але багато інших мов також мають бібліотеки, які можуть працювати з ним. Таким чином, JSON легко використовувати для обміну даними, коли клієнт використовує JavaScript, а сервер написаний на Ruby / PHP / Java або будь-якому іншому мовою.

JavaScript надає методи:

- `JSON.stringify` для перетворення об'єктів в JSON.
- `JSON.parse` для перетворення JSON назад в об'єкт.

Наприклад, тут ми перетворимо через `JSON.stringify` дані студента:
```js
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: [ 'html', 'css', ''],
  wife: null
};

let on = JSON.stringify (student);

alert (typeof on); // ми отримали рядок!

alert (on);
/* Виведе об'єкт в форматі JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": [ "html", "css", ""],
  "wife": null
}
*/
```

Метод `JSON.stringify (student)` бере об'єкт і перетворює його в рядок.

Отримана рядок `on` називається JSON-форматованим або серіалізовані об'єктом. Ми можемо відправити його по мережі або помістити в звичайне сховище даних.

Зверніть увагу, що об'єкт в форматі JSON має кілька важливих відмінностей від об'єктного литерала:

- Рядки використовують подвійні лапки. Ніяких одинарних лапок або зворотних лапок в JSON. Так `'John'` стає` "John" `.
- Імена властивостей об'єкта також полягають в подвійні лапки. Це обов'язково. Так `age: 30` стає `"age": 30`.

`JSON.stringify` може бути застосований і до примітивів.

JSON підтримує такі типи даних:

- Об'єкти `{...}`
- Масиви `[...]`
- Примітиви:
    - рядки,
    - числа,
    - логічні значення `true / false`,
    - `null`.

наприклад:

```js
// число в JSON залишається числом
alert (JSON.stringify (1)) // 1

// рядок в JSON як і раніше залишається рядком, але в подвійних лапках
alert (JSON.stringify ( 'test')) // "test"

alert (JSON.stringify (true)); // true

alert (JSON.stringify ([1, 2, 3])); // [1,2,3]
```

JSON є незалежною від мови специфікацією для даних, тому `JSON.stringify` пропускає деякі специфічні властивості об'єктів JavaScript.

А саме:

- Властивості-функції (методи).
- Символьні властивості.
- Властивості, що містять `undefined`.

```js
let user = {
  sayHi () {// буде пропущено
    alert ( "Hello");
  },
  [Symbol ( "id")]: 123, // також буде пропущено
  something: undefined // як і це - пропущено
};

alert (JSON.stringify (user)); // {} (порожній об'єкт)
```

Зазвичай це нормально. Якщо це не те, чого ми хочемо, то скоро ми побачимо, як можна налаштувати цей процес.

Саме чудове, що вкладені об'єкти підтримуються і конвертуються автоматично.

наприклад:

```js
let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: [ "john", "ann"]
  }
};

alert (JSON.stringify (meetup));
/* Вся структура перетворена в рядок:
{
  "title": "Conference",
  "room": { "number": 23, "participants": [ "john", "ann"]},
}
*/
```

Важливе обмеження: не повинно бути циклічних посилань.

наприклад:

```js
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [ "john", "ann"]
};

meetup.place = room; // meetup посилається на room
room.occupiedBy = meetup; // room посилається на meetup

JSON.stringify (meetup); // Помилка: Перетворення циклової структури в JSON
```

Тут перетворення завершується невдало через циклічну посилання: `room.occupiedBy` посилається на `meetup`, і `meetup.place` посилається на `room`.


## Виключаємо і перетворимо: replacer

Повний синтаксис `JSON.stringify`:

```js
let on = JSON.stringify (value [, replacer, space])
```

value
Значення для кодування.

replacer
Масив властивостей для кодування або функція відповідності `function (key, value)`.

space
: Більше простору (відступи), що використовується для форматування.

У більшості випадків `JSON.stringify` використовується тільки з першим аргументом. Але якщо нам потрібно налаштувати процес заміни, наприклад, відфільтрувати циклічні посилання, то можна використовувати другий аргумент `JSON.stringify`.

Якщо ми передамо йому масив властивостей, будуть закодовані тільки ці властивості.

наприклад:

```js
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup посилається на room
};

room.occupiedBy = meetup; // room посилається на meetup

alert (JSON.stringify (meetup, [ 'title', 'participants'] ));
// { "title": "Conference", "participants": [{}, {}]}
```

Тут ми, напевно, занадто суворі. Список властивостей застосовується до всієї структурі об'єкта. Так що всередині `participants` - порожні об'єкти, тому що `name` немає в списку.

Давайте включимо в список все властивості, крім `room.occupiedBy`, через якого з'являється циклічна посилання:

```js
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup посилається на room
};

room.occupiedBy = meetup; // room посилається на meetup

alert (JSON.stringify (meetup, [ 'title', 'participants', 'place', 'name', 'number'] ));
/*
{
  "title": "Conference",
  "Participants": [{ "name": "John"}, { "name": "Alice"}],
  "Place": { "number": 23}
}
*/
```

Тепер все, крім `occupiedBy`, серіалізовані. Але список властивостей досить довгий.

На щастя, як `replacer` ми можемо використовувати функцію, а не масив.

Функція буде викликатися для кожної пари `(key, value)`, і вона повинна повертати замінене значення, яке буде використовуватися замість вихідного. Або `undefined`, щоб пропустити значення.

У нашому випадку ми можемо повернути `value`" як є "для всього, крім` occupiedBy`. Щоб ігнорувати `occupiedBy`, код нижче повертає` undefined`:

```js
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup посилається на room
};

room.occupiedBy = meetup; // room посилається на meetup

alert (JSON.stringify (meetup, function replacer (key, value) {
  alert ( `$ {key}: $ {value}`);
  return (key == 'occupiedBy')? undefined: value;
}));

/* Пари ключ: значення, які приходять в replacer:
: [Object Object]
title: Conference
participants: [object Object], [object Object]
0: [object Object]
name: John
1: [object Object]
name: Alice
place: [object Object]
number: 23
*/
```

Зверніть увагу, що функція `replacer` отримує кожну пару ключ / значення, включаючи вкладені об'єкти і елементи масиву. І вона застосовується рекурсивно. Значення `this` всередині `replacer` - це об'єкт, який містить поточний властивість.

Перший виклик - особливий. Йому передається спеціальний "об'єкт-обгортка": `{" ": meetup}`. Іншими словами, перша `(key, value)` пара має порожній ключ, а значенням є цільовий об'єкт в загальному. Ось чому перший рядок з прикладу вище буде `": [object Object] "`.

Ідея полягає в тому, щоб дати якомога більше можливостей `replacer` - у нього є можливість проаналізувати і замінити / пропустити навіть весь об'єкт цілком, якщо це необхідно.


## Форматування: space

Третій аргумент в `JSON.stringify (value, replacer, space)` - це кількість прогалин, які використовуються для зручного форматування.

Раніше все JSON-відформатовані об'єкти не мали відступів і зайвих пробілів. Це нормально, якщо ми хочемо відправити об'єкт по мережі. Аргумент `space` використовується виключно для виведення в зрозумілому людині вигляді.

Нижче `space = 2` вказує JavaScript відображати вкладені об'єкти в кілька рядків з відступом в 2 пробілу всередині об'єкта:

```js
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert (JSON.stringify (user, null, 2));
/* Відступ в 2 пробілу:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* Для JSON.stringify (user, null, 4) результат містить більше відступів:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/
```

Параметр `space` застосовується для логування і красивого виведення.

## Призначений для користувача "toJSON"

Як і `toString` для перетворення рядків, об'єкт може надавати метод `toJSON` для перетворення в JSON. `JSON.stringify` автоматично викликає його, якщо він є.

наприклад:

```js
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  date: new Date (Date.UTC (2017, 0, 1)),
  room
};

alert (JSON.stringify (meetup));
/*
  {
    "title": "Conference",
    "date": "2017-01-01T00:00:00.000Z", // (1)
    "room": { "number": 23} // (2)
  }
*/
```

Як бачимо, `date(1) `став рядком. Це тому, що всі об'єкти типу `Date` мають вбудований метод `toJSON`, який повертає такий рядок.

Тепер давайте додамо власну реалізацію методу `toJSON` в наш об'єкт` room(2)`:

```js
let room = {
  number: 23,
  toJSON () {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};


alert (JSON.stringify (room)); // 23

alert (JSON.stringify (meetup));
/*
  {
    "title": "Conference",
    "room": 23
  }
*/
```

Як бачите, `toJSON` використовується як при прямому виклику` JSON.stringify (room) `, так і коли` room` вкладений в інший Серіалізуемое об'єкт.



## JSON.parse

Щоб декодувати JSON-рядок, нам потрібен інший метод з ім'ям [JSON.parse] (mdn:  / JSON / parse).

синтаксис:
```js
let value = JSON.parse (str, [reviver]);
```

str
: JSON для перетворення в об'єкт.

reviver
: Необов'язкова функція, яка буде викликатися для кожної пари `(ключ, значення)` і може перетворювати значення.

наприклад:

```js
// строковий масив
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse (numbers);

alert (numbers [1]); // 1
```

Або для вкладених об'єктів:

```js
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3]}';

user = JSON.parse (user);

alert (user.friends [1]); // 1
```

JSON може бути настільки складним, наскільки це необхідно, об'єкти і масиви можуть включати інші об'єкти і масиви. Але вони повинні бути в тому ж JSON-форматі.

Ось типові помилки в написаному від руки JSON (іноді доводиться писати його для налагодження):

```js
let on = {
  Name : "John", // Помилка: ім'я властивості без лапок
  "surname": 'Smith' , // Помилка: одинарні лапки в значенні (повинні бути подвійними)
  'isAdmin' : False // Помилка: одинарні лапки в ключі (повинні бути подвійними)
  "birthday": New Date (2000, 2, 3) , // Помилка: не допускається конструктор "new", тільки значення.
  "friends": [0,1,2,3] // Тут все в порядку
};
```

Крім того, JSON не підтримує коментарі. Додавання коментаря в JSON робить його недійсним.

Існує ще один формат [JSON5] (http://on5.org/), який підтримує ключі без лапок, коментарі і т.д. Але це самостійна бібліотека, а не специфікація мови.

Звичайний JSON настільки суворий не тому, що його розробники ліниві, а тому, що дозволяє легко, надійно і дуже швидко реалізовувати алгоритм кодування і читання.

## Використання reviver

Уявіть, що ми отримали об'єкт `meetup` з сервера у вигляді рядка даних.

Ось такий:

```js
// title: (meetup title), date: (meetup date)
let str = '{ "title": "Conference", "date": "2017-11-30T12:00:00.000Z"}';
```

... А тепер нам потрібно десеріалізувати її, тобто знову перетворити в об'єкт JavaScript.

Давайте зробимо це, викликавши `JSON.parse`:

```js
let str = '{ "title": "Conference", "date": "2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse (str);
alert (meetup.date.getDate ()); // Error!

```

Ой, помилка!

Значним `meetup.date` є рядок, а не` Date` об'єкт. Як `JSON.parse` міг знати, що він повинен був перетворити цей рядок в` Date`?

Давайте передамо `JSON.parse` функцію відновлення другим аргументом, яка повертає всі значення" як є ", але` date` стане `Date`:

```js
let str = '{ "title": "Conference", "date": "2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse (str, function (key, value) {
  if (key == 'date') return new Date (value);
  return value;
});


alert (meetup.date.getDate ()); // 30 - тепер працює!
```

До речі, це працює і для вкладених об'єктів:

```js
let schedule = `{
  "meetups": [
    { "title": "Conference", "date": "2017-11-30T12:00:00.000Z"},
    { "title": "Birthday", "date": "2017-04-18T12:00:00.000Z"}
  ]
} `;

schedule = JSON.parse (schedule, function (key, value) {
  if (key == 'date') return new Date (value);
  return value;
});


alert (schedule.meetups [1] .date.getDate ()); // 18 - відмінно!

```

## Підсумок

- JSON - це формат даних, який має власний незалежний стандарт і бібліотеки для більшості мов програмування.
- JSON підтримує прості об'єкти, масиви, рядки, числа, логічні значення і `null`.
- JavaScript надає методи [JSON.stringify] (mdn:  / JSON / stringify) для сериализации в JSON і [JSON.parse] (mdn:  / JSON / parse) для читання з JSON.
- Обидва методи підтримують функції перетворення для інтелектуального читання / запису.
- Якщо об'єкт має метод `toJSON`, то він викликається через` JSON.stringify`.