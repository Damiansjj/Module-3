import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Tot welk getal de rij moet afgedrukt worden?"));
let a = 0;
let b = 1;

console.log(a);
for(; b <= getal;)
{ 
    console.log(b);
    let som = a + b;
    a = b;
    b = som;
}