function checkAnswers() {
    const answers = {
        answer1: "Billiard",
        answer2: "Selos",
        answer3: "Sinubo ko",
        answer4: "Marawi",
        answer5: "Kiss",
        answer6: "Red",
        answer7: "Micah Mitch",
        answer8: "No",
        answer9: "Comfort galing kay Earl Xavier Lysla (add nyo yan pogi yan)",
        answer10: "Leonardo da Vinci",
        answer11: "12",
        answer12: "Imissyou",
        answer13: "Charles Babbage"
    };

    let correctCount = 0;
    let incorrectQuestions = [];

    for (let i = 1; i <= 13; i++) {
        const userAnswer = document.getElementById(`answer${i}`).value.trim();
        const correctAnswer = answers[`answer${i}`];

        const iconElement = document.getElementById(`icon${i}`);
        iconElement.innerHTML = "";  // Reset the icon

        const correctAnswerElement = document.getElementById(`correctAnswer${i}`);
        correctAnswerElement.style.display = "none";  // Initially hide correct answer

        const checkIconElement = document.getElementById(`checkIcon${i}`);
        checkIconElement.innerHTML = "";  // Reset the checkmark

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            correctCount++;

            // Display checkmark for correct answers
            checkIconElement.innerHTML = "✔";
        } else {
            incorrectQuestions.push(i);

            // Display "X" icon for incorrect answers
            iconElement.innerHTML = "X";

            // Display correct answer for incorrect responses
            correctAnswerElement.style.display = "inline";
        }
    }

    const resultElement = document.getElementById('result');
    let resultMessage = `You got ${correctCount} out of 13 questions correct.`;

    if (incorrectQuestions.length > 0) {
        for (const questionNumber of incorrectQuestions) {
            document.getElementById(`correctAnswer${questionNumber}`).style.display = "inline";
        }
    }

    resultElement.innerHTML = resultMessage;

    // Show result image based on the correct count
    const resultImage = document.getElementById('result-image');
    if (correctCount < 5) {
        resultImage.src = 'https://www.bing.com/th/id/OGC.e7d8ac79d1fa4b8d71f0c51069099dc3?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fh8xJWSphoGQAAAAC%2fcry-emoji.gif&ehk=Vy0hReVxnAYUdDjfgqNk7ClQskMT%2fKk4EhdtySEmaMg%3d';
        openModal(correctCount);

    } else {
        resultImage.src = 'https://www.bing.com/th/id/OGC.3b9e9c51bfd0d553348c42cba8b03ad7?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fIVh7YxGaB_4AAAAC%2fnerd-emoji.gif&ehk=hSNmTERSLeVNMDYU9bWIP%2bTDAXicO07lnoNYPzNcdjw%3d';
        openModal(correctCount);
    }
    if (correctCount > 10) {
        resultImage.src = 'https://www.bing.com/th/id/OGC.26c147c5fdb3a480a56e0b346a42c9e2?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fimages%2f26c147c5fdb3a480a56e0b346a42c9e2%2ftenor.gif&ehk=nhGI%2fLYDgbFIZT6EZJgmGASLB%2bteSmOwmlgMs1ir8YE%3d';
        openModal(correctCount);
    }


}

function openModal(score) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('score-text').innerText = `Your Score: ${score} out of 13`;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function retryQuiz() {
    // Reset input fields and hide previous results
    for (let i = 1; i <= 13; i++) {
        document.getElementById(`answer${i}`).value = "";
        document.getElementById(`icon${i}`).innerHTML = "";
        document.getElementById(`correctAnswer${i}`).style.display = "none";
        document.getElementById(`checkIcon${i}`).innerHTML = "";
    }

    // Clear previous result message
    document.getElementById('result').innerHTML = "";

    // Close the modal
    closeModal();
}
 