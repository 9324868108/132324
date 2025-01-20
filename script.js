const quotes = [
    "You are capable of amazing things.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best way to predict the future is to create it.",
    "Your only limit is your mind.",
    "Dream it. Wish it. Do it."
];

const colors = [
    "#ff9aa2", "#ffb7b2", "#ffdac1", "#e2f0cb", "#b5ead7", "#c7ceea"
];

function refreshMood() {
    // Change the background color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // Change the quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerText = randomQuote;
}
