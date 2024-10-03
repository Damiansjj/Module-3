import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


for(let tellerhoogte=0; tellerhoogte <4; tellerhoogte ++){

for(let breedteller = 0; breedteller < tellerhoogte; breedteller++){
    process.stdout.write("*");

}
console.log("*")
}