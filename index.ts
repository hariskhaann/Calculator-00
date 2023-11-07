#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}

async function welcome(){
    let rainbowTitle = chalkAnimation.rainbow('Lets start calculation');
    await sleep();
    rainbowTitle.stop();
    console.log(`          _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`)
}

// welcome()

async function askQuestion() {
    inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        name:"operator",
        message:"which operation do you want to perform? \n",
        choices:["Addition","Subtraction","Mutiplication","Division"]
    },
    {
        type:"number",
        name:"num1",
        message:"Enter number 1",
    },
    {
        type:"number",
        name:"num2",
        message:"Enter number 2",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if(answers.operator == "Addition"){
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
    }
    else if(answers.operator == "Substraction"){
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
    }
    else if(answers.operator == "Mutiplication"){
        console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
    }
     else if(answers.operator == "Division"){
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }
  })
  };

askQuestion();

async function startAgain() {
    do{
        var again = await inquirer
        .prompt({
             type: "input",
             name: "restart",
             message: "Do you want to continue? Press y or n: "
        })
    }while(again.restart == 'y' || again.restart == 'Y' again.restart == 'Yes' || again.restart == 'YES')
}