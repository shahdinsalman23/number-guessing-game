import inquirer from 'inquirer';
const secretNumber = Math.floor(Math.random() * 100) + 1;
async function playGame() {
    console.log('Welcome to Guess the Number Game!');
    const { guess } = await inquirer.prompt({
        type: 'number',
        name: 'guess',
        message: 'Guess the number (between 1 and 100):',
        validate: (input) => !isNaN(input) && input >= 1 && input <= 100,
    });
    if (guess === secretNumber) {
        console.log('Congratulations! You guessed the correct number!');
    }
    else {
        console.log(`Sorry, the correct number was ${secretNumber}. Better luck next time!`);
    }
}
playGame();
