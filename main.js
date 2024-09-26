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

 // Function to display a random quote based on the minute
 function displayMinuteQuote() {
  const now = new Date();
  const minute = now.getMinutes(); // Get the current minute

  // Use the current minute to get a unique quote
  const quoteIndex = minute % quotes.length;

  // Display the quote
  document.getElementById('quote').innerHTML = quotes[quoteIndex];
}

// Initial display when the page loads
displayMinuteQuote();

// Update the quote every minute (60000 milliseconds = 1 minute)
setInterval(displayMinuteQuote, 60000);



//  DATE
  // Set the target date
  const targetDate = new Date("December 31, 2024 23:59:59").getTime();

  // Update the countdown every second
  const countdownTimer = setInterval(() => {
    const now = new Date().getTime(); // Get the current time
    const timeRemaining = targetDate - now; // Calculate the remaining time

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = 
      `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display some text
    if (timeRemaining < 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown").innerHTML = "Time's up!";
    }
  }, 1000);
})()
 
