#! /usr/bin/env node
//
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
  { massage: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    massage: "select one of the operators to perform operation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Devision","Module"],
  },
]);

//conditional satatement
if (asnwer.Operator === "Addition") {
  console.log(asnwer.firstNumber + asnwer.secondNumber);
} else if (asnwer.Operator === "Subtraction") {
  console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.Operator === "Multiplication") {
  console.log(asnwer.firstNumber * asnwer.secondNumber);
} else if (asnwer.Operator === "Devision") {
  console.log(asnwer.firstNumber / asnwer.secondNumber);
 }else if(asnwer.Operator === "Module"){
  console.log(asnwer.firstNumber % asnwer.secondNumber);
 }
else("Please select valid Operator");