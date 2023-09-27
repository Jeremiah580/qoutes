let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes=[
    {
     quote: `"A rose by any other name would smell as sweet."`,
     person: `Shakespeare`,
    }, {
     quote: `"Ask not what your country can do for you; ask what you can do for your country."`,
     person: `John Kennedy`,
    }, {
     quote: `"Frankly, my dear, I don't give a damn."`,
     person: `Rhett Butler`,
    }, {
     quote: `"Genius is one percent inspiration and ninety-nine percent perspiration."`,
     person: `Thomas Edison`,
    }, {
     quote: `"Hell has no fury like a woman scorned."`,
     person: `William Congreve`,
    }, {
     quote: `"Reggae Music is therapeutic."`,
     person: `Jere`,
    },
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
     
    quote.innerText = quotes[random].quote;
    person.innerText =quotes[random].person;

})