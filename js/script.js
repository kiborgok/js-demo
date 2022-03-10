let number = 2;
number = 5;
const pi = 3.14;

//Using methods
let result = Math.sqrt(16)
//alert(result)

//Create a function
function addTwoNumbers(a, b) {
    //add your working
    return a + b;
}

//Called the addTwoNumbers function
console.log(addTwoNumbers(4, 6))

//Declare a list
let ourList = [1, 2, 3, 4, 5];
//Get list length
let ourListLength = ourList.length;

//Loops(for,while)

    //for loop
// for (let index = 0; index < ourListLength; index++){
//     console.log(ourList[index] * 2)
// }

    //while loop
let sum = 0;
let index = 0;
while (index < ourListLength) {
    sum = sum + ourList[index];
    //Check sum for every iteration
    console.log("Sum inside the loop: " + sum)
    index++
}
console.log("Total: " + sum)






