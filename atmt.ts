import { log } from "console";
import inquirer from "inquirer";

let myBal = 10000;//dollar


let myPin = 1234;


// Pin input

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number",
        }
    ]
);
console.log(pinAnswer.pin); // Pin Which has input by user

if (pinAnswer.pin === myPin)   // Pin Comparison
{   // If PIN is correct this block will execute

    console.log("Entered PIN is correct");

    let operationAns = await inquirer.prompt(  // It will ask the payment method  
        [
            {
                name: "operation",
                message: "Please Select an Option..",
                type: "list",
                choices: ["Withdraw", "Check balance", "Fast Cash", "Deposits"],

            },
        ]
    );

    // withdrawl
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt
            (
                [
                    {
                        name: "amount",
                        message: "Enter your Amount",
                        type: "number",

                    }
                ]   //100   t 200  
            );

        // restrication for amount greater than total balance
        if (amountAns.amount <= myBal) {
            myBal -= amountAns.amount;
            console.log(`Your WithDrawl Amount is ${amountAns.amount}`);
        }
        else {
            console.log(`Insufficient Balance! You have only ${myBal}`);
        }

    }

    // Check balance

    else if (operationAns.operation === "Check balance") {
        console.log(`Your remaining balance is ${myBal}`);
    }

    // Depositing Cash

    else if (operationAns.operation === "Deposits") {
        let cashDeposited = await inquirer.prompt
            (

                [
                    {
                        name: "depositCash",
                        type: "number",
                        message: " Enter the Amount which you want to deposit...",
                    },
                ],
            );

            myBal += cashDeposited.depositCash;
            console.log(` You Deposited Rs: ${cashDeposited.depositCash} \n Your New Account Balance is: ${myBal}`);
    
        
        
          
    }

    //Fast Cash

    else if (operationAns.operation === "Fast Cash") {

        let fastCash = await inquirer.prompt(
            [
                {
                    name: "FastCash",
                    type: "list",
                    choices: ["500", "1000", "5000", "10000"],
                }
            ]

        );

        // Condition For Fast Cash
        if (fastCash.FastCash === "500") {
            console.log(`You have withdrawl amount of ${fastCash.FastCash} from your Account \n Your remaining Balance is ${myBal - 500}`);
        }

        else if (fastCash.FastCash === "1000") {
            console.log(`You have withdrawl amount of ${fastCash.FastCash} from your Account \n Your remaining Balance is ${myBal - 1000}`);
        }

        else if (fastCash.FastCash === "5000") {
            console.log(`You have withdrawl amount of ${fastCash.FastCash} from your Account \n Your remaining Balance is ${myBal - 5000}`);
        }

        else if (fastCash.choices === "10000") {
            console.log(`You have withdrawl amount of ${fastCash.FastCash} from your Account \n Your remaining Balance is ${myBal - 10000}`);
        }

        else {
            console.log(`Kindly Select A valid amount or Select "Withdraw"  above For Your Desired Amount  \n Your remaining account Balance is ${myBal}`);
        }
    }
}// pin comparison 
else {
    console.log("INCORRECT PIN");
}



