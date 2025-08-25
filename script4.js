const chatBox = document.getElementById('chat-box');
const userMessageInput = document.getElementById('user-message');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = userMessageInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userMessageInput.value = '';
        
        // Имитация ответа от представителя компании
        setTimeout(() => {
            addMessage('Мы получили ваше сообщение и скоро свяжемся с вами!', 'bot');
        }, 1000);
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
