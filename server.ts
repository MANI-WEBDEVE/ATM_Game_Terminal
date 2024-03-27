#! /usr/bin/env node
import inquirer from "inquirer"

let amount: number = 100000;
let pin: number = 1234

let ATM = await inquirer.prompt({

    name: "q1",
    message: "Enter the Pin code 🔑",
    type: "number",

})
//todo: this if statement check pin code
if (ATM.q1 === pin) {
    let ATMMethod = await inquirer.prompt([{
        name: "operator",
        message: "Select The Method",
        type: "list",
        choices: ["withdraw", "Add Amount", "Fast Cash", "Check Balance"]
    }])
    //todo: this if statement check the payment method
    if (ATMMethod.operator === "withdraw") {
        let darwAmount = await inquirer.prompt([{
            name: "withDAmount",
            message: "Enter the Amount",
            type: "number",
        }])
        //todo: this if statement check your Bank Amount
        if (darwAmount.withDAmount) {
            if (amount > darwAmount.withDAmount) {
                amount -= darwAmount.withDAmount
               console.log(`You withdraw  this: ${darwAmount.withDAmount} remaning this: ${amount} 👍`);
            } else {
                console.log(`Please sorry your amount:${amount} 😎 and not withdraw this amount ${darwAmount.withDAmount} 🤷‍♂️`)
            }
        }
    }

    //todo: this if statement check the Add more money
    if (ATMMethod.operator === "Add Amount") {
        let addAmountMethod = await inquirer.prompt([{
            name: "addAmount",
            type: "number",
            message: "How many add amount"
        }])
        if (addAmountMethod.addAmount) {
            amount += addAmountMethod.addAmount
            console.log(`Thank You and succesfull✔  add amount ${amount}`)
        }
    }

    //todo: this if statement check the fast cadh method
    if (ATMMethod.operator === "Fast Cash") {
        let fastAmount = await inquirer.prompt([{
            name: "fastAm",
            message: "Please Select the Cash",
            type: "list",
            choices: [2000, 4000, 5000, 6000, 10000, 20000, 30000]
        }])

        //todo: this if statement check the payment method and check bank acount money
        if (fastAmount.fastAm) {
            amount -= fastAmount.fastAm
            if (amount >= fastAmount.fastAm) {
                console.log(`Remaning Amount of this: ${amount} 🤔 and withdraw Amount this: ${fastAmount.fastAm} 👍`)

            } else {
                console.log(`Sorry you Amount not enough withdraw this amount: ${fastAmount.fastAm} 🤦‍♂️`)
            }

        }
    }

    //todo: this if statement check the balance amount
    if (ATMMethod.operator === "Check Balance") {
        console.log(`Your Acount in Amount this ${amount} 🤑`)
    }
}