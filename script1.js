document.getElementById('createSurveyBtn').addEventListener('click', function() {
    document.getElementById('surveyForm').classList.toggle('hidden');
});

document.getElementById('addQuestionBtn').addEventListener('click', function() {
    const questionsContainer = document.getElementById('questionsContainer');

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.placeholder = 'Введите вопрос';
    
    const answersInput = document.createElement('input');
    answersInput.type = 'text';
    answersInput.placeholder = 'Введите варианты ответов (через запятую)';

    questionDiv.appendChild(questionInput);
    questionDiv.appendChild(answersInput);
    questionsContainer.appendChild(questionDiv);
});

document.getElementById('submitSurveyBtn').addEventListener('click', function() {
    const questions = document.querySelectorAll('.question');
    const anonymous = document.getElementById('anonymousCheckbox').checked;

    const surveyData = {
        questions: [],
        anonymous: anonymous
    };

    questions.forEach(q => {
        const questionText = q.querySelector('input[type="text"]').value;
        const answersText = q.querySelectorAll('input[type="text"]')[1].value;
        const answersArray = answersText.split(',').map(answer => answer.trim());

        surveyData.questions.push({
            question: questionText,
            answers: answersArray
        });
    });

    console.log(surveyData);
    alert('Опрос отправлен! Проверьте консоль для данных.');
});

