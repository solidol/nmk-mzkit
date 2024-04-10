# Основні кострукції мови JavaScript

[Перелік усіх робіт](README.md)

## Мета роботи

Розглянути приклади роботи з масивами та колекціями JavaScript. Навчитись опрацьовувати колекції елемементиів HTML, колекції DOM. Навчитися застосовувати масиви для вирішення практичних задач

## Обладнання

Персональний комп'ютер. Текстовий редактор Sublime Text 3 або Notepad++. Пакет програм XAMPP. Web-браузер Chrome, Firefox, Opera, Internet Explorer*

## Теоретичні відомості

### Масиви

Масив представляється собою упорядкований набір значень, до якого ви посилаєтеся на ім'я і індексу. Припустимо, у вас є масив з ім'ям emp, що містить імена співробітників і упорядкований за номером співробітників. Отже, emp[1] буде являти собою ім'я співробітника номер один, emp[2] - ім'я співробітника номер два, і т.д.

Мова JavaScript не містить явного типу даних "масив". Проте, можливо використовувати зумовлений об'єкт Array і його методи для роботи з масивами в створюваних додатках. Об'єкт Array містить методи для роботи з масивами самими різними способами, наприклад, є методи для об'єднання, перевертання і сортування. Об'єкт містить властивість для визначення довжини масиву, а також властивості для роботи з регулярними виразами.

### Створення масивів

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

## Хід роботи

1. Перевірити чи встановлено пакет програм web-розробника XAMPP
2. Викликати панель керування xampp-control.exe
3. Впевнитись, що web-сервер Apache запущений
4. Перейти за адресою http://127.0.0.1/ або http://localhost/ та впевнитись, що сторінка вітання XAMPP завантажилась
5. Очистити зміст каталогу C:\xampp\htdocs\
6. Створити файл index.html в середині каталогу C:\xampp\htdocs\
7. Використовуючи метод Math.random() згенерувати 100 випадкових цілих чисел та занести їх в масив.
8. Вивести масив, отриманий в попередньому завданні через крапку з комою. Знайти максимальні та мінімальні значення масиву та надрукувати їх на сторінці.
9.  За допомогою методів push() та pop() вилучити 50 останніх елементів з масиву, вилучені елементи помістити в два окремих масиви, таким чином, щоб непарні значення розміщувалися в одному масиві, парні значення розміщувалися в іншому
10. Створити двовимірний масив 10х10, заповнити його випадковими числами.
11. Розрахувати сумму кожного рядка масиву. За допомогою document.write() вивести в одну таблицю масив та сумму кожного рядка.
12. Створити нумерований список з 10 елементів. Звернутися до нього за допомогою JS, за допомогою циклу обробити всі дочірні елементи та записати туди довільний текст.
13. У "підвал" сторінки помістити інформацію про виконавця роботи: група, ПІБ, дата виконання.
14. Для кожного етапу роботи зробити знімки екрану або скопіювати текст консолі та додати їх у звіт з описом кожного скіншота
15. Зберегти звіт у форматі PDF
16. Роздрукувати звіт та письмово відповісти на контрольні запитання

## Контрольні питання

1. Що таке масив?
2. Яким чином додати елемент в масив?
3. Перелічте способи циклічної обробки масиву?
4. Яку дію виконує метод **.push()**?
5. Яку дію виконує метод **.pop()**?
6. В чому різниця методів **.pop()** та **.shift()**?

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