`#! /usr/bin/env/ node`;
import inquirer from "inquirer";
console.log(`Welcome to MEHAK coding`);
let myTable = true;
while (myTable) {
    let myInput = await inquirer.prompt([
        {
            name: `number`,
            type: `number`,
            message: `Enter your Number`,
        }
    ]);
    let myNumber = myInput.number;
    //console.log(myNumber);
    if (myNumber) {
        console.log(`Here is the table of ${myNumber}`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${myNumber} X ${i} = ${myNumber * i}`);
        }
    }
    else {
        console.log(`Enter a number in numerical form`);
    }
    let againPrint = await inquirer.prompt([
        {
            name: `askUser`,
            type: `confirm`,
            message: `Do You want to print another Table?`,
            default: false,
        }
    ]);
    if (againPrint.askUser === false) {
        myTable = false;
        console.log(`Thank you for Watching this Video!`);
    }
}
