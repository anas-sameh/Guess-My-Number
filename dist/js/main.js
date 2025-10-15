let secret = Math.floor(Math.random() * 20) + 1 ;
let score = 20 ;
let highscore = 0 ;


let guessInput = document.getElementById("guess");

document.querySelector('.btn2').addEventListener('click', function () {
    let guess = Number(guessInput.value); 

    if (!guess ) {
        document.querySelector('.message').textContent = '⛔ Please enter number ';
    }
    else if (guess > 20 || guess < 1 ) {
        document.querySelector('.message').textContent = '⛔ number between 1 and 20';
    }

    else if (guess === secret) {
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }


    else {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secret ? '📈 Too high' : '📉 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#a00';
        }
    }
});

document.querySelector('.btn').addEventListener('click', function () {
    score = 20;
    secret = Math.floor(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.getElementById('guess').value = '';
});



const input = document.getElementById("guess");
const checkBtn = document.querySelector(".btn2 button");


input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    checkBtn.click(); 
  }
});
