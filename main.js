(function() {
    "use strict";

     // Array of motivational quotes
   const quotes = [
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Act as if what you do makes a difference. It does.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The only way to do great work is to love what you do.",
    "You are never too old to set another goal or to dream a new dream.",
    "It always seems impossible until it’s done.",
    "With the new day comes new strength and new thoughts.",
    "Don’t let yesterday take up too much of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "Start where you are. Use what you have. Do what you can.",
    "Dream big and dare to fail.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Hard times don’t create heroes. It is during the hard times when the 'hero' within us is revealed.",
    "Don’t wish it were easier. Wish you were better."
  ];

  // Function to display a random quote each day
  function displayDailyQuote() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));

    // Use the day of the year to get a unique quote
    const quoteIndex = dayOfYear % quotes.length;

    // Display the quote
    document.getElementById('quote').innerHTML = quotes[quoteIndex];
  }

  // Display the daily quote on page load
  displayDailyQuote();
})()
 
