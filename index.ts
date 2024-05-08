#! /usr/bin/env node
import inquirer from 'inquirer';

const currency: any = 
{
    USD: 1, // Base currency
    EUR: 0.93,
    GBP: 0.8,
    JPY: 155.4,
    PKR: 278.1
};

let  userAnswer = await inquirer.prompt
(
    [
        {
            name: 'from',
            message: 'Select the currency you would like to convert from:',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'JPY', 'PKR']
        },
        {
            name: 'to',
            message: 'Select the currency you would like to convert to:',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'JPY', 'PKR']
        },
        {
            name: 'amount',
            message: 'Enter the amount you would like to convert:',
            type: 'number'
        }
    ]
)
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);