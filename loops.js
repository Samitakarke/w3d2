// 
// II. Loops
// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)
// 
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive

// for (let i=0; i <=10; i++)
// {
//     console.log(i);
// }


// Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i=10; i<=400; i++)
// {
//     console.log(i);
// }


// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i =12; i <4000;i++)
// {
//     if(i % 3 ==0)
//     {
//         console.log(i);
//     }
// }

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let i=1; i<=100; i++)
// {
//     console.log(i);
//     if (i % 2 == 0)
//     {
//         console.log(i + "<-- is an even number");
//     }
// }

// 
// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:

// I found a 5. High five!
// I found a 10. High five!
// for (let i=0; i<=100; i++)
// {
//    if (i % 5 ==0) 
//    {

//         console.log("I found a "+ i +". High five!")
//    }
//    if (i % 3 ==0)
//    {
//         console.log("I found a "+ i +". Three is a crowd")
//    }


// }

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// let bank_account= 0;
// for (let i=1; i <=10; i++)
// {
    
//     bank_account =bank_account+i;
    
// }
// console.log("$"+bank_account);


// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
// let bank_account=0;
// for (let i=1; i <=100; i++)
// {
//     bank_account+=i*2;
// }
// console.log(bank_account);

