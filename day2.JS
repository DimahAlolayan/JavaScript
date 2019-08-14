
let music = "22722";
music == "classical" ? console.log("Oh no it's that classical again") : console.log("nice and noisy");

1 === "1" ? console.log(true) : console.log(false);

1 != "1" ? console.log(true) : console.log(false);


let age = 18;
let country = "UK";
age > 17 && country == "UK" ? console.log("yes i can serve you") : console.log("you are not old enough")



// plindrome activity
let isP = true;
let low = 0;
let high = music.length - 1;
for (i = 0 ; low < high ; i++){
    if (music.charAt(low) != music.charAt(high)) {
        isP = false;
        break;
    }
    low++;
    high--;
}
if (isP){
    console.log("is palindrome")
}
else console.log("not palindrome")


////////////////

let password = "1234567"
password.length < 8 ? console.log("password is too short") : console.log(password);

/////////////////

let num = 10;
if (num % 3 == 0 || num % 5 == 0){
    console.log("This number is divisible by 3 or 5");
}
else {
    console.log("This number is not divisible by 3 or 5");
}

//////////////

let time, olaceOfWork, townOfHome;
time = 9;
if (time == 7){
console.log("I'm at home")
}
else if(time == 8){
console.log("I’m commuting")
}
else if (time == 9 ){
console.log("I’m at work")
}

////////////

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let index = str.length - 1;
console.log(str[index]);

////////////

let check = false;
let word = "deemd";

if (word[word.length -1]== word[0]){
    check = true;
    console.log(check)
}
else console.log(check)

///////////

let num1 =2;
let num2= 2;
if ((num1 + num2) % 2 == 0){
    console.log("the sum is even");
}
else {
    console.log("the sum is odd")
}

///////////

let nums = 30;

if (nums % 5 ==0 && nums % 3 == 0){
    console.log("fizz buzz")
}
else if (nums % 5 == 0){
    console.log("buzz")
}
else if (nums % 3 == 0){
    console.log("fizz")
}



// 1st activity
let space1, space2, space3, space4, space5, space6, space7, space8, space9;
space1 = 'x';
space2 = 'x';
space3 = 'x';
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
   ${space4}    |    ${space5}      |   ${space6}         
        |           |
------------------------------
        |           |
   ${space7}    |      ${space8}    |  ${space9}
        |           |
------------------------------`)

if (space1 == space2 && space1 == space3){
    console.log("You win!!")
}
