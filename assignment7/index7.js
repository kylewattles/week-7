/* week 7 js4 assignment

    step one
    
    1 Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.

Do not use numbers to reference the last element, find it programmatically.

ages[7] - ages[0] is not allowed!

b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

c. Use a loop to iterate through the array and calculate the average age.
*/

/*created array and added ages to array*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages);
console.log("subtracted first value from last value in array", ages.slice(-1) - ages[0]); 
ages.push(35,22)
console.log(ages);

console.log("added 2 ages and subtracted first value from last value in array", ages.slice(-1) - ages[0]);

/*calculated average of array using for loop*/

let total = 0;
for(let i = 0; i < ages.length; i++){
    total += ages[i];
}
console.log(ages);
console.log("calculated average of array",total / ages.length);

/*
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

a. Use a loop to iterate through the array and calculate the average number of letters per name.

b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

totalLetters = 0;
for(let i = 0; i < names.length; i++){
    totalLetters += names[i].length;
}
console.log(names);
console.log("calculated average number of letters in each name in the array", totalLetters / names.length);

/*calculated average number of letters in each name in the array*/

concatNames = " ";
for(let i = 0; i < names.length; i++){
    concatNames += names[i] + " ";
}
console.log(names);

console.log("concatenated string using for loop:", concatNames.trim());

console.log("concatenated string using .join:", names.join(" "))

/*3. How do you access the last element of any array?

if you know howm many elements are in an array you can call it by sequential number in the array as long as you remember that the first element is 0 and not 1. the other way to access that last element is by using .length - 1. you can also use  
.pop to remove and return the last element
*/
    
    let videoGames = ["indiana jones", "Call of Duty", "Skyrim"]
    
    console.log(videoGames[2]);
    
    console.log(videoGames[videoGames.length - 1]);
    
    

/*4. How do you access the first element of any array?

since arrays are 0 based you can access the first element in an array using index 0. you can also use .at() to access any element including the first.
*/    

 videoGames = ["indiana jones", "Call of Duty", "Skyrim"]

console.log(videoGames[0])
console.log(videoGames.at(0));
/*
5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array

let nameLengths = [5, 3, 4];             // create a new array
*/

let nameLengths = []
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)
}
console.log(nameLengths);

/*
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/

let totalLettersInName = 0;
for (let i = 0; i < nameLengths.length; i++){
  totalLettersInName +=nameLengths[i];
  console.log(totalLettersInName);
   
}

/*
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/

function sayHello (hello, num){
   let concat = hello.repeat(num)
   console.log(concat);
}
 sayHello("Hello ",3);
  
 /*
 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.*/ 

function fullName(firstName,lastName){
    return firstName + " " + lastName
}
console.log(fullName("Kyle", "Wattles" ));

/*
9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/

const numbersArray = [28, 42, 69,];
numbersArray.push(43)
const sumOfArray = (array) => {
    let sum = 0; 
    for(let item of array){
    sum += item
    }
    if (sum>100){
        return true;
    } 
    return false;
}
console.log(sumOfArray(numbersArray))

/*10. Write a function that takes an array of numbers and returns the average of all the elements in the array.*/

const arrayOfNumbers = [52, 83, 98]
const averageArray = (array) =>{
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}
const avg = averageArray(arrayOfNumbers)
console.log(avg);

/*
11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
*/

const numberArray1 = [54, 348, 666, 68]
const numberArray2 = [793, 252, 1, 85]
const whichArrayIsMeaner = (numberArray1, numberArray2) => {

    let sum1 = 0;
    let sum2 = 0;
for (const number of numberArray1) {
    sum1 += number
    console.log("current number", number, "sum",  sum1);
    
    }

    for (const number of numberArray2) {
        sum2 += number
        console.log("current number",number,"sum", sum2);
    }
    let avg1 = sum1 / numberArray1.length
    let avg2 = sum2 / numberArray2.length
    console.log("averages", avg1, avg2);
    if (avg1 > avg2){
        console.log(true);
        return true
    } else if (avg1 < avg2){
        console.log(false);
    }else{
        console.log("arrays are equal");
        
    }
    
}

whichArrayIsMeaner(numberArray1, numberArray2);

/*
12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/

const willBuyDrink = (isHotOutside, moneyInPocket) => {
let BuyDrink = isHotOutside === true && moneyInPocket >= 10.50
console.log(BuyDrink);
return BuyDrink
}
willBuyDrink(true, 11)

/*
13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.*/ 


const willBuyChocolate = (funds, stockInStore, stockAtHome, costOfChocolate) => {
    //created arrow function willBuyChocolate
    let gonnaBuyChocolate = funds >= costOfChocolate && stockInStore === true && stockAtHome === false
    //set up my conditions in the curly brackets
    console.log(gonnaBuyChocolate);
    //logged my result 
}
willBuyChocolate(20.00, true, false, 9)
//passed arguments


const defendFromLegKick = (incomingLegKick, reactionTime) => {
    //created function defendLegKick
    if (incomingLegKick && reactionTime){
//created conditions using if statement
        console.log("wow what a perfect check! He just broke his leg on your shin!");
//logged the result if both conditions are true
        } else if (incomingLegKick === true && reactionTime === false){
            console.log("oowee! that's gonna hurt for a while!");
//else if statement and logging a differnet result according to changing arguments
            } else {
            console.log("no incoming attack. go on the offensive!");
            //final else statement and logging second alternative result 
        }
}
defendFromLegKick(true, true)
//passing arguments