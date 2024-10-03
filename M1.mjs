import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal=0
let getal1=0

 getal= parseFloat(await userInput.question("Geef je eerste getal:  " ))
 getal1= parseFloat(await userInput.question("Geef je tweede getal:  " ))

do
{
    while(getal <= 0)
        {
           getal= parseFloat(await userInput.question("Getal moet groter dan 0 zij Geef getal 1:  " ))
        }
        
       
       
        while(getal1 <= 0)  
        {
            getal1= parseFloat(await userInput.question("Getal moet groter dan 0 zijn:  Geef getal 2: " )) 
        }
       

}while(getal < 0 && getal1 < 0 )  

 
console.log("Som is "+ (getal1+getal));
