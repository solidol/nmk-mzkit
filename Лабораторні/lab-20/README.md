# Створення інтерактивної галереї з використання технології AJAX

[Перелік усіх робіт](../README.md)

## Мета роботи



## Обладнання

Персональний комп'ютер. Текстовий редактор Sublime Text 3 або Notepad++. Пакет програм XAMPP. Web-браузер Chrome, Firefox, Opera, MS Edge

## Теоретичні відомості

Розгляньте приклад файлу JSON з масивом даних [JSON](src/data.json)

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
11. У файл data.json помістити структуровані дані про набір зображень.
12. З використанням об'єкту XMLHttpRequest звернутися до файлу data.json та розмістити на сторінці інформацію з файлу.
13. На сервері розсістити папку із зображеннями. У файл data.json додати дані про імена файлів.
14. Під час аналізу даних JSON вивести не тільки інформацію про зображення, а і самі зображення.
15. У файл script.js помістити код та перевірити його роботу
16. У "підвал" сторінки та файл script.js помістити інформацію про виконавця роботи: група, ПІБ, дата виконання.
17. Для кожного етапу роботи зробити знімки екрану або скопіювати текст консолі та додати їх у звіт з описом кожного скіншота
18. Зберегти звіт у форматі PDF
19. Роздрукувати звіт та письмово відповісти на контрольні запитання

## Контрольні питання

1. Що таке AJAX і як він пов'язаний з JavaScript і HTTP?
2. Які основні методи об'єкту XMLHttpRequest?
3. Як відправити AJAX запит з допомогою чистого JavaScript?
4. Які існують типи відповідей AJAX-запитів?
5. Як відслідковувати прогрес AJAX-запиту?
6. Як здійснювати паралельні AJAX запити?
7. Які підходи використовуються для тестування AJAX-запитів?
8. Які проблеми можуть виникати при виконанні AJAX-запитів і як їх вирішувати?
9. Як обробити помилки, що виникають при відправці AJAX запиту?
10. Як використовувати AJAX для оновлення частин сторінки без перезавантаження сторінки? 


## Довідники та додаткові матеріали

1. [MDN web docs: AJAX — Asynchronous JavaScript and XML](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
2. [jQuery AJAX Documentation](https://api.jquery.com/category/ajax/)
3. [W3Schools AJAX Tutorial](https://www.w3schools.com/xml/ajax_intro.asp)
4. [SitePoint: AJAX and JSON: A Tandem Tutorial](https://www.sitepoint.com/ajax-json-tutorial/)
5. [A Beginner’s Guide to AJAX Development with PHP](https://www.codexworld.com/ajax-development-with-php/)
6. [Introduction to AJAX for PHP Web Applications](https://code.tutsplus.com/tutorials/introduction-to-ajax-for-php-web-applications--cms-32404)
7. [AJAX CRUD with PHP & MySQL: Tutorial for Beginners](https://www.tutorialrepublic.com/php-tutorial/php-mysql-ajax-crud.php)
8. [Using Fetch | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
9. [AJAX and APIs for Beginners](https://skillcrush.com/blog/ajax-apis-for-beginners/)
10. [How to use AJAX to improve your web applications](https://blog.logrocket.com/how-to-use-ajax-to-improve-your-web-applications/) 
