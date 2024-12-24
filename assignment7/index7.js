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

function santaClaus (word, n){
    console.log(word, n)
   let concat = word.repeat(n)
   console.log(concat);
   
}
 santaClaus("Ho!", 3);  
 
 /*Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.*/ 

function fullName(firstName,lastName){
    return firstName + " " + lastName
}
console.log(fullName("Kyle", "Wattles" ));










