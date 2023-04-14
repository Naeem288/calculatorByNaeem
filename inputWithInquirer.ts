import chalk from "chalk";
import { log } from "console";
import inquirer from "inquirer";
let inputData = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "please enter your name"
    },
        {
            type: "number",
            name: "age",
            message: "please enter your age"
        },
            {
                type: "input",
                name: "address",
                message: "please enter your address"
            },
]);
console.log(chalk.bold.bgGreen
    (`My name is ${inputData.name}\nMy age is ${inputData.age}\nI'm from ${inputData.address}`));