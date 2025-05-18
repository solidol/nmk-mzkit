# Створення Front-end за допомогою пакетів NPM

[Перелік усіх робіт](../README.md)

## Мета роботи

Ознайомитися з використанням пакетного менеджера NPM для створення та зборки Front-end проєктів.

## Обладнання

Персональний комп'ютер. Текстовий редактор Sublime Text 3 або Notepad++. Пакет програм XAMPP. Web-браузер Chrome, Firefox, Opera, MS Edge.

## Теоретичні відомості

- **NPM (Node Package Manager)** — це менеджер пакетів для JavaScript, який дозволяє встановлювати, оновлювати та керувати залежностями. Наприклад:
  ```bash
  npm install lodash
  ```
  Ця команда встановлює бібліотеку `lodash` у ваш проєкт.

- **package.json** — файл конфігурації, який містить інформацію про проєкт, залежності та скрипти. Приклад:
  ```json
  {
    "name": "my-project",
    "version": "1.0.0",
    "scripts": {
      "build": "webpack",
      "start": "webpack serve"
    },
    "dependencies": {},
    "devDependencies": {
      "webpack": "^5.0.0",
      "webpack-cli": "^4.0.0"
    }
  }
  ```

- **Webpack** — інструмент для зборки модулів, який дозволяє оптимізувати ресурси (CSS, JS, зображення тощо). Наприклад, конфігурація `webpack.config.js`:
  ```javascript
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
  ```

- **Babel** — транспайлер, який дозволяє використовувати сучасний JavaScript у старих браузерах. Наприклад, файл `.babelrc`:
  ```json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

## Хід роботи

1. Ініціалізація проєкту:
   - Виконайте команду `npm init -y` для автоматичного створення файлу `package.json`.

2. Встановлення залежностей:
   - Встановіть Webpack: `npm install webpack webpack-cli --save-dev`.
   - Встановіть Babel: `npm install @babel/core @babel/preset-env babel-loader --save-dev`.
   - Встановіть CSS-обробники: `npm install style-loader css-loader --save-dev`.

3. Налаштування Webpack:
   - Створіть файл `webpack.config.js` і додайте конфігурацію для обробки JavaScript та CSS (див. приклад вище).

4. Написання коду:
   - Створіть папку `src` і додайте файли `index.js`, `style.scss` та `template.hbs`.
   - Встановіть Handlebars та SCSS:
     ```bash
     npm install handlebars-loader --save-dev
     npm install sass sass-loader --save-dev
     ```
   - Оновіть `webpack.config.js`, додавши правила для обробки SCSS та Handlebars:
     ```javascript
     module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
           },
         },
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
         {
           test: /\.hbs$/,
           loader: 'handlebars-loader',
         },
         {
           test: /\.scss$/,
           use: ['style-loader', 'css-loader', 'sass-loader'],
         },
       ],
     },
     ```

   - Приклад `template.hbs`:
     ```hbs
     <div class="container mt-5">
       <h1 class="text-center text-primary">{{title}}</h1>
       <button class="btn btn-success mt-3">{{buttonText}}</button>
     </div>
     ```

   - Приклад `index.js`:
     ```javascript
     import './style.scss';
     import template from './template.hbs';

     const data = {
       title: 'Hello, Handlebars and SCSS!',
       buttonText: 'Click Me',
     };

     document.body.innerHTML = template(data);
     ```

   - Приклад `style.scss`:
     ```scss
     $primary-color: #007bff;
     $background-color: #f8f9fa;

     body {
       background-color: $background-color;
     }

     h1 {
       color: $primary-color;
     }
     ```

5. Збірка проєкту:
   - Виконайте команду `npx webpack` для створення зібраного файлу в папці `dist`.

6. Перевірка результату:
   - Відкрийте файл `dist/index.html` у браузері та перевірте роботу. Ви повинні побачити сторінку, створену за допомогою шаблонізатора Handlebars та стилізовану SCSS.

## Контрольні питання

1. Що таке NPM і для чого він використовується?
2. Які основні функції файлу `package.json`?
3. Як працює Webpack і для чого він потрібен?
4. Що таке Babel і як він допомагає у розробці?
5. Як виконати ініціалізацію проєкту за допомогою NPM?
6. Як налаштувати Webpack для обробки CSS-файлів?
7. Як підключити Bootstrap 5 до проєкту за допомогою NPM?
8. Як використовувати шаблонізатор Handlebars у Front-end проєкті?
9. Як налаштувати Webpack для обробки SCSS?

## Довідники та додаткові матеріали

- [Офіційна документація NPM](https://docs.npmjs.com/)
- [Webpack Documentation](https://webpack.js.org/)
- [Babel Documentation](https://babeljs.io/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [Handlebars Documentation](https://handlebarsjs.com/)
- [Sass Documentation](https://sass-lang.com/)

