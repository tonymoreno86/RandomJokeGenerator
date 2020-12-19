const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchLineBtn = document.getElementById('punchLineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline;


punchLineBtn.addEventListener('click', getPunchline);

newJokeBtn.addEventListener('click', getJoke);

function getPunchline() {
    punchlineDiv.innerHTML = punchline
    punchlineDiv.classList.add('bubble');
    punchLineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');

    const joke = await jokePromise.json();

    console.log(joke[0]);

    setupDiv.innerHTML = joke[0].setup;

    punchline = joke[0].punchline;
    
    punchlineDiv.innerHTML = '';
    punchlineDiv.classList.remove('bubble');
    
    punchLineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

getJoke()
