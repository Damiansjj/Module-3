import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal= parseFloat(await userInput.question("Welke getal wil u berekenen " ))
console.log("\nDe tafel van " + getal + ":" )
for(let maaltafel =1; maaltafel <=10; maaltafel ++){

    console.log(maaltafel + " X " + getal + " = " + (getal* maaltafel))}