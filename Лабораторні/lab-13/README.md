# Основні кострукції мови JavaScript

[Перелік усіх робіт](../README.md)

## Мета роботи

Розглянути приклади роботи з масивами та колекціями JavaScript. Навчитись опрацьовувати колекції елемементиів HTML, колекції DOM. Навчитися застосовувати масиви для вирішення практичних задач

## Обладнання

Персональний комп'ютер. Текстовий редактор Sublime Text 3 або Notepad++. Пакет програм XAMPP. Web-браузер Chrome, Firefox, Opera, Internet Explorer*

## Теоретичні відомості

### Умовні оператори

```js
var x = 10;
if (x > 5) {
  console.log("x більше за 5");
}
```

```js
var x = 10;
if (x > 5) {
  console.log("x більше за 5");
} else {
  console.log("x менше або дорівнює 5");
}
```

```js
var x = 10;
if (x > 10) {
  console.log("x більше за 10");
} else if (x === 10) {
  console.log("x дорівнює 10");
} else {
  console.log("x менше за 10");
}
```

```js
var x = 10;
var result = (x > 5) ? "x більше за 5" : "x менше або дорівнює 5";
console.log(result);
```

### Оператор вибору

```js
var fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('Це банан');
    break;
  case 'apple':
    console.log('Це яблуко');
    break;
  case 'orange':
    console.log('Це апельсин');
    break;
  default:
    console.log('Це не банан, не яблуко і не апельсин');
}
```

### Цикли

```js
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```

```js
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

```js
var person = {name: 'John', age: 30, gender: 'male'};
for (var key in person) {
  console.log(key + ': ' + person[key]);
}

```

```js
var colors = ['red', 'green', 'blue'];
for (var color of colors) {
  console.log(color);
}
```


### Масиви

Масив представляється собою упорядкований набір значень, до якого ви посилаєтеся на ім'я і індексу. Припустимо, у вас є масив з ім'ям emp, що містить імена співробітників і упорядкований за номером співробітників. Отже, emp[1] буде являти собою ім'я співробітника номер один, emp[2] - ім'я співробітника номер два, і т.д.

Мова JavaScript не містить явного типу даних "масив". Проте, можливо використовувати зумовлений об'єкт Array і його методи для роботи з масивами в створюваних додатках. Об'єкт Array містить методи для роботи з масивами самими різними способами, наприклад, є методи для об'єднання, перевертання і сортування. Об'єкт містить властивість для визначення довжини масиву, а також властивості для роботи з регулярними виразами.

#### Створення масивів

Наступні вирази створюють однакові масиви:

```js
let arr = new Array(element0, element1, ..., elementN);
let arr = Array(element0, element1, ..., elementN);
let arr = [element0, element1, ..., elementN];
```

element0, element1, ..., elementN - список значень елементів масиву. Якщо значення задані, то ці значення будуть елементами масиву після його ініціалізації. Властивість length у масиву дорівнюватиме кількості аргументів.

Синтаксис з використанням квадратних дужок називається "літерал масиву" (array literal) або "ініціалізатор масиву". Такий запис коротше, ніж інші способи створення масиву, і, як правило, більш краща.

Для создания массива без элементов, но ненулевой длины, возможно использовать одно из следующих выражений:

```js
let arr = new Array(arrayLength);
let arr = Array(arrayLength);
// Точно такой же эффект
let arr = [];
arr.length = arrayLength;
```

Якщо ви хочете форматувати масив одним елементом і цим елементом є число типу Number, то ви повинні використовувати квадратні дужки. Якщо ви створюєте масив за допомогою Array (конструктора або функції), а єдиним елементом цього масиву буде число типу Number, то число це інтерпретується як довжина масиву (arrayLength), а не як елемент типу Number.

```js
let arr = [42]; // Создаёт массив  с одним элементом
let arr = Array(42); // Создаёт массив без элементов,
// но устанавлявает длину массива arr.length в 42
// Это эквивалентно следующему
let arr = [];
arr.length = 42;
```

#### Перебор масивів

Звичайний спосіб перебору масиву в JavaScript - використання циклу for або методів масиву, таких як forEach(), map(), filter(), reduce() та інших. 

```js
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

