import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal = 0;
let getal2 = 0;
let som = 0;
let gemiddelde= 0;

do
{
 
    getal2++;
    getal = parseFloat(await userInput.question("Geef een getal in: "))
    som += getal;
    gemiddelde = (som/getal2)


}while(gemiddelde < 25);


console.log("Het gemiddelde is " + gemiddelde);