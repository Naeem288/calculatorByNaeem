import { sum, sub, mul, div, mod } from './calOperatons.js';
import chalk from 'chalk';
import inquirer from 'inquirer';
let op;
do {
    let inData = await inquirer.prompt([
        {
            type: "number",
            name: "n1",
            message: chalk.yellowBright("Enter 1st number")
        },
        {
            type: "list",
            name: "operator",
            message: chalk.yellowBright("Choose your required Operator..."),
            choices: ["+", "-", "*", "/", "%"]
        },
        {
            type: "number",
            name: "n2",
            message: chalk.yellowBright("Enter 2nd number")
        }
    ]);
    if (inData.operator == "+") {
        console.log(chalk.bold `Addition of ${(inData.n1)} and ${(inData.n2)} =`, chalk.bgBlue `${sum(inData.n1, inData.n2)}`);
    }
    else if (inData.operator == "-") {
        console.log(chalk.bold `Subtraction of ${(inData.n1)} and ${(inData.n2)} = `, chalk.bgBlue `${sub(inData.n1, inData.n2)}`);
    }
    else if (inData.operator == "*") {
        console.log(chalk.bold `Multiplication of ${(inData.n1)} and ${(inData.n2)} = `, chalk.bgBlue `${mul(inData.n1, inData.n2)}`);
    }
    else if (inData.operator == "/") {
        console.log(chalk.bold `Division of ${(inData.n1)} and ${(inData.n2)} = `, chalk.bgBlue `${div(inData.n1, inData.n2)}`);
    }
    else if (inData.operator == "%") {
        console.log(chalk.bold `Reminder of ${(inData.n1)} and ${(inData.n2)} = `, chalk.bgBlue `${mod(inData.n1, inData.n2)}`);
    }
    else {
        console.log("choose valid choise");
    }
    // performing new operation
    let option = await inquirer.prompt([
        {
            type: "confirm",
            name: "selection",
            message: "Press 'y' to continue and 'n' to exit...",
            default: false
        }
    ]);
    if (option.selection) {
        op = 'y';
    }
    else {
        op = 'n';
    }
} while (op.toLowerCase() == 'y');
