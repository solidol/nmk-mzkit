# Кодування та декодування нотації JSON

[Перелік усіх робіт](README.md)

## Мета роботи

## Обладнання

Персональний комп'ютер. Текстовий редактор Sublime Text 3 або Notepad++. Пакет програм XAMPP. Web-браузер Chrome, Firefox, Opera, MS Edge

## Теоретичні відомості

JSON (JavaScript Object Notation) - це текстовий формат обміну даними, що базується на JavaScript.

Цей формат вважається незалежним від мови програмування і може використовуватися практично з будь-якою мовою програмування. Для багатьох мов існує готовий код для створення та обробки даних у форматі JSON.

Завдяки своїй лаконічності у порівнянні з XML, формат JSON може бути більш підходящим для серіалізації складних структур. Використовується в веб-додатках як для обміну даними між браузером і сервером (AJAX), так і між серверами (програмні HTTP-з'єднання).

Оскільки формат JSON є підмножиною синтаксису мови JavaScript, його можна швидко десеріалізувати за допомогою вбудованої функції eval().

JSON-текст може представляти одну з двох структур:

1. Набір пар ключ:значення. У різних мовах це реалізовано як запис, структура, словник, хеш-таблиця, список з ключем або асоціативний масив. Ключ може бути лише рядком (регістрозалежність не регулюється стандартом, це залишається на розсуд програмного забезпечення). Зазвичай регістр враховується програмами - імена з літерами у різних регістрах вважаються різними, наприклад, значення - будь-яка форма. Повторюючіся імена ключів допускаються, але не рекомендуються стандартом; обробка таких ситуацій відбувається на розсуд програмного забезпечення, можливі варіанти - враховувати тільки перший такий ключ, враховувати тільки останній такий ключ, генерувати помилку.
2. Впорядкований набір значень. У багатьох мовах це реалізовано як масив, вектор, список або послідовність.
Структури даних, що використовуються в JSON, підтримуються будь-якою сучасною мовою програмування, що дозволяє використовувати JSON для обміну даними між різними мовами програмування та програмними системами.

У якості значень у JSON можуть бути використані:

- запис - це неупорядковане множина пар ключ:значення, укладене в фігурні дужки "{}". Ключ описується рядком, між ним і значенням стоїть символ ":". Пари ключ-значення відокремлюються одна від одної комами.
- масив (одномірний) - це впорядковане множина значень. Масив укладено в квадратні дужки "[]". Значення розділяються комами. Масив може бути порожнім, тобто не містити жодного значення. Значення в межах одного масиву можуть мати різний тип.
- число (ціле або дійсне).
- літерали true (логічне значення "істина"), false (логічне значення "хиба") і null.
- рядок - це впорядковане множина з нуля або більше символів Unicode, укладена в подвійні лапки. Символи можуть бути вказані з використанням escape-послідовностей, які починаються з зворотного слеша "\\" (\\', \\",\\\\, \\/, \\t, \\n, \\r, \\f и \\b), або записані шістнадцятковим кодом в кодуванні Unicode у вигляді \\uFFFF.

```js
const sampleObject = {
    string: "Hello, world!",
    number: 42,
    boolean: true,
    array: [1, 2, 3],
    object: {
        key: "value"
    },
    nullValue: null
};
```

Серіалізований у JSON об'єкт виглядає наступним чином:

```json
{
    "string": "Hello, world!",
    "number": 42,
    "boolean": true,
    "array": [1, 2, 3],
    "object": {
        "key": "value"
    },
    "nullValue": null
}
```

Серіалізований у XML об'єкт виглядає наступним чином:

```xml
<sampleObject>
    <string>Hello, world!</string>
    <number>42</number>
    <boolean>true</boolean>
    <array>
        <item>1</item>
        <item>2</item>
        <item>3</item>
    </array>
    <object>
        <key>value</key>
    </object>
    <nullValue>null</nullValue>
</sampleObject>
```

або так

```xml
<sampleObject>
    <string type="string">Hello, world!</string>
    <number type="number">42</number>
    <boolean type="boolean">true</boolean>
    <array type="array">
        <item>1</item>
        <item>2</item>
        <item>3</item>
    </array>
    <object type="object">
        <key>value</key>
    </object>
    <nullValue type="null">null</nullValue>
</sampleObject>
```
або так

```xml
<sampleObject string="Hello, world!" number="42" boolean="true">
    <array>
        <item>1</item>
        <item>2</item>
        <item>3</item>
    </array>
    <object key="value">
    </object>
    <nullValue>null</nullValue>
</sampleObject>
```



Наступний приклад JavaScript-коду показує, як браузер може використовувати XMLHttpRequest, щоб запитувати об'єкт у форматі JSON з сервера (серверна частина програми опущена; вона повинна містити код, який надсилає дані у форматі JSON-рядка в відповідь на запити за URL).


```js
var http_request = new XMLHttpRequest();
http_request.onreadystatechange = function () {
  if (http_request.readyState !== 4)
    return;
  if (http_request.status !== 200)
    throw new Error('request was defeated');
  do_something_with_object(JSON.parse(http_request.responseText));
  http_request = null;
};
http_request.open("GET", url, true);
http_request.send(null);
```

AJAX не є технологією в повному розумінні цього слова, але об'єднує в собі цілий ряд методологій:

- стандартизоване представлення веб-сторінок за допомогою мов HTML і CSS;
- динамічне відображення та взаємодія з користувачем за допомогою DOM API і DHTML;
- обмін та обробка даних у форматі XML і XSLT або JSON;
- асинхронні запити за допомогою об'єкта XMLHttpRequest.

Основу функціональності технології AJAX забезпечує об'єкт XMLHttpRequest. Його призначення - передавати серверу HTTP- або HTTPS-запити і забезпечувати прийом та обробку відповідей сервера. Функціональність цього об'єкта доступна завдяки набору властивостей і методів. Властивості об'єкта XMLHttpRequest:

- onreadystatechange: Подія зміни стану готовності сервера.
- readyState: Дозволяє дізнатися стан готовності сервера.
- responseText: Зберігає відповідь сервера у вигляді рядка символів.
- responseXML: Зберігає відповідь сервера у вигляді XML-файлу.
- status: Зберігає код відповіді сервера.


## Хід роботи

1. Перевірити чи встановлено пакет програм web-розробника XAMPP
2. Викликати панель керування xampp-control.exe
3. Впевнитись, що web-сервер Apache запущений
4. Перейти за адресою http://127.0.0.1/ або http://localhost/ та впевнитись, що сторінка вітання XAMPP завантажилась
5. Очистити зміст каталогу C:\xampp\htdocs\
6. Створити файл index.html в середині каталогу C:\xampp\htdocs\
7. Створити файл data.json в середині каталогу C:\xampp\htdocs\
8. Перейти за адресою http://127.0.0.1/ або http://localhost/ та впевнитись, що сторінка, яку ви створили, завантажилася корректно
9. Створити файл з назвою script.js та помістити його поряд з файлом index.html
10. Підключити файл script.js в секції `<head>`
11. У файл data.json помістити просте повідомлення
12. З використанням об'єкту XMLHttpRequest звернутися до файлу data.json та вивести на екран повідомлення з файлу.
13. У файл data.json помістити будь-які структуровані дані.
14. З використанням об'єкту XMLHttpRequest звернутися до файлу data.json та розмістити на сторінці інформацію з файлу.
15. У файл script.js помістити код та перевірити його роботу
16. У "підвал" сторінки та файл script.js помістити інформацію про виконавця роботи: група, ПІБ, дата виконання.
17. Для кожного етапу роботи зробити знімки екрану або скопіювати текст консолі та додати їх у звіт з описом кожного скіншота
18. Зберегти звіт у форматі PDF
19. Роздрукувати звіт та письмово відповісти на контрольні запитання

## Контрольні питання

1. Що таке JSON і як його можна описати?
2. Як створити JSON-об'єкт у JavaScript?
3. Які типи даних підтримуються в JSON?
4. Які методи можуть бути використані для перетворення JSON-рядка на JavaScript-об'єкт?
5. Як перетворити JavaScript-об'єкт на JSON-рядок?
6. Які основні властивості має об'єкт JSON?
7. Як використовувати JSON для передачі даних між сервером та клієнтом?
8. Які основні методи можуть бути використані для роботи з JSON-даними?
9. Які переваги має використання JSON для обміну даними в порівнянні з іншими форматами даних?
10. Які інструменти можна використовувати для перегляду та редагування JSON-даних?

## Довідники та додаткові матеріали

1. [Офіційний сайт JSON](https://www.json.org/)
2. ["Introduction to JSON" на MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
3. ["JSON Tutorial" на W3Schools](https://www.w3schools.com/js/js_json_intro.asp)
4. ["JSON - Quick Guide" на Tutorialspoint](https://www.tutorialspoint.com/json/index.htm)
5. ["JSON - JavaScript Object Notation" на GeeksforGeeks](https://www.geeksforgeeks.org/json-javascript-object-notation/)
6. ["Understanding JSON" на Sitepoint](https://www.sitepoint.com/understanding-json/)
7. ["JSON for Beginners" на Programiz](https://www.programiz.com/javascript/json)
8. ["JSON Data" на Javatpoint](https://www.javatpoint.com/json-data)
9. ["JSON Syntax and Structure" на Codecademy](https://www.codecademy.com/learn/learn-json)
10. ["Parsing JSON" на Codeburst](https://codeburst.io/javascript-object-iteration-parsing-with-json-8d1ede1cedec)
11. [W3Schools XML Tutorial](https://www.w3schools.com/xml/default.asp)
12. [Mozilla XML Documentation](https://developer.mozilla.org/en-US/docs/XML_introduction)
13. [XML.com](https://www.xml.com/)
14. [XML Tutorial by Tutorialspoint](https://www.tutorialspoint.com/xml/index.htm)
15. [XML - Introduction by GeeksforGeeks](https://www.geeksforgeeks.org/xml-introduction/)
