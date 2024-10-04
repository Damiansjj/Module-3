import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef getal 1: "));
let getal1 = parseFloat(await userInput.question("Geef getal 2: "));


while (getal1 !== 0) 
{
    let rest = getal % getal1; 
    getal = getal1;
    getal1 = rest;
}

console.log("De grootste gemene deler van het getallen is: " + getal1);