# Використання бібліотеки jQuery для обробки подій та модифікації сторінки

[Перелік усіх робіт](../README.md)

## Мета роботи

Навчитись користуватись бібліотекою jQuery, оброблювати події елементів сторінки

## Обладнання

Персональний комп'ютер. Текстовий редактор Sublime Text 3 або Notepad++. Пакет програм XAMPP. Web-браузер Chrome, Firefox, Opera, MS Edge

## Теоретичні відомості

jQuery - набір функцій JavaScript, що фокусується на взаємодії JavaScript і HTML. Бібліотека jQuery допомагає легко отримати доступ до будь-якого елементу DOM, обробити атрибути і вміст елементів DOM, маніпулювати ними. Також бібліотека jQuery надає зручний API для роботи з AJAX.

|![Рис. 18-1. Логотип jQuery](img/18001.svg)|
|:------------------------------------------|
| Рис. 18-1. Логотип jQuery |

За допомогою подійної системи jQuery або стандартної подійної системи браузера, створюються Веб-сторінки, які реагують на дії користувача, що робить їх динамічними і зручнішими в користуванні.

В усіх браузерах є оголошені стандартні JavaScript події, як наприклад: onclick — подія, яка виникає при натисканні на елемент сторінки, ondbclick — подвійне натискання по елементу сторінки, onmousemove — подія, яка виникає при переміщенні вказівника миші над елементом і інші. Всі вони вказуються в параметрі теґу, а їхнє значення — це код обробника даної події.

Обробники можна встановити для наступних подій:

 - **blur** — надсилається елементу, коли він втрачає фокус введення;
 - **focus** — елемент отримав фокус (наприклад, коли користувач натиснув мишею на поле для введення тексту);
 - **load** — надсилається елементу, коли він і усі його дочірні елементи повністю завантажено у браузер, дану подію можна надсилати елементам сторінки, які асоціюються з URL;
 - **resize** — зміна розмірів елементу;
 - **scroll** — прокручування сторінки;
 - **unload** — надсилається елементу window, коли користувач переміщується на іншу Веб-сторінку;
 - **click** — натискання мишею по елементу (клік вміщає натискання і відпускання кнопки миші)
 - **dblclick** — подвійне натискання по елементу
 - **mousedown** — натискання кнопки миші по елементу;
 - **mouseup** — відпускання кнопки миші над елементом;
 - **mousemove** — переміщення миші над елементом;
 - **mouseover** — переміщення миші над елементом;
 - **mouseout** — вихід миші за межі елемента;
 - **mouseenter** — вхід миші в межі елемента;
 - **mouseleave** — теж саме що і mouseout, використовуються в браузерах Internet Explorer;
 - **change** — надсилається елементу сторінки, вміст якого змінився (наприклад введення нового символу в поле для введення тексту);
 - **select** — надсилається елементу, коли користувач виділяє всередині нього текст;
 - **submit** — надсилається елементу форми, коли користувач намагається надіслати дані за допомогою форми;
 - **keydown** — натискання клавіші клавіатури;
 - **keypress** — натискання і відпускання клавіші клавіатури;
 - **keyup** — відпускання клавіші клавіатури.

Практично для кожної з подій, обробники яких можливо встановити через функцію “on”, існує функція, яка виконує таку ж дію, але являється скороченням. Тобто для події “click” існує функція click, якій передається один параметр — обробник події; для події “ready” існує функція ready і т.д.

Наприклад наступні виклики функцій аналогічні:
```js
$(document).on("ready", function (){ 
	alert ("Hello, World") ;
});

$(document).ready(function (){ 
	alert ("Hello, World") ;
});
```
Для прикладу надано обробку події подвійного кліка на елементі сторінки. Ця функція виконується щоразу, коли користувач подвійно натискає на даний елемент HTML. Після подвійного натиснення елемент зникає.

Синтаксис
```js
$(selector).dblclick(function(){});
або
$(selector).on("dblclick",function(){});
```
Приклад
```js
$("p").dblclick(function(){
$(this).hide();
});
```
## Хід роботи

