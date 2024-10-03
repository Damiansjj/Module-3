import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question("Geef een getal?: "));
if(getal1 %2 ==1 ){
    console.log("Het getal " + getal1 + " is een priemgetal ")    
}
else
    console.log("Het getal " + getal1 + " is niet een priemgetal ")
