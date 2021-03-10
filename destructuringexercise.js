//OBJECT DESTRUCTURING 1 - What does the following code return/print?
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//OBJECT DESTRUCTURING 2 - What does the following code return/print?
let planetFacts = {
	totalPlanets: 8,
	yearNeptuneDiscovered: 1846,
	yearMarsDiscovered: 1659
};

let { totalPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//OBJECT DESTRUCTURING 3 - What does the following code return/print?
function getUserData({ firstName, favoriteColor = 'green' }) {
	return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // "You're name is Alejandro and you like purple"
getUserData({ firstName: 'Melissa' }); // "You're name is Melissa and you like green"
getUserData({}); // "You're name is undefined and you like green"

//ARRAY DESTRUCTURING 1 - What does the following code return/print?
let [ first, second, third ] = [ 'Maya', 'Marisa', 'Chi' ];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//ARRAY DESTRUCTURING 2 - What does the following code return/print?
let [ raindrops, whiskers, ...aFewOfMyFavoriteThings ] = [
	'Raindrops on roses',
	'whiskers on kittens',
	'Bright copper kettles',
	'warm woolen mittens',
	'Brown paper packages tied up with strings'
];

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"

//ARRAY DESTRUCTURING 3 - What does the following code return/print?
let numbers = [ 10, 20, 30 ];
[ numbers[1], numbers[2] ] = [ numbers[2], numbers[1] ];

console.log(numbers); // [10,30,20]

//ES2015 REFACTORING - Refactor the ES5 code into ES2015

//ES5 Assigning Variables to Object Properties
// var obj = {
// 	numbers: {
// 		a: 1,
// 		b: 2
// 	}
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

//ES2015 Object Destructuring
const obj = {
	numbers: {
		a: 1,
		b: 2
	}
};

const { a, b } = obj.numbers;

//ES5 Array Swap
var arr = [ 1, 2 ];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//ES2015 One-Line Array Swap w/ Destructuring
[ arr[0], arr[1] ] = [ arr[1], arr[0] ];

//Write a function called raceResults which accepts a single
//array argument. It should return an object with the keys
//first, second, third, and rest. Write a one-line function
//to make this work using an arrow function, destructuring,
//and 'enhanced' object assignment

const raceResults = ([ first, second, third, ...rest ]) => ({ first, second, third, rest });
