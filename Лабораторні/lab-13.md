# Оптимізація коду. Використання функцій

[Перелік усіх робіт](README.md)

## Мета роботи

Розглянути приклади роботи з функціями JavaScript. Навчитись створювати власні функції. Навчитися оптимізувати код за допомогою функцій

## Обладнання

Персональний комп'ютер. Текстовий редактор Sublime Text 3 або Notepad++. Пакет програм XAMPP. Web-браузер Chrome, Firefox, Opera, Internet Explorer

## Теоретичні відомості

Функция - это именованная последовательность операторов (инструкций). Любая функция имеет следующий синтаксис:
```js
function имя (){

оператор;

.......

оператор;

}
```
Сначала идет ключевое слово function, затем имя функции, затем в круглых скобках перечисляются параметры (если они есть), затем в фигурных скобках перечисляются операторы, т.е. последовательность выполняемых действий. Каждый оператор заканчивается точкой с запятой.

## Хід роботи

1. Перевірити чи встановлено пакет програм web-розробника XAMPP
2. Викликати панель керування xampp-control.exe
3. Впевнитись, що web-сервер Apache запущений
4. Перейти за адресою http://127.0.0.1/ або http://localhost/ та впевнитись, що сторінка вітання XAMPP завантажилась
5. Очистити зміст каталогу C:\xampp\htdocs\
6. Створити файл index.html в середині каталогу C:\xampp\htdocs\
7. Перейти за адресою http://127.0.0.1/ або http://localhost/ та впевнитись, що сторінка, яку ви створили, завантажилася корректно
8. Створити файл з назвою script.js та помістити його поряд з файлом index.html
9. Підключити файл script.js в секції `<head>`
10. Відповідно до завдань нижче створити необхідні HTML-форми, призначити обробники подій для елементів форми. Обробники подій оформити у вигляді анонімною функції.
11. У файл script.js помістити код та перевірити його роботу.
12. Створити програму для обчислення коренів квадратного рівняння, за введенними коефіцієнтами. Якщо рівняння не має коренів, повідомити про це користувача. Дискримінант рівняння має обчислювати спеціальна функція.
13. Створити програму складання двох матриць 5х5. Створити функцію яка заповнить матриці довільними цілими числами від 0 до 99. Результат складання вивести в третю матрицю. Складання має виконувати окрема функція, аргументи функції мають бути двовимірними масивами.
14. Створити функцію, яка буде переміщувати кнопку в довільне місце сторінки після її натиснення
15. У "підвал" сторінки та файл script.js помістити інформацію про виконавця роботи: група, ПІБ, дата виконання.
16. Для кожного етапу роботи зробити знімки екрану або скопіювати текст консолі та додати їх у звіт з описом кожного скіншота
17. Зберегти звіт у форматі PDF
18. Роздрукувати звіт та письмово відповісти на контрольні запитання

## Контрольні питання

1. Що таке функція в JavaScript та як вона відрізняється від змінних?
2. Які є основні способи оголошення функцій в JavaScript?
3. Що таке аргументи функції та як їх передавати?
4. Як можна повернути значення з функції в JavaScript?
5. Які є типи функцій в JavaScript і як вони відрізняються?
6. Як можна використовувати функції як аргументи в інших функціях в JavaScript?
7. Як можна створити анонімну функцію в JavaScript і для чого це потрібно?
8. Як можна використовувати рекурсію в JavaScript функціях та які є її переваги та недоліки?

## Довідники та додаткові матеріали

1. [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
2. [W3Schools: JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
3. [JavaScript.info: Functions](https://javascript.info/function-basics)
4. [FreeCodeCamp: Learn JavaScript - Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)
5. [Codecademy: Functions](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions)
6. [Udacity: JavaScript Functions](https://www.udacity.com/course/intro-to-javascript--ud803)
7. [TutorialsPoint: JavaScript - Functions](https://www.tutorialspoint.com/javascript/javascript_functions.htm)
8. [GeeksforGeeks: JavaScript Functions](https://www.geeksforgeeks.org/functions-in-javascript/)
9. [SitePoint: JavaScript Functions: Understanding the Basics](https://www.sitepoint.com/understanding-essence-javascript-functions/)
10. [Smashing Magazine: A Beginner’s Guide To JavaScript Functions And Scope](https://www.smashingmagazine.com/2020/04/beginners-guide-javascript-functions-scope/)
