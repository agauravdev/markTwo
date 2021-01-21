const {textQuestion, listQuestion, binaryQuestion} = require('./cli-input');
const chalk = require('chalk');

let gold = 0;

console.log(chalk.magenta('💰Lets start with the treasure hunt💰\n-------------------------------------------------------\n'));

if(listQuestion(['"What a man can do, and what a man can\'t do"', 'What a man must do, and what a man won\'t do"', '"What a man can do, and what a man won\'t do"'], chalk.yellow("First question be for 1 gold coin\n\nQ)According to Jack, what are the only two rules that really matter?"), 0)) {
  gold++;
  console.log(chalk.green('You won a gold coin, yrrr\n\n'));
} else console.log(chalk.red('The treasure lost in the sea\n\n'));

if(textQuestion(chalk.yellow('Second question be for 2 gold coins\n\nQ)According to Jack, what does the Black Pearl represent?'), 'freedom'))
{
    gold = gold +  2;
    console.log(chalk.green('You won 2 gold coins, yrrr\n\n'));
} else console.log(chalk.red('The treasure lost in the sea, you foolish pirate\n\n'));

if(binaryQuestion(chalk.yellow('Third question be for 4 gold coins\n\nQ)Did Morgan & Bartholomew write the pirate code?'), true)){
    gold = gold +  4;
    console.log(chalk.green('You won 4 gold coins, you becoming rich\n\n'));
} else console.log(chalk.red('Your big treasure lost in the sea, grrr\n\n'));

if(listQuestion([458, 576, 694, 883], chalk.yellow('Final question be for 8 gold coins\n\nQ)The treasure is made up of how many pieces?'), 3)){
    gold = gold +  8;
    console.log(chalk.green('You won a fortune of 8 gold coins, you gonna be attacked soon\n\n'));
} else console.log(chalk.red('Your big treasure lost in the sea, grrr\n\n'));



console.log(chalk.cyan("\nYou've got "+gold+" gold in yer ship. Expect attacks soon 😈.\n"))

console.log('High scores\n');
console.log('Ashutosh : 12  ');
console.log('Prateek : 10 ');
console.log('Biba : 6');