```js
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
```

```js
var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(squaredNumbers);
```

```js
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers);
```

```js
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);
```

## Хід роботи

1. Перевірити чи встановлено пакет програм web-розробника XAMPP
2. Викликати панель керування xampp-control.exe
3. Впевнитись, що web-сервер Apache запущений
4. Перейти за адресою http://127.0.0.1/ або http://localhost/ та впевнитись, що сторінка вітання XAMPP завантажилась
5. Очистити зміст каталогу C:\xampp\htdocs\
6. Створити файл index.html в середині каталогу C:\xampp\htdocs\
7. Файл index.html зробити з порожнім вмістом секції `<body>`
8. Створити файл script.js в середині каталогу C:\xampp\htdocs\. Під'єднати script.js в index.html за допомогою тегу `<script>`
9. Використовуючи метод Math.random() згенерувати 100 випадкових цілих чисел та занести їх в масив.
10. Вивести в тіло сторінки масив, отриманий в попередньому завданні через крапку з комою за допомогою методу `document.write()`. 
11. Знайти максимальні та мінімальні значення масиву та надрукувати їх на сторінці.
12. Створити двовимірний масив 10х10, заповнити його випадковими числами.
13. Розрахувати сумму кожного рядка масиву. Вивести в одну таблицю масив та сумму кожного рядка.
14. Створити нумерований список з 10 елементів. Звернутися до нього за допомогою JS, за допомогою циклу обробити всі дочірні елементи та записати туди довільний текст.
15. У "підвал" сторінки помістити інформацію про виконавця роботи: група, ПІБ, дата виконання.
16. Для кожного етапу роботи зробити знімки екрану або скопіювати текст консолі та додати їх у звіт з описом кожного скіншота
17. Зберегти звіт у форматі PDF
18. Роздрукувати звіт та письмово відповісти на контрольні запитання

## Контрольні питання

1. Що таке цикл в програмуванні?
2. Які основні типи циклів існують у JavaScript (або будь-якій іншій мові програмування)?
3. Що таке умова в циклі, і для чого вона використовується?
4. Що таке ітерація в контексті циклу?
5. Як можна уникнути безкінечного циклу, і чому це важливо?
6. Що таке масив?
7. Яким чином додати елемент в масив?
8. Перелічте способи циклічної обробки масиву?
9. Яку дію виконує метод **.push()**?
10. Яку дію виконує метод **.pop()**?
11. В чому різниця методів **.pop()** та **.shift()**?

## Довідники та додаткові матеріали

1. [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [W3Schools: JavaScript Tutorial](https://www.w3schools.com/js/)
3. [JavaScript.info: The Modern JavaScript Tutorial](https://javascript.info/)
4. [FreeCodeCamp: JavaScript Tutorial](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)
5. [Codecademy: Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)
6. [Udacity: JavaScript Basics](https://www.udacity.com/course/javascript-basics--ud804)
7. [TutorialsPoint: JavaScript - Operators](https://www.tutorialspoint.com/javascript/javascript_operators.htm)
8. [GeeksforGeeks: JavaScript Basics](https://www.geeksforgeeks.org/javascript-basics/)
9. [Mozilla Hacks: What is the DOM?](https://hacks.mozilla.org/2019/01/what-is-the-dom/)
10. [W3Schools: JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
11. [MDN Web Docs: Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
12. [Google Developers: Introduction to the DOM](https://developers.google.com/web/fundamentals/accessibility/how-to-review)
13. [SitePoint: Working with the Document Object Model (DOM)](https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/) 
14. [Современный учебник JavaScript. Массивы](https://learn.javascript.ru/array)