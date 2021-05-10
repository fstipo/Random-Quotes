// https://api.quotable.io/random
'use strict'

const newQuote = document.querySelector('.quote');
console.log(newQuote);

const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;
}

getQuote().then(data => {
    console.log(data.content);
    console.log(data.author);
})