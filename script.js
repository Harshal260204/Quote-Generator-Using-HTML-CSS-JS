const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  { text: "Your limitation—it's only your imagination.", author: "Unknown" },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  {
    text: "Success doesn’t just find you. You have to go out and get it.",
    author: "Unknown",
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown",
  },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  {
    text: "Don’t stop when you’re tired. Stop when you’re done.",
    author: "Unknown",
  },
  {
    text: "Wake up with determination. Go to bed with satisfaction.",
    author: "Unknown",
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Unknown",
  },
  { text: "Little things make big days.", author: "Unknown" },
  {
    text: "It’s going to be hard, but hard does not mean impossible.",
    author: "Unknown",
  },
  { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
  {
    text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    author: "Unknown",
  },
  {
    text: "The key to success is to focus on goals, not obstacles.",
    author: "Unknown",
  },
  { text: "Dream it. Believe it. Build it.", author: "Unknown" },
  { text: "Your only limit is your mind.", author: "Unknown" },
  { text: "Success is not for the lazy.", author: "Unknown" },
  {
    text: "Failure is not the opposite of success; it’s part of success.",
    author: "Arianna Huffington",
  },
  {
    text: "It’s never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    text: "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    text: "Life isn’t about finding yourself. It’s about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    text: "Hustle in silence and let your success make the noise.",
    author: "Unknown",
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  {
    text: "If you’re not willing to risk the usual, you’ll have to settle for the ordinary.",
    author: "Jim Rohn",
  },
  {
    text: "Don’t wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    text: "Opportunities don’t happen. You create them.",
    author: "Chris Grosser",
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Don’t limit your challenges. Challenge your limits.",
    author: "Unknown",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Believe in yourself and all that you are.",
    author: "Christian D. Larson",
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    text: "Keep going. Everything you need will come to you at the perfect time.",
    author: "Unknown",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "Success isn’t overnight. It’s when every day you get a little better than the day before.",
    author: "Unknown",
  },
  {
    text: "It’s not about perfect. It’s about effort.",
    author: "Jillian Michaels",
  },
  {
    text: "Every accomplishment starts with the decision to try.",
    author: "John F. Kennedy",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
];

// Accessing Elements
const quotesText = document.getElementById("Quote-text");
const quotesAuthor = document.getElementById("Author-text");
const savedQuotesContainer = document.getElementById("Saved-Quotes");

// Generating Quote
document.getElementById("generate").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quotesText.innerText = quote.text;  
    quotesAuthor.innerText = `- ${quote.author}`;  
});

// Saving Current Quote to Local Storage
document.getElementById("save").addEventListener("click", function () {
    const quoteText = quotesText.innerText;
    const authorText = quotesAuthor.innerText;

    // Avoid saving if no quote is generated yet
    if (!quoteText || quoteText === 'Press "Generate Quote" to get started!') return;

    // Get saved quotes from localStorage or initialize with an empty array
    let savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    savedQuotes.push({ text: quoteText, author: authorText });
    localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));

    displaySavedQuotes();  // Update display of saved quotes
});

// Display saved quotes from local storage
function displaySavedQuotes() {
    const savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    savedQuotesContainer.innerHTML = "";  // Clear previous list

    // Loop through each saved quote and add to container
    savedQuotes.forEach((quote) => {
        const li = document.createElement("li");
        li.innerText = `${quote.text} ${quote.author}`;  
        savedQuotesContainer.appendChild(li);
    });
}

// Clear all saved quotes from local storage
document.getElementById("clear").addEventListener("click", function () {
    localStorage.removeItem("savedQuotes");
    displaySavedQuotes();  // Clear the displayed list
});

// Load saved quotes on page load
displaySavedQuotes();