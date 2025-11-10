let random = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const form = document.querySelector('form')
const input = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')
const remaing = document.querySelector('.lastResult')

const div = document.createElement('div')
let prevGuess = []
let numGuess = 1;

let playgame = true;
if (playgame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = parseInt(input.value)
        validateGuess(guess)
    })
}

// check number  is between 1 to 100
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }
    else if (guess < 1) {
        alert('enter a number more then 1')
    }
    else if (guess > 100) {
        alert('enter number less then 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayguess(guess)
            displayMsg(`game over 😢 . random message was ${random}`)
            endgame()
        }
        else {
            displayguess(guess)
            check(guess)
        }
    }

}

// check the value enter is equal or greater or smaller etc...
function check(guess) {
    if (guess === random) {
        displayMsg(`you guessed it right 🥳`)
        endgame()
    }
    else if (guess < random) {
        displayMsg(`number is too low ✖️`)
    }
    else {
        displayMsg(`number is too high ✖️`)
    }
}

// display msg
function displayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// display or update the input
function displayguess(guess) {
    input.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaing.innerHTML = `${11 - numGuess}`
}

function newgame() {
    const button = document.querySelector('#newgame')
    button.addEventListener('click', function () {
        random = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaing.innerHTML = `${11- numGuess}`;
        lowOrHi.innerHTML = '';
        input.removeAttribute('disabled')
        resultParas.removeChild(div)

        playgame = true;

    })
}

function endgame() {

    input.value = ''
    input.setAttribute('disabled', '')
    div.classList.add('button')

    div.className = "flex justify-center ";
    div.innerHTML = `<h2 id="newgame"   class="mt-4 px-4 py-2 inline-flex justify-center 
             bg-pink-500 text-white text-sm font-semibold 
             rounded-xl border border-pink-700 shadow-md
             hover:bg-pink-600 hover:scale-95 
             transition-all duration-200 ease-in-out">Start New Game</h2>`;
    resultParas.appendChild(div);
    playgame = false;
    newgame();
}