1. Перевірити чи встановлено пакет програм web-розробника XAMPP
2. Викликати панель керування xampp-control.exe
3. Впевнитись, що web-сервер Apache запущений
4. Перейти за адресою http://127.0.0.1/ або http://localhost/ та впевнитись, що сторінка вітання XAMPP завантажилась
5. Очистити зміст каталогу C:\xampp\htdocs\
6. Створити файл index.html в середині каталогу C:\xampp\htdocs\
7. Перейти за адресою http://127.0.0.1/ або http://localhost/ та впевнитись, що сторінка, яку ви створили, завантажилася корректно
8. Завантажити пакет бібліотеки jQuery
9. В каталозі з вашою сторінкою створити каталог js
10. Створити файл з назвою script.js та помістити його в каталог js
11. В каталог js перемістити файли jQuery
12. Підключити файл jquery*.js або jquery*.min.js внизу тіла сторінки
13. Підключити файл script.js внизу тіла сторінки
14. Створити 5 абзаців на сторінці та виконати для них наступні дії:
	- Шляхом додавання або прибирання класів до абзацу змінювати колір з чорного на червоний і навпаки за кліком мишою
	- В 5-й абзац копіювати текст тих абзаців на які наведено курсор
	- Створити поле вводу, в яке можна ввести розмір шрифту абзаців та застосувати це значення

|![Рис. 18-2. Приблизний зовнішній вигляд результата](img/18001.png)|
|:------------------------------------------------------------------|
| Рис. 18-2. Приблизний зовнішній вигляд результата |

15. Створити 2 тестових поля вводу на сторінці та виконати для них наступні дії:
	- Під час введення тексту в одне поле дублювати його в іншому і навпаки
	- Якщо введено число "0" очищати зміст полів
	- Якщо введено крапку віводити повідомлення alert() з текстом із поля

|![Рис. 18-3. Приблизний зовнішній вигляд результата](img/18002.png)|
|:------------------------------------------------------------------|
| Рис. 18-3. Приблизний зовнішній вигляд результата |

16. У файл script.js помістити код обробників подій та перевірити його роботу
17. У "підвал" сторінки та файл script.js помістити інформацію про виконавця роботи: група, ПІБ, дата виконання.
18. Для кожного етапу роботи зробити знімки екрану або скопіювати текст консолі та додати їх у звіт з описом кожного скіншота
19. Зберегти звіт у форматі PDF
20. Роздрукувати звіт та письмово відповісти на контрольні запитання

## Контрольні питання

1. Що таке jQuery і як він пов'язаний з JavaScript?
2. Як підключити jQuery до свого проекту?
3. Які події можна обробити з допомогою jQuery?
4. Які методи для роботи з DOM-елементами є в jQuery?
5. Як виконати анімацію з допомогою jQuery?
6. Як використовувати селектори для вибору елементів з DOM-дерева в jQuery?
7. Як виконати AJAX-запит з допомогою jQuery?
8. Як додавати та видаляти класи з елементів за допомогою jQuery?
9. Як виконати ефект "плавне появлення" елемента з допомогою jQuery?
10. Які існують методи для обробки форм з допомогою jQuery?
    
## Довідники та додаткові матеріали

1. [jQuery documentation](https://api.jquery.com/)
2. [Learn jQuery](https://learn.jquery.com/)
3. [jQuery Tutorial for Beginners](https://www.w3schools.com/jquery/)
4. [10 Reasons Why You Should Use jQuery](https://www.sitepoint.com/10-reasons-why-you-should-use-jquery/)
5. [jQuery in 2021 - Is It Still Relevant?](https://www.educba.com/jquery-in-2021/)
6. [Introduction to jQuery by Mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
7. [jQuery Examples](https://www.w3schools.com/jquery/jquery_examples.asp)
8. [jQuery Cheat Sheet](https://websitesetup.org/jquery-cheat-sheet/)
9. [jQuery UI](https://jqueryui.com/)
10. [jQuery Validation Plugin](https://jqueryvalidation.org/)
11. [Современный учебник JavaScript](https://learn.javascript.ru)
12. [Офіційний сайт jQuery](https://jquery.com)
13. [jQuery API documentation](https://api.jquery.com)
14. [Плагіни jQuery UI](https://jqueryui.com)
15. [jQuery W3School](https://www.w3schools.com/jquery/)
