// div tag
const myNumber = document.getElementById("myNumber");
// Span tag
const score = document.getElementById("score");
// Span tag
const highScore = document.getElementById("highScore");
// p tag
const message = document.getElementById("message");

const rand = () => {
    return Math.floor(Math.random() * 20) + 1;
}


function initGame() {
    score.textContent = getLocalStorage("score");
    highScore.textContent = getLocalStorage("highScore");
}


function check() {
    // Kom ind som en string. Parser her.
    const guess = parseInt(myNumber.value);
    const myScore = parseInt(score.textContent);

    const randNumber = rand();

    if (guess === randNumber) {
        score.textContent = 20 + myScore
        setLocalStorage("score", score.textContent);

        message.textContent = "Correct number!";
        initGame();
    } else {
        if (myScore > parseInt(highScore.textContent)) {
            highScore.textContent = myScore;
            setLocalStorage("highScore", highScore.textContent);
        }

        setLocalStorage("score", "0");
        message.textContent = `Wrong number! ${randNumber}`;
        initGame()
    }
}

function getLocalStorage(key, defaultValue = 0) {
    const value = localStorage.getItem(key);

    return value ? parseInt(value) : defaultValue;
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

window.onload = initGame;