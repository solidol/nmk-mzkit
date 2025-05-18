const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Використання body-parser для обробки POST-запитів
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Обробка GET-запиту на головну сторінку
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Обробка GET-запиту на інший маршрут
app.get('/about', (req, res) => {
    res.send('Це сторінка About.');
});

// Обробка POST-запиту
app.post('/submit', (req, res) => {
    const { name, message } = req.body;
    res.send(`Отримано дані: Ім'я - ${name}, Повідомлення - ${message}`);
});

// Обслуговування статичних файлів
app.use('/static', express.static(path.join(__dirname, 'public')));

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер Express запущено на http://localhost:3000');
});