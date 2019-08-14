//console.log(Math.floor(Math.random()*101))
// console.log("All Around The World".toUpperCase().charAt(11))

// console.log("Hello".search("l"))
// console.log("Hello".lastIndexOf("l"))
// console.log("Hello".slice(0,2))
// console.log("Hello".substring(0,2))
// console.log("Hello".substr(1,3))
// console.log("Hello".replace("l","o"))
// console.log("Hello".concat("goo"))
// console.log("Hello".charAt(0))

// let favDrink = "coffee";
// console.log(`My fav drink is ${favDrink}`)

// favDrink = "tea";
// console.log(`My fav drink is now ${favDrink}`)

// 1st activity
let space1, space2, space3, space4, space5, space6, space7, space8, space9;
space1 = 'x';
space2 = 'o';
space3 = ' ';
space4 = 'x';
space5 = 'o';
space6 = ' ';
space7 = 'x';
space8 = 'o';
space9 = ' ';


console.log(`
        |           |           
   ${space1}    |    ${space2}      | ${space3} 
        |           |           
------------------------------
        |           |  
   ${space4}    |    ${space7}      |            
        |           |
------------------------------
        |           |
   ${space5}    |           |
        |           |
------------------------------`)

// 2nd activity
let name, age, favColour;
name = "Dimah";
age = "20";
favColour = "Yellow";
console.log(`My name is ${name}, i am ${age}, my fav color is ${favColour}`)

//3rd activity 
let breakfast, lunch, dinner;

breakfast = "Apple";
lunch = "Salad";
dinner = "eggs";

console.log(`my breakfast is ${breakfast}, my lunch is ${lunch} and my dinner is ${dinner}`)

breakfast = "orange";
lunch = "pizza";
dinner = "eggs";

console.log(`tomorrow my breakfast will be  ${breakfast}, my lunch will be ${lunch} and my dinner will be ${dinner}`)

// activity 3 
let day = 24*60*60*1000;
let dateToday = new Date()
let dateB = new Date(1999, 11, 6);
let numDate = Math.abs(dateB.getTime()- dateToday.getTime());
console.log (Math.round(numDate/day));

// extra activity
console.log(" ")
let counter = 0;
for(i = 1 ; counter <= 0 ; i++) {
    if (i%5 == 0){
counter++;
console.log(i+ "  ") }
}

