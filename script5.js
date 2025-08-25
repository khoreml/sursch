const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/message', (req, res) => {
    const userMessage = req.body.message;

    // Здесь вы можете добавить логику для обработки сообщения
    // Например, простая логика ответа
    let botResponse = 'Спасибо за ваше сообщение!';

    if (userMessage.toLowerCase().includes('привет')) {
        botResponse = 'Привет! Как я могу помочь?';
    }

    res.json({ response: botResponse });
});

app.listen(PORT, () => {
    console.log('Сервер запущен на http://localhost:${PORT}');
});
const chatBox = document.getElementById('chat-box');
const userMessageInput = document.getElementById('user-message');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', async () => {
    const message = userMessageInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userMessageInput.value = '';

        // Отправка сообщения на сервер
        const response = await fetch('http://localhost:3000/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();
        addMessage(data.response, 'bot');
    }
});

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка вниз
}

// Обработка нажатия клавиши Enter для отправки сообщения
userMessageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
