const quotes = [
  "Discipline beats motivation when motivation fades.",
  "Your future is created by what you do today, not tomorrow.",
  "If it was easy, everyone would do it.",
  "Consistency is what transforms average into excellence.",
  "The pain you feel today becomes the strength you feel tomorrow.",
  "Small steps every day lead to big results.",
  "Stop waiting for the perfect time. Start now.",
  "Growth begins where comfort ends.",
  "Hard work compounds just like interest.",
  "Dreams don't work unless you do.",
  "Focus on progress, not perfection.",
  "Your only competition is who you were yesterday.",
  "Learn to rest, not to quit.",
  "Success is rented, and the rent is due every day.",
  "Failure is data, not defeat.",
  "The grind is silent, the results are loud.",
  "You become what you repeatedly do.",
  "Execution matters more than ideas.",
  "Discomfort is the price of growth.",
  "Great things never come from comfort zones."
];


const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener("click",()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent=quotes[index];
});

