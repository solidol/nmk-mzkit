# Створення об'єктів. Ч. 1

[Перелік усіх робіт](README.md)

## Мета роботи



## Обладнання

Персональний комп'ютер. Текстовий редактор Sublime Text 3 або Notepad++. Пакет програм XAMPP. Web-браузер Chrome, Firefox, Opera, Internet Explorer

## Теоретичні відомості

### Об'єкти

У JavaScript об'єкт є складовою частиною мови програмування, яка дозволяє зберігати та організовувати дані у формі пар ключ-значення. Об'єкт може містити різні типи даних, такі як рядки, числа, масиви, функції та інші об'єкти, і може мати методи, які дозволяють виконувати різні дії з цими даними.

Об'єкти в JavaScript створюються за допомогою конструкторів, які містять визначення властивостей та методів об'єкта. Наприклад, можна створити об'єкт користувача, який містить ім'я, прізвище, вік та іншу інформацію, за допомогою такого коду:

```js
var user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  getInfo: function() {
    return this.firstName + " " + this.lastName + ", " + this.age + " years old. Email: " + this.email;
  }
};
```

Цей код створює об'єкт user, який містить різні властивості, такі як firstName, lastName, age та email, а також метод getInfo, який повертає рядок із інформацією про користувача.

Щоб отримати доступ до властивостей об'єкта, можна використовувати крапку або квадратні дужки. Наприклад, для отримання імені користувача можна використовувати такий код:

```js
console.log(user.firstName); // "John"
console.log(user["firstName"]); // "John"
```

### Функції-конструктори

Функції-конструктори - це спосіб створення об'єктів в JavaScript. Вони використовуються для створення багатьох об'єктів з однаковою структурою.

Для створення функції-конструктора необхідно використовувати ключове слово "function" разом з ім'ям функції, яке має починатися з великої літери, щоб відрізнити його від звичайних функцій. В тілі функції-конструктора визначаються властивості та методи, які будуть належати створеному об'єкту.

Одним з ключових моментів при використанні функцій-конструкторів є використання ключового слова "this". Воно вказує на той об'єкт, який буде створюватися за допомогою функції-конструктора.

Наприклад, розглянемо приклад функції-конструктора для створення об'єкта "книга":

```js
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getInfo = function() {
    return this.title + ' by ' + this.author + ', published in ' + this.year;
  };
}

let myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(myBook.getInfo()); // "The Great Gatsby by F. Scott Fitzgerald, published in 1925"
```

У цьому прикладі функція-конструктор "Book" приймає три параметри: назву, автора та рік публікації. За допомогою ключового слова "this" властивості "title", "author" та "year" призначаються новому об'єкту, який буде створюватися за допомогою цієї функції-конструктора. Крім того, функція-конструктор визначає метод "getInfo", який повертає рядок з інформацією про книгу.

Для створення нового об'єкту за допомогою функції-конструктора потрібно використати ключове слово "new".


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
10. У файл script.js помістити код та перевірити його роботу
11. У "підвал" сторінки та файл script.js помістити інформацію про виконавця роботи: група, ПІБ, дата виконання.
12. Для кожного етапу роботи зробити знімки екрану або скопіювати ткест консолі та додати їх у звіт з описом кожного скіншота
13. Зберегти звіт у форматі PDF
14. Роздрукувати звіт та письмово відповісти на контрольні запитання

## Контрольні питання

1. Що таке об'єкти в JavaScript і як вони відрізняються від примітивних типів даних?
2. Як створити об'єкт в JavaScript та які є основні способи оголошення об'єктів?
3. Які є ключові властивості об'єктів в JavaScript та як їх можна змінювати?
4. Як можна додавати та видаляти властивості з об'єкта в JavaScript?
5. Як можна отримати значення властивості об'єкта в JavaScript та як їх можна модифікувати?
6. Що таке вкладені об'єкти в JavaScript та як їх створювати та редагувати?
7. Як можна перебирати властивості об'єкта в JavaScript та що таке цикл for...in?
8. Які є різниці між об'єктами та масивами в JavaScript?
9. Що таке конструктори об'єктів в JavaScript та як вони використовуються?
10. Як можна клонувати об'єкт в JavaScript та що таке глибока/поверхнева копія об'єкта?

## Довідники та додаткові матеріали

1. [MDN Web Docs: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
2. [W3Schools: JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)
3. [JavaScript.info: Objects](https://javascript.info/object)
4. [FreeCodeCamp: Learn JavaScript - Objects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects)
5. [Codecademy: Objects](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects)
6. [Udacity: JavaScript Objects](https://www.udacity.com/course/intro-to-javascript--ud803)
7. [TutorialsPoint: JavaScript - Objects](https://www.tutorialspoint.com/javascript/javascript_objects.htm)
8. [GeeksforGeeks: JavaScript Objects](https://www.geeksforgeeks.org/javascript-objects/)
9. [SitePoint: Understanding Objects in JavaScript](https://www.sitepoint.com/understanding-objects-in-javascript/)
10. [Smashing Magazine: A Beginner’s Guide to JavaScript Objects](https://www.smashingmagazine.com/2019/10/beginners-guide-javascript-objects/)
