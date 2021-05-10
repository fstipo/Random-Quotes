// https://api.quotable.io/random
'use strict'

const newQuote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn')


const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;
}

getQuote().then(data => {
    author.innerHTML = `-${data.author}`;
    newQuote.innerHTML = data.content;
})

btn.addEventListener('click', () => {
    window.location.reload();
});