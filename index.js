var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // Assigns a random number from 1-6 to the variable randomNumber 1.
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Assigns a random numbe from 1-6 to the variable randomNumber 2.
var randomDice1 = 'images/dice'+randomNumber1+'.png' // The dice is chosen by concatenating the random number generated in randomNumber 1 and the choice is stored in this variable.
var randomDice2 = 'images/dice'+randomNumber2+'.png' // // The dice is chosen by concatenating the random number generated in randomNumber 2 and the choice is stored in this variable.
document.querySelector('.img1').setAttribute('src', randomDice1); // Changes the first dice's value.
document.querySelector('.img2').setAttribute('src', randomDice2); // Changes the second dice's value.

if (randomNumber1>randomNumber2) 
{
document.querySelector('.container>h1').innerHTML='Player 1 Wins!'; 
}
else if (randomNumber2>randomNumber1)
{
    document.querySelector('.container>h1').innerHTML='Player 2 Wins!';
}
else
{
document.querySelector('.container>h1').innerHTML='Draw!';
}