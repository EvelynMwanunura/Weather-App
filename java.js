let time = new Date();

function formatDate(time) {
  let minutes = time.getMinutes();
  let hours = time.getHours();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[time.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

console.log(formatDate(time));

function calculate() {
  let num1 = Math.random(1, 50) + Math.random(1, 50);
  let num2 = Math.random(1, 50) + Math.random(1, 50);
  let addition = `What is ${num1} + ${num2}`;
  let userResponse = prompt("What is the asnwer? ");
  let answer = num1 + num2;
  return addition;
}
console.log(calculate());
