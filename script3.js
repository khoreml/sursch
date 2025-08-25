// Получение элементов из DOM
const createPollBtn = document.getElementById('createPollBtn');
const pollContainer = document.getElementById('pollContainer');
const optionsContainer = document.getElementById('optionsContainer');
const newOptionInput = document.getElementById('newOption');
const addOptionBtn = document.getElementById('addOptionBtn');
const submitPollBtn = document.getElementById('submitPollBtn');

// Обработчик событий для кнопки создания опроса
createPollBtn.addEventListener('click', () => {
    // Переключение видимости контейнера опроса
    pollContainer.classList.toggle('hidden');
});

// Обработчик для добавления новых вариантов ответа
addOptionBtn.addEventListener('click', () => {
    const optionText = newOptionInput.value.trim(); // Получение текста нового варианта
    if (optionText) {
        // Создание нового элемента для варианта ответа
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = optionText; // Установка текста элемента
        optionsContainer.appendChild(optionDiv); // Добавление элемента в контейнер
        newOptionInput.value = ''; // Очистка поля ввода
    } else {
        alert('Введите вариант ответа!'); // Сообщение об ошибке
    }
});

// Обработчик для отправки опроса анонимно
submitPollBtn.addEventListener('click', () => {
    // Сбор всех вариантов ответов
    const options = Array.from(optionsContainer.children).map(option => option.textContent);
    if (options.length > 0) {
        alert('Опрос отправлен анонимно! Варианты ответов: ' + options.join(', ')); // Вывод вариантов в алерте
        // Здесь можно добавить код для отправки данных на сервер

        // Очистка контейнера с вариантами и скрытие формы опроса
        optionsContainer.innerHTML = '';
        pollContainer.classList.add('hidden');
    } else {
        alert('Добавьте хотя бы один вариант ответа!'); // Сообщение об ошибке
    }
});
