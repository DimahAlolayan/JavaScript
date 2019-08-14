let favSongs = [
    "let me love you",
    "Love yourself",
    "love"
   ]; 
favSongs.push("deema");
favSongs.pop();
console.log(favSongs);


let favWebsites = ["Udacity",
"code Academy",
"udemy"];
favWebsites.push("Twitter", "Facebook");
console.log(favWebsites);
favWebsites.pop();
console.log(favWebsites);

let namesArr = ["Dimah", "Sarah", "Danah", "joudy"]
namesArr.shift(); // removes the first element 
console.log(namesArr);
namesArr.unshift("Dimah") // insert elements at the start of the array
console.log(namesArr);
let twoNames = namesArr.slice(0,2);
console.log(twoNames);
let removingItems = namesArr.splice(0,3);
console.log(removingItems);
console.log("*********************************");


let array1 = [1, 4, 9, 16];

const map1 = array1.map( function(x){ xi = x * 2
    return xi; } )

console.log(map1);

let dd = new Array("dimah", "hello");
console.log(dd);

let func = new Function('a', 'b', 'return a+b' );
console.log(func(3,2));

