const quotes = [{
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `-Mae West`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `-Albert Einstein`
}];

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
});