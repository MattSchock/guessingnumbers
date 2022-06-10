let secretNumber = Math.floor((Math.random() * 10) +1)
let guess = ''

while(guess !== secretNumber) {
 guess = prompt('I am thinking of a number 1-10. guess what number');
if (guess == null) {
    break;
}
}

if (parseInt(guess) == secretNumber) {
    alert(`you guessed right! I was thinking of ${secretNumber}`);
}
