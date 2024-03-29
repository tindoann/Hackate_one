// #White Level - addition(3, 2) ➞ 5

// 1. Create a function that takes two numbers as arguments and return their sum.

function add(a, b) {
  return a + b;
}

function add(a, b) {
  let sum = a + b; 
  return sum;
}

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Sorry but you didn't pass two numbers.";
  }
    return a + b; 
}


// #White Level - lessThanOrEqualToZero(5) ➞ false

// 2. Create a function that takes a number as its only argument and returns true if it's less than or equal 
//    to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	if (num <= 0)
	  return true;
	else
		return false;
}

// es6
const lessThanOrEqualToZero = num => num <= 0;

// ternary
function lessThanOrEqualToZero(num) {
	return num <= 0 ? true : false;
}

// #White Level - triArea(10, 10) ➞ 50

// 3.  Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	let area = (base * height ) / 2; 
  return area;
}

function triArea(base, height) {
	var a = base * height ;
	var b = a / 2 ;
	return b;
}

function triArea(base, height) {
	return base * height / 2;
}

const triArea = (base, height) => (base * height) / 2;

// #Whtie Level -  nextEdge(9, 2) ➞ 10


// 4. Create a function that finds the maximum range of a triangles third edge.

function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}

function nextEdge(side1, side2) {
	if (side1 > 0 && side2 > 0) {
		return (side1 + side2) - 1;
	} else {
		return;
	}
}

const nextEdge = (side1, side2) => side1 + side2 - 1;

// #Whtie Level -  convert(2) ➞ 120

// 5. Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
	seconds = minutes * 60; 
	return seconds;
}

function convert(minutes) {
	return  minutes * 60;
}

const convert = (minutes) => minutes * 60

// #Whtie Level -  addition(9) ➞ 10

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	return num + 1;
}

function addition(num) {
	return ++num;
}

const addition = (num) => num++

// #Whtie Level -  animals(2, 3, 5) ➞ 36

/*

6. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

*/

function animals(chickens, cows, pigs) {
	chickens *= 2;
	cows *= 4;
	pigs *= 4;
	return chickens + cows + pigs;
}

function animals(chickens, cows, pigs) {
	return chickens*2+(cows+pigs)*4;
}

const animals = (chickens, cows, pigs) => chickens * 2 + cows * 4 + pigs * 4;

// #Whtie Level -  divisibleByFive(5) ➞ true

// 7. Create a function that returns true if an integer is divisible by 5, and false otherwise.

function divisibleByFive(n) {
	return n % 5 === 0; 
}

function divisibleByFive(n) {
	if (n % 5 === 0) {
		return true;
	}
	else {
		return false;
	}
};

divisibleByFive = n => !(n % 5)


// #White Level - profitableGamble(0.2, 50, 9) ➞ true

/*

8. Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

*/

function profitableGamble(prob, prize, pay) {
	let profit = prob * prize - pay;
		if (profit > 0) {
			return true;
		} else {
			return false;
		}
}

function profitableGamble(prob, prize, pay) {
	return (prob * prize - pay) > 0
}

const profitableGamble = (prob, prize, pay) =>
	prize * prob > pay;
	
function profitableGamble(prob, prize, pay) {
	return prob * prize - pay > 0 ? true : false
}

// #Yellow Level - function(1, 0, 10) ➞ 205 input (5, 2, -6) ➞ "invalid"

/* 

9. Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, 
where users get points for completing challenges. An Easy challenge is worth five points, a Medium challenge 
is worth ten points, and a Hard challenge is worth twenty points.

Create a function that takes in the number of each challenge level a user has played and calculates the 
user's total number of points. Keep in mind that a user cannot complete negative challenges, so the 
function should return the string "invalid" if any of the passed parameters is negative.

Create a function that takes in the number of each challenge level a user has played and calculates 
the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the 
function should return the string "invalid" if any of the passed parameters is negative.

*/ 

function scoreCalculator(easy, med, hard) {
	if (easy < 0 || med < 0 || hard < 0) {
	 return "invalid";
  } else {
	 return easy * 5 + med * 10 + hard * 20;
	}
}

function scoreCalculator(easy, med, hard) {
  if (easy >= 0 && med >= 0 && hard >= 0){
		return (easy * 5) + (med * 10) + (hard * 20);
	} else {
		return "invalid";
	}	
}

const scoreCalculator = (...points) => 
	points.some(num => num < 0) ? 
		'invalid' : (points[0]*5) + (points[1]*10) + (points[2]*20)

const scoreCalculator = (e, m, h) => {
	if (e < 0 || m < 0 || h < 0) return 'invalid'
		return e * 5 + m * 10 + h * 20
	}

function scoreCalculator(easy, med, hard) {
	return (easy<0||med<0||hard<0) ? "invalid" : 5*easy + 10*med + 20*hard;
}

// #White Level - howManySeconds(10) ➞ 36000

// 10. Write a function that converts hours into seconds.

function howManySeconds(hours) {
	return hours * 3600;
}

const howManySeconds = hours => Number.isInteger(hours) ? hours*3600 : "error";

let howManySeconds = h => h * 3600;

// #White Level - concatName("First", "Last") ➞ "Last, First"

// 11. Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
	return lastName + ', ' + firstName
}

function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}

const concatName = (first, last) => `${last}, ${first}`;

// #White Level - A string containing only whitespaces " " does not count as empty.

// 12. Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s) {
	return (!s || 0 === s.length);
}

function isEmpty(s) {
	return s.length == 0;
}

function isEmpty(s) {
	return s === '';
}

function isEmpty(s) {
	if (s === '') {
		return true
	} else {
		return false
	}
}

function isEmpty(s) {
	return s === '' ? true : false;
}

// #White - squared(9) ➞ 81

// 13. Fix the code in the code tab to pass this challenge (only syntax errors). 
// Look at the examples below to get an idea of what the function should do.
// The variables are named just fine, you just have to debug the code usage of variables.

function squared(b) {
	return b*b;
}

// #White - length("apple") ➞ 5

// 14. Write a function that returns the length of a string. Make your function recursive.

function length(str) {
  while(str.length >= 0) {
	  return str.length
  }
}

const length = str => str == '' ? 0 : length(str.substring(1)) + 1;

const length = str => !str ? 0 : 1 + length(str.slice(1));


// Recursion Example - StackOverflow

var counter = 10;
while(counter > 0) {
    console.log(counter--);
}

var countdown = function(value) {
	if (value > 0) {
			console.log(value);
			return countdown(value - 1);
	} else {
			return value;
	}
};
countdown(10);

// #White - getFirstValue([80, 5, 100]) ➞ 80

// 15. Create a function that takes an array and returns the first element.

function getFirstValue(arr) {
	let first = arr => arr[0];
  return(first(arr));
}

function getFirstValue(arr) {
	return arr[0];
}

const getFirstValue = arr => arr[0];

// #White - comp("ABC", "DE") ➞ false

// 16. Create a function that takes two strings as arguments and return either true or false depending 
// on whether the total number of characters in the first string is equal to the total number of characters 
// in the second string.

function comp(str1, str2) {
	if (str1.length === str2.length) {
		return true;
	} else {
		return false; 
	}
}

function comp(str1, str2) {
	return str1.length === str2.length;
}

const comp = (str1, str2) => str1.length === str2.length;

//  #White - check([1, 2, 3, 4, 5], 3) ➞ true

// 17. Write a function to check if an array contains a particular number.

function check(arr, el) {
	return arr.includes(el); 
}

function check(arr, el) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === el){
			return true;
		}
	}
	return false;
}

function check(arr, el) {
	if (arr.includes(el)) {
		return true
	} else {
		return false
	}
}

const check = (arr, el) => Array.from(arr).includes(el) ? true : false; 

const check = (arr, el) => arr.includes(el)

function check(arr, el) {
	return arr.indexOf(el) > -1;
}

// #White - helloName("Gerald") ➞ "Hello Gerald!"

// 18. Create a function that takes a name and returns a greeting. Don't use a normal function but use an "arrow function".

const helloName = name => `Hello ${name}!`

const helloName = name => 'Hello ' + name+'!'


// 19. Create a function that accepts an array and returns the last item in the array.

// #White - getLastItem(["cat", "dog", "duck"]) ➞ "duck"

function getLastItem(arr) {
	return arr.pop()
}

function getLastItem(arr) {
	return (arr.slice(-1)[0]);
}

function getLastItem(arr) {
  return arr[arr.length - 1]
}

const getLastItem = arr => arr[arr.length - 1];

function getLastItem(arr) {
  if (arr.length > 0)
  		return(arr[arr.length-1]);
  else return(null);
}

// codeblocq example

var array = [1,2,3,4,5,6];
console.log(array.slice(-1)); // [6]
console.log(array.slice(-2)); // [5,6]
console.log(array.slice(-3)); // [4,5,6]

// 20. Create a function that finds the index of a given item.

// #White - search([9, 8, 3], 3) ➞ 2

function search(arr, item) {
	return arr.indexOf(item); 
}

function search(arr, item) {
	for(var i = 0;i < arr.length; i++) {
		if (arr[i] == item) {
		return i;
		}
	}
	return -1;
}

function search(arr, item) {
	return arr.findIndex(i => i === item)
}

// 21. Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// #White - isEvenOrOdd(3) ➞ "odd"

function isEvenOrOdd(num) {
  return num % 2 ? 'odd' : 'even';
}

function isEvenOrOdd(num) {
	if ( num % 2 === 0) { 
		return 'even'; 
	} else {
		return 'odd'; 
	}
}

let isEvenOrOdd = n => n % 2 ? 'odd' : 'even'; 

let isEvenOrOdd = n => n & 1 ? 'odd' : 'even';

// 22. Create a function that finds the index of a given item in a sorted array using recusion. Input is (arr, item).

// #Yellow - search([2, 4, 6, 8, 10], 8) ➞ 3

function search(arr, item) {
	if (arr.toString() === arr.slice(0).sort((a,b) => a - b).toString()){
    return arr.indexOf(item); 
	}
	return -1; 
}

function search(arr, item) {
	return arr.indexOf(item); 
}

const search = (arr, item) => arr.indexOf(item);

const search = (arr,item) => {
	for (let i=0; i<arr.length; i++){
		if(arr[i] === item){
			return i;
		}
	}
	return -1;
};


// #Yellow - volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

// 23. Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

function volumeOfBox(sizes) {
	return sizes.height * sizes.width * sizes.length;
}

const volumeOfBox = (sizes) => sizes.width * sizes.length * sizes.height;

// 24. Create a function that returns true if a string contains any spaces.

// #White = hasSpaces("hello, world") ➞ true

function hasSpaces(str) {
	if (str.includes(' ')) {
		return true
	} else {
		return false
  }
}

function hasSpaces(str) {
	return str.includes(' ') ? true : false
}

function hasSpaces(str) {
	return str.includes(' ')
}

const hasSpaces = str => str.includes(' ');

function hasSpaces(str) {
	return str.indexOf(' ') != -1;
}

function hasSpaces(str) {
	return (/\s/).test(str);
}

// example 

var sentence = 'The quick brown fox jumps over the lazy dog.';

var word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);

// 25. Write a function to reverse an array.

// #White - reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// expected output: "The word "fox" is in the sentence"

function reverse(arr) {
	return arr.reverse()
}

function reverse(arr) {
	let result = [];
	for (let i = arr.length -1; i > -1; i--) {
		result.push(arr[i]);
	}
	
	console.log(...result);
	return result;
}

function reverse(arr) {
	let word = [];
	for(letter of arr){
		word.unshift(letter)
	}
	return word
}

const reverse = arr => arr.reverse();

// 26. Create a function that takes a base number and an exponent number and returns the calculation.

// #White - calculateExponent(5, 5) ➞ 3125

function calculateExponent(num, exp) {
	return Math.pow(num, exp) 
}

function calculateExponent(num, exp) {
	return exp > 1 ? num * calculateExponent(num, exp - 1) :  num;
}

const calculateExponent = (num, exp) => {
	let newexp = 1;
	for (let i = 0; i < exp; i++) {
		newexp = newexp * num
	}
	return newexp;
}

const calculateExponent = (num, exp) => Math.pow(num, exp);

// 27. Create a function to concatenate two integer arrays.

// #White - concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

function concat(arr1, arr2) {
	return arr1.concat(arr2); 
}

function concat(arr1, arr2) {
	for(let i=0;i<= arr2.length-1;i++)
		{
			arr1.push(arr2[i]);
		}
	return arr1;
}

function concat(arr1, arr2) {
	return [...arr1,...arr2]
	}

function concat(arr1, arr2) {
	for (item of arr2){
		arr1.push(item)
	}	
	return arr1
}

	const concat = (arr1, arr2) => arr1.concat(arr2);

	// 28. Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
	
	// #White - divisible(1000) ➞ true

function divisible(num) {
	if (num % 100 === 0) {
		return true; 
	} else {
		return false; 
	}
}

function divisible(num) {
	return !(num % 100)
}

function divisible(num) {
	return num % 100 === 0;
}

const divisible = num => num % 100 === 0;


// 29. Write a function that takes two integers (hours, minutes) and converts them into seconds.

// #White - convert(1, 3) ➞ 3780

function convert(hours, minutes) {
	return hours * 3600 + minutes * 60; 
}

function convert(hours, minutes) {
	var hour = hours * 3600;
	var min = minutes * 60;
	return hour + min;	
}

const convert = (hours, minutes) => hours * 3600 + minutes * 60

// 30. Create a function that returns the total number of parameters passed in.

// #White - numberArgs(10, 20, 30, 40, 50) ➞ 5

function numberArgs() {
	return arguments.length;
}

function numberArgs(whatever) {
	return arguments.length;
}

function numberArgs(... a) {
	return (a||[]).length;
}

const numberArgs = (...args) => args.length;

// 31. Create a function that returns the ASCII value of the passed in character.

// #White - ctoa("m") ➞ 109

function ctoa(c) {
	return c.codePointAt();
}

const ctoa = char => char.charCodeAt(0);

// 32. Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// #White - 
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

function cityFacts(city) {
	let name = city.name; 
	let population = city.population;
	let continent = city.continent;
	return name + ' has a population of ' + population + ' and is situated in ' + continent;
}

function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

const cityFacts = (city) => {
	return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}

function cityFacts(city) {
	let {name, population ,continent}=city;
	return `${name} has a population of ${population} and is situated in ${continent}`
}

// 33. Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

// #Yellow / Chaining - formatDate("11/12/2019") ➞ "20191211"

function formatDate(date) {
	return date.split('/').reverse().join('')
	}

function formatDate(date) {
	const [month, day, year] = date.split("/")
	return `${year}${day}${month}`
}

let formatDate = date => date.split('/').reverse().join('');

function formatDate(date) {
	let newDate = [];
	date = date.split('/');
	newDate.push(date[2], date[1], date[0]);
	return newDate.join('');
}

// 34. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// 1. Total number of slices. 2. Number of recipients. 3. How many slices each person gets.

// #White - equalSlices(11, 5, 2) ➞ true
// 5 people x 2 slices each = 10 slices < 11 slices

function equalSlices(total, people, each) {
	return total >= people * each; 
}

function equalSlices(total, people, each) {
	if(people * each <= total) {
		return true;
	} else {
		return false;
	}
}

// 35. Create a function that returns the number of argument it was called with.

// #White - numArgs("foo", "bar") ➞ 2

function numArgs() {
	return arguments.length; 
}

function numArgs(...args) {
	return args.length;
}

const numArgs = (...args) => args.length; 

numArgs = (...a) => a.length || 0


// 36. Write a function that validates whether two strings are identical. Make it case insensitive.

// #White - match("hello", "hELLo") ➞ true

function match(s1, s2) {
	return s1.toLowerCase() == s2.toLowerCase()
}

function match(s1, s2) {
	if ( s1.toUpperCase() == s2.toUpperCase()) {
		return true;
	} else {
		return false;
	}
}

const match = (s1, s2) =>  s1.toLowerCase() === s2.toLowerCase();

// 37. There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// #White - 

function remainder(x, y) {
	return x % y
}

const remainder = (x, y) => x % y

// 38. Create a function that takes an array and a string as arguments and return the index of the string.

// #Yellow find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

function find_index(arr, str) {
	return arr.indexOf(str); 
}

function find_index(arr, str) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == str){
			return i
		}
	}
}

function find_index(arr, str) {
	return arr.indexOf(str)
}

// 39. Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

// #White - stackBoxes(2) ➞ 4

function stackBoxes(n) {
	return Math.pow(n, 2)
}

function stackBoxes(n) {
	return n*n
}

function stackBoxes(n) {
	var stack = 0;
	for(let i = 0; i < n; i++){
		stack = stack + 2 * i + 1
	};
	return stack
}

// 40. toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.

// #White - toInt("532") ➞ 532

function toInt(str) {
	return parseInt(str)
}
function toStr(int) {
	return int.toString()
}

function toInt(str) {
	return Number(str)
}
function toStr(int) {
	return String(int)
}

const toInt = (str) => parseInt(str);
const toStr = (int) => int.toString();


// 41. Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

// #White - negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]

function negate(arr) {
	return arr.map(value => -value)
}

negate = arr => {
	let ret = [];
	for(let item of arr){
		ret.push(-item);
	}
	return ret;
}

function negate(arr) {
	for(let i = 0; i < arr.length; i++) {
		arr[i] = -arr[i];
	}
	return arr;
}

// 42. In this challenge, you must verify the equality of two different given parameters: a and b.

// White - checkEquality(1, true) ➞ false
// A number and a boolean: their type is different

function checkEquality(a, b) {
  return a === b ? true : false;
}

const checkEquality = (a, b) => a === b;

function checkEquality(a, b) {
  return a === b;
}

function checkEquality(a, b) {
  if (a == "undefined" || a == "null" || a == "NaN")
		return false

  if (b == "undefined" || b == "null" || b == "NaN")
		return false
	
	if ((typeof a == typeof b) && (a == b))
		return true
	else
		return false
}

// 43. Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

// #White - isInRange(4, { min: 0, max: 5 }) ➞ true

function isInRange(num, range) {
	if (num >= range.min && num <= range.max) {
		return true;
	} else {
		return false;
	}
}

function isInRange(num, range) {
	return num >= range.min && num <= range.max;
}

const isInRange = (num, range) => num >= range.min && num <= range.max;

function isInRange(num, range) {
	return (num <= range.max && num >= range.min) ? true : false
}

// 44. Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.

// #White - intOrString(9843532) ➞ "int"

function intOrString(param) {
	if (Number.isInteger(param)) {
		return 'int'
	} else {
		return 'str'
	}
}

function intOrString(param) {
	if (typeof param === 'number' ){
		return 'int'
	} else {
		return 'str'
	}
}

function intOrString(param) {
	return typeof param === 'number' ? 'int' : 'str';
}

const intOrString = (param) => typeof param === "string" ? "str" : "int"

// 45. Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".

/*

If the number is a multiple of 3 the output should be "Fizz".
If the number given is 5 the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.

*/

/*

Yellow - 

FizzBuzz(3) ➞ "Fizz"

FizzBuzz(5) ➞ "Buzz"

FizzBuzz(15) ➞ "FizzBuzz"

FizzBuzz(4) ➞ 4

*/

function FizzBuzz(num) {
	if ( num % 15 === 0 ) {
		return 'FizzBuzz'
	} else if ( num % 3 === 0 ) {
		return 'Fizz';
	} else if ( num % 5 === 0) {
		return 'Buzz';
	} else {
		return num.toString();
	}
}

function FizzBuzz(num) {
	if (num % 3 == 0 && num % 5 == 0) {
		return 'FizzBuzz';
	} else if (num % 3 == 0) {
		return 'Fizz';
	} else if (num % 5 == 0) {
		return 'Buzz';
	} else {
		return `${num}`;
	}
}

function FizzBuzz(num) {
	return num % 15 === 0 ? 'FizzBuzz' 
	     : num % 5 === 0 ? 'Buzz' 
	     : num % 3 === 0 ? 'Fizz' 
	     : String(num);
}

function FizzBuzz(num) {
	return (num%3?'':'Fizz')+(num%5?'':'Buzz')||`${num}`;
}

function FizzBuzz(num) {
	return ((num%3==0)&(num%5==0))?'FizzBuzz':((num%3==0)?'Fizz':((num%5==0)?'Buzz':String(num)))
}

// 46. Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// isPlural("changes") ➞ true

function isPlural(word) {
	if (word.endsWith('s')) {
		return true
	} else {
		return false
	}
}

function isPlural(word) {
	return word.endsWith("s");
}

function isPlural(word) {
	return word[word.length - 1] == 's';
}

function isPlural(word) {
	return (word.charAt(word.length - 1) === 's')
}

const isPlural = word => word.endsWith('s');

let isPlural = w => /s$/i.test(w)

// 47. Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.

// White - operation(15, 9) ➞ "added"

function operation(num1, num2) {
	if (num1 + num2 == 24) {
		return 'added'
	} else if (num1 - num2 == 24) {
		return 'subtracted'
	} else if (num1 * num2 == 24) {
		return 'multiplied'
	} else if (num1 / num2  == 24) {
		return 'divided'
	} else {
		return null
	}
}

const operation=(a,b)=>
	a+b==24?"added"
	:a-b==24?"subtracted"
	:a*b==24?"multiplied"
	:a/b==24?"divided"
	:null;

function operation(num1, num2) {
	return num1 / num2 === 24 ? 'divided' : num1 * num2 === 24 ? 'multiplied' : num1 - num2 === 24 ? 'subtracted' : num1 + num2 === 24 ? 'added' : null
}

// 48. Create a function that takes a string and returns the word count. The string will be a sentence.

// White - countWords("Just an example here move along") ➞ 6

function countWords(str) {
	return str.split(' ').length;
}

function countWords(str){
	var arr = str.split(" ");
	return arr.length
}

const countWords = str => str.split(' ').length;

const countWords = str => str.replace(/[^\w\s]/gi, '').split(' ').length;


/* 49. You are given 2 out of 3 of the angles in a triangle, in degrees.

Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

An acute angle is less than 90 degrees.
A right angle is exactly 90 degrees.
An obtuse angle is greater than 90 degrees (but less than 180 degrees).

For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

*/

// White - missingAngle(135, 11) ➞ "acute"

function missingAngle(angle1, angle2) {
	let x = (180 - (angle1 + angle2))
	if (x > 90) {
		return 'obtuse'
	} else if (x === 90) {
		return 'right'
	} else {
		return 'acute'
	}
}

function missingAngle(angle1, angle2) {
	return angle1 + angle2 < 90 ? 'obtuse'
		: angle1 + angle2 > 90 ? 'acute'
		: 'right';
}

function missingAngle(angle1, angle2) {
	return angle1 + angle2 === 90 ? 'right' : angle1 + angle2 < 90 ? 'obtuse' : 'acute';
}

// 50. Create functions for the Calculator class that can do the following :

// add two numbers
// subtract two numbers
// multiply two numbers
// divide two numbers

// Yellow - calculator.add(10, 5) ➞ 15

class Calculator {

	add(a,b) {
		return a + b;
	}
	subtract(a,b) {
		return a - b;
	}
	multiply(a,b) {
		return a * b;
	}
	divide(a,b) {
		return a / b;
	}
}

class Calculator {
	add = (a,b) => a + b;
	subtract = (a,b) =>  a - b;
	multiply = (a,b) => a * b;
	divide = (a,b) => a / b;
}

class Calculator {
	constructor(a,b) {
		this.a = a,
		this.b = b
	}

	add(a,b) {
		return a+b;
	}
	
	subtract(a,b) {
		return a-b;
	}
	
	multiply(a,b) {
		return a*b;
	}
	
	divide(a,b) {
		return a/b;
	}
}

// 51. Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

// Yellow - numberSyllables("beau-ti-ful") ➞ 3

function numberSyllables(word) {
	return word.split("-").length;
}

function numberSyllables(word) {
  let count = 1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '-') {
      count += 1
    }
  }
  return count
}

function numberSyllables(word) {
	let regex = /-/g ;
	let syl = word.match(regex);
	return syl.length+1;
}

const numberSyllables = word => word.split('-').length

// 52. Create a function that takes an array of numbers and return the first and last elements as a new array.

// Yellow - firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]

function firstLast(arr) {
	let newArray = [];
	let first = arr.shift()
	let last = arr.pop()
	
	newArray.push(first);
	newArray.push(last);
	
	return (newArray)
}

function firstLast(arr) {
	return [arr.shift(), arr.pop()]
}

function firstLast(arr) {
	const myArr = [];
	myArr.push(arr.shift());
	myArr.push(arr.pop());
	return myArr;
}

const firstLast = arr => [arr.shift(), arr.pop()];

function firstLast(arr) {
	let newArr = [];
	newArr.push(arr[0], arr[arr.length - 1]);
	return newArr;
}

function firstLast(arr) {
	return [arr[0], arr[arr.length-1]]
}

const firstLast = ([first, ...rest]) => [first, rest.pop()];

// 53. Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

// Yellow - Go(5) ➞ "-----"

function Go(num) {
	let counter = ''; 
	if (num >= 1 && num <= 60) {
		for (let i = 0; i < num; i++) {
			counter += '-'; 
		}
		return counter; 
	}
}

function Go(num) {
	let str = '';
	 for(let i = 0; i < num; i++){
	 str += '-';
	 }
	 return str;
 }

function Go(num) {
	return "-".repeat(num);
}

const Go = num => '-'.repeat(num);

function Go(num) {
	return Array(num).fill('-').join('');
}

function Go(num) {
	let result = [];
		for (let i = 0; i < num; i++) {
			result.push("-");
		}
	return result.join("");
}


// 54. Create a function that takes three number arguments — one number as an input and two additional
// numbers representing the endpoints of a closed range — and return the number limited to this range.

// Yellow - limitNumber(5, 1, 10) ➞ 5
// limitNumber(14, 1, 10) ➞ 10

/* 

If the number falls within the range, the number should be returned.
If the number is less than the lower limit of the range, the lower limit should be returned.
If the number is greater than the upper limit of the range, the upper limit should be returned.

*/

function limitNumber(num, rangeLow, rangeHigh) {
	if (num >= rangeLow && num <= rangeHigh) {
		return num;
	} else if (num < rangeLow) {
		return rangeLow; 
	} else {
		return rangeHigh; 
	}
}

const limitNumber = (num, min, max) => Math.max(min, Math.min(max, num));

function limitNumber(num, rangeLow, rangeHigh) {
	return [...arguments].sort((a, b) => a - b)[1]
}

let limitNumber = (num, rangeLow, rangeHigh) => 
num < rangeLow ? rangeLow :
num > rangeHigh ? rangeHigh : num;

function limitNumber(num, rangeLow, rangeHigh) {
	return num>rangeHigh ? rangeHigh: num<rangeLow ? rangeLow: num
}

let limitNumber = (num, low, high) =>
num < low ? low : num > high ? high : num;

// 55. Create a function that takes an array and returns the difference between the smallest and biggest numbers.

// Yellow - diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function diffMaxMin(arr) {
	return Math.max(...arr) - Math.min(...arr)
}

const diffMaxMin = a => Math.max(...a) - Math.min(...a);

function diffMaxMin(arr) {
	arr.sort(function(a,b){return a-b;})
	return arr[arr.length-1]-arr[0];
}

/*

56. In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

The first number is the major version.
The second number is the minor version.
The third number is the patch (bug fixes).
Write three separate functions, one to retrieve each element in the semantic versioning specification.

*/

// White - 6.1.9
// retrieveMajor("6.1.9") ➞ "6"

const retrieveMajor = v => v.split(".")[0];
const retrieveMinor = v => v.split(".")[1];
const retrievePatch = v => v.split(".")[2];

function retrieveMajor(semver) {
	return semver.charAt(0)
}
function retrieveMinor(semver) {
	return semver.charAt(2)
}
function retrievePatch(semver) {
	return semver.charAt(4)
}

function retrieveMajor(semver) {
	return [...semver][0];
}
function retrieveMinor(semver) {
	return [...semver][2];
}
function retrievePatch(semver) {
	return [...semver][4];
}

// 57. You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers 
// (the hourly wage of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

// White - programmers(147, 33, 526) ➞ 493

function programmers(one, two, three) {
	return Math.max(...arguments) - Math.min(...arguments)
}

function programmers(one, two, three) {
	return Math.max(one, two, three) - Math.min(one, two, three);
}

function programmers(one, two, three) {
	let high = Math.max(one, two, three);
	let low = Math.min (one, two, three);
	return high - low;
}

function programmers(one, two, three) {
	let arr = [...arguments].sort((a,b)=>a-b)
	return arr.pop()-arr.shift()
}

const programmers = (x,y,z) => Math.max(x,y,z) - Math.min(x,y,z)

function programmers(one, two, three) {
	var max = 0;
	var min=0;
	for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
	var maximum = max;
	
	for (i = arguments.length; i >=0 ; i--) {
    if (arguments[i] < max) {
      max = arguments[i];
			min=max;
    }
  }
	
	return maximum-min;
}

// 58. Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. 
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.


// White - monthName(3) ➞ "March"

function monthName(num) {
	  switch (num) {
			case (1): 
				return 'January'; 
			case (2): 
				return 'February'; 
			case (3): 
				return 'March'; 
			case (4): 
				return 'April'; 
			case (5): 
				return 'May'; 
			case (6): 
				return 'June'; 
			case(7): 
				return 'July'; 
			case (8): 
				return 'August'; 
			case (9): 
				return 'September'; 
			case (10): 
				return 'October'; 
			case (11): 
				return 'November'; 
			case (12): 
				return 'December'; 
			default: 
				return 'Enter the date of a month'
		}
}

function monthName(num) {
	let months = {
		1:"January",
		2:"February",
		3:"March",
		4:"April",
		5:"May",
		6:"June",
		7:"July",
		8:"August",
		9:"September",
		10:"October",
		11:"November",
		12:"December"
	}
	return months[num]
}

function monthName(num) {
	return new Date(2000, num - 1).toLocaleString("en-us", {month: "long"});
}

function monthName(num) {
	let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	let month = monthArray[num -1]
	return month
}

// 59. Create a function to multiply all values in an array by the amount of values in that array.

// Yellow - MultiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function MultiplyByLength(arr) {
	return arr.map(item => item * arr.length); 
}

MultiplyByLength = arr => arr.map(item => item * arr.length)

function MultiplyByLength(arr) {
	for(var i=0; i<arr.length; i++){
		arr[i] = arr[i] * arr.length;
	}
	return arr
}

function MultiplyByLength(arr) {
	let result=[];
	for(let i=0;i<arr.length;i++){
		result.push(arr[i] * arr.length);
	}
	return result;
}

function MultiplyByLength(arr) {
	let newArr = [];
	arr.forEach((i) => {
		const times = i * arr.length;
		newArr.push(times);
	})
	return newArr
}

// 60. Create a function that takes an array of numbers. Return the largest number in the array.

// White - Create a function that takes an array of numbers. Return the largest number in the array.

function findLargestNum(arr) {
	return Math.max(...arr); 
}

const findLargestNum = (arr) => Math.max(...arr); 

function findLargestNum(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(max < arr[i]) {
       max = arr[i];
    }
  }
  return max;
}

function findLargestNum(arr) {
	let num = arr[0];
	for (let i = 0; i < arr.length; i++){
		if (arr[i] > num) {
			num = arr[i]
		}
	}
	return num;
}

function findLargestNum(arr) {
  return arr.sort((a, b) => b - a)[0]
}


// 61. Create a function that takes a number as an argument and returns the amount of digits it has.

// White - findDigitAmount(123) ➞ 3

function findDigitAmount(num) {
	return num.toString().length; 
}

findDigitAmount = num => num.toString().length; 

function findDigitAmount(num) {
	let str = num.toString();
	return str.length;
}

// 62. Write a function that returns true if two rooks can attack each other, and false otherwise.

// Yellow - canCapture(["A8", "E8"]) ➞ true  canCapture(["A1", "B2"]) ➞ false

function canCapture([yourRook, opponentsRook]) {
	if (yourRook.charAt(0) == opponentsRook.charAt(0)) {
			return true; 
	} else if (yourRook.charAt(1) === opponentsRook.charAt(1)) {
			return true; 
	} else {
		  return false; 
	}
}

function canCapture([yourRook, opponentsRook]) {
	if(yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1]) {
		return true;
	} else {
		return false;
	}
}

function canCapture([yourRook, opponentsRook]) {
	return yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1];
}

function canCapture([yourRook, opponentsRook]) {
	return opponentsRook.includes(yourRook[0]) || opponentsRook.includes(yourRook[1]) ? true : false
}

const canCapture = (arr) => {
	for (let i=0; i<arr.length; i++) {
		return arr[i][0] === arr[i+1][0] || arr[i][1] === arr[i+1][1]
	}
}

function canCapture([yourRook, opponentsRook]) {
	return ((yourRook.split("")[0] === opponentsRook.split("")[0]) || yourRook.split("")[1]=== opponentsRook.split("")[1]) ? true : false;
}

// 63. Remove all vowels from the string.

// Yellow - removeVowels("candy") ➞ "cndy"

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '')
}

function removeVowels(str) {
  return str.replace(/[aeiou]/g, '')
}


// 64. A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

// White - additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]

function additiveInverse(arr) {
	return arr.map(item => item * -1); 
}

const additiveInverse = (arr) => arr.map(item => item * 1)

function additiveInverse(arr) {
	for (i = 0; i < arr.length; i++){
		 arr[i] = arr[i]*-1  
	}
	return arr
}

function additiveInverse(arr) {
	newArr = [];
	arr.forEach(num => {
		console.log(num);
		newArr.push(num * -1);
	});
	return newArr;
}

function additiveInverse(arr) {
	const invArr = [];
	for (element of arr){
		invArr.push(element*(-1));
	}return invArr;
}

// 65. Create a function that returns the smaller number.

// White - smallerNum("21", "44") ➞ "21"

function smallerNum(n1, n2) {
	num = Math.min(n1, n2);
	return num.toString();
}

function smallerNum(n1, n2) {
  return Math.min(n1, n2).toString();
}

const smallerNum = (n1, n2) => (Number(n1) < Number(n2) ? n1 : n2);

function smallerNum(n1, n2) {
	if (Number.parseInt(n1) > Number.parseInt(n2))
		return n2;
	else
		return n1;
}

// 66. Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// White - checkAllEven([1, 2, 3, 4]) ➞ false

function checkAllEven(arr) {
  return arr.every(x => x % 2 === 0)
}

const checkAllEven = arr => arr.every(x => x % 2 === 0);

// 67. Create a function replaces all the vowels in a string with a specified character.

// White - replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"

function replaceVowels(str, ch) {
	return str.replace(/[aeiou]/gi, ch)
}

function replaceVowels(str, ch) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	
	const strArry = [...str].map((char) => {
		return vowels.includes(char) ? ch : char;
	});
	return strArry.join('');
}

const replaceVowels = (str, ch) => str.replace(/[aeiouy]/gi, ch)

function replaceVowels(str, ch) {
	str = str.split('');
	for(var i=0; i < str.length; i++){
		if(str[i]==='a'|| str[i]==='e'||str[i]==='i'||str[i]==='u'||str[i]==='o'){
			str[i] = ch;
		}
	}
	return str.join('');
}



/*

68.

A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:

false
null
undefined
0
NaN
""
In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").

Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

*/

// White - isTruthy("false") ➞ 1


function isTruthy(input) {
	return input ? 1 : 0
}

isTruthy = (input) => +!!input;

function isTruthy(input) {
	if(input) {
		return 1
	} else {
		return 0
	}
}

const isTruthy = (input) => {
	x = [false,null,undefined,0,NaN,``];
	return (x.includes(input)?0:1);
}

/* 69. 

Write two functions:

firstArg() should return the first parameter passed in.
lastArg() should return the last parameter passed in.
Return undefined if the function takes no parameters.

*/

// White - firstArg(1, 2, 3) ➞ 1

function firstArg() {
	return arguments[0];
}

function lastArg() {
	return arguments[arguments.length-1];
}

const firstArg = (...args) => args[0];
const lastArg = (...args) => args[args.length - 1];

const firstArg = (...args) => args.shift();
const lastArg = (...args) => args.pop();

// 70. Given an array of integers, return the difference between the largest and smallest integers in the array.

// White - difference([10, 15, 20, 2, 10, 6]) ➞ 18
// 20 - 2 = 18

function difference(nums) {
	return Math.max(...nums) - Math.min(...nums)
}

const difference = nums => Math.max(...nums) - Math.min(...nums);

function difference(nums) {
	let maxNum = 0;
	let minNum = nums[0];
	
	for(let i = 0; i < nums.length; i++){
		if(nums[i] > maxNum) maxNum = nums[i];
		if(nums[i] < minNum) minNum = nums[i];
	}
	
	return maxNum - minNum;
}

function difference(nums) {
	return nums.sort((a,b) => a-b)[nums.length-1]-nums.sort((a,b) => a-b)[0];
}

function difference(nums) {
	nums=nums.sort((a,b)=>{
		return a-b;
	})
	return nums[nums.length-1]-nums[0];
}

function difference(nums) {
	nums.sort((a, b) => a - b);
	let myArray = [nums[0], nums[nums.length-1]];
	var x = myArray[1] - myArray[0];
	return(x);
}

function difference(nums) {
	let max = nums.reduce(function(a, b){
		return Math.max(a,b);
	});
	let min = nums.reduce(function(a, b){
		return Math.min(a, b);
	});
	return max - min;
}


// 71. Create a function that takes an array of students and returns an array of student names.

/* White -

getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Steve", "Mike", "John"]

*/


function getStudentNames(students) {
	return students.map(student => student.name); 
}

function getStudentNames(students) {
	newarray = [];
	for (let i = 0; i < students.length; i++) {
			newarray.push(students[i].name);
	}
	return newarray;
}

function getStudentNames(students) {
  const arr = [];
	students.forEach(student => arr.push(student.name));
	return arr;
}

function getStudentNames(students) {
	this.students = students;
let arr = [];
for (let x = 0; x < this.students.length; x++) {
	arr.push(this.students[x]['name']);
}
return (arr);
}

function getStudentNames(students) {
  const arr = [];
	students.forEach(student => arr.push(student.name));
	return arr;
}

// 72. Write a function that takes three string arguments (first, last, word) and returns true if (when alphabetically sorted) word is found between first and last.

// Yellow - isBetween("apple", "banana", "azure") ➞ true


function isBetween(first, last, word) {
	return word > first && word < last;
}

function isBetween(first, last, word) {
	return [...arguments].sort()[1] === word;
}

const isBetween = (first, last, word) => [first, last, word].sort()[1] === word;

function isBetween(first, last, word) {
	return [first,last,word].sort().indexOf(word) == 1;
}

function isBetween(first, last, word) {
	let wordsArr = [first, last, word];
	if(wordsArr.sort()[1] == word){
		return true ;
	}
	return false;

}

const isBetween = function(start_word, end_word, word){
	return start_word <= word && end_word >= word ? true : false;
};

function isBetween(first, last, word) {
	let newArr = [first,word,last]
  let sortedArr = newArr.slice().sort()
  for(let i =0;i<newArr.length;i++){
    if(newArr[i]===sortedArr[i]){
      continue
    }
    if(newArr[i]!==sortedArr[i]){
      return false
    }
  }
  return true
}

// 73. Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

// Yellow -  transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]

function transform(arr) {
	return arr.map(num => num % 2 === 0 ? num - 1 : num + 1)
}

const transform = arr => arr.map(x => x % 2 ? x + 1 : x - 1);

function transform(arr) {
	for(i = 0; i < arr.length; i++){
		if(arr[i] % 2 == 0){
			arr[i] = arr[i]-1;
		}
		else{
			arr[i] = arr[i]+1
		}
	}
	return arr;
}

function transform(arr) {
	let arr1=[]
	for(i=0;i<arr.length;i++){
	let x=0
		if(arr[i]%2===0){x=(arr[i]-1)}
		else{x=(arr[i]+1)}
		arr1.push(x)
	}
	return arr1
}

function transform(arr) {
	const x = []
	arr.forEach(a => {
		a % 2 === 0 ? x.push(a-1) : x.push(a+1)
	})
	return x
}

// 74. A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

// Yellow - getWord("seas", "onal") ➞ "Seasonal"

function getWord(left, right) {
	return left.charAt(0).toUpperCase()+ left.slice(1) + right
}

function getWord(left, right) {
	return left[0].toUpperCase() + left.slice(1) + right
}

const getWord=(left, right)=> 
left.replace(/^./g,match=>match.toUpperCase())+right

function getWord(left, right) {
	return left[0].toUpperCase()
		.concat(left.slice(1))
		.concat(right)
}

// 75. Write a regular expression that matches a string if it contains at least one digit.

// "23cc4" ➞ true

let x = /\d/

let x = /[0-9]/

// 76. Create a function that returns true if an input string contains only uppercase or only lowercase letters.

// sameCase("hello") ➞ true

function sameCase(str) {
  return /^[A-Z]+$/.test(str) || /^[a-z]+$/.test(str);
}

const sameCase = str =>
	str.toUpperCase() === str || str.toLowerCase() === str;
	
	function sameCase(str) {
		return str === str.toUpperCase() || str === str.toLowerCase() ? true : false
	}

	function sameCase(str) {
		return (str === str.toLowerCase()) || (str === str.toUpperCase());
	}

	function sameCase(str) {
		return /\b[a-z]+\b|\b[A-Z]+\b/g.test(str)
	}

// 77. Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.
// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

// Yellow - hurdleJump([1, 2, 3, 4, 5], 5) ➞ true


	function hurdleJump(hurdles, jumpHeight) {
		if (hurdles.every(x => x <= jumpHeight)) {
		 return true; 
		} else {
		 return false;
		}
	}

	function hurdleJump(hurdles, jumpHeight) {
		return Math.max(...hurdles) <= jumpHeight;
	}

	function hurdleJump(hurdles, jumpHeight) {
		return hurdles.every(h => jumpHeight >= h)
	}

	function hurdleJump(hurdles, jumpHeight) {
		for(i=0;i<hurdles.length;i++){
			if(jumpHeight < hurdles[i])
				return false;
		}
		return true;
	}

	function hurdleJump(hurdles, jumpHeight) {
		return (hurdles.sort((a, b) => a < b)[0] || 0) <= jumpHeight;
	}

// 78. Create a function to remove all null values from an array.

// White - removeNull(["a", null, "b", null]) ➞ ["a", "b"]

function removeNull(arr) {
	return arr.filter(el => el != null)
}

const removeNull = (arr) => arr.filter((a) => a !== null);

function removeNull(arr) {
	return arr.filter(Boolean);
}

const removeNull = (arr) => {
	let newArr=[];	
	 for(let i=0;i<arr.length;i++)
		 {
			 if(arr[i] != null)
			 newArr.push(arr[i])
		 }
	 return newArr
 }

// 79. Write a function that returns true if a hash contains the specified key, and false otherwise.

// White = hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

function hasKey(obj, key) {
	if (obj.hasOwnProperty(key)) {
		return true; 
	} else {
		return false;
	}
}

function hasKey(obj, key) {
	return obj.hasOwnProperty(key);
}

function hasKey(obj, key) {
	return Object.keys(obj).includes(key);
}

function hasKey(obj, key) {
	return key in obj;
}

const hasKey = (obj, key) => obj.hasOwnProperty(key);

const hasKey = (obj, key) => obj[key]? true : false;

function hasKey(obj, key) {
	var arr = Object.keys(obj);
	for(var i=0; i<arr.length; i++){
		if(arr[i]==key){
			return true;
		}
	}
	return false;
}

/* 80. 

You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. 
You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), 
and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the 
inventory has been sold.

profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}) ➞ 14796

*/

function profit(info) {
	let profit = [];
	let sellPrice = info.sellPrice; 
	let costPrice = info.costPrice; 
	let inventory = info.inventory; 
	return profit = Math.round((sellPrice - costPrice) * inventory); 
}

function profit(info) {
	return Math.round((info.sellPrice * info.inventory)-(info.costPrice * info.inventory))
	}

	function profit(info) {
		let profit = (info.sellPrice - info.costPrice) * info.inventory;
		return Math.round(profit);
	}

const profit = prod => Math.round((prod.sellPrice - prod.costPrice) * prod.inventory);

// 81. Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

// Yellow - isInOrder("abc") ➞ true
// isInOrder("edabit") ➞ false

function isInOrder(str) {
	let y = str.split('').sort().join('')
		if (str === y) {
			return true
		} else {
			return false
		}
	}

function isInOrder(str) {
	return str === str.split("").sort().join("")
}

const isInOrder = str => [...str].sort().join('') === str;

function isInOrder(str) {
	return str === str.split("").sort().join("");
}

function isInOrder(str) {
	return [...str].sort().join('') === str
}

function isInOrder(str) {
	str = str.split("");
	for (let i = 0; i < str.length - 1; i++) {
		if (str[i].charCodeAt(0) > str[i+1].charCodeAt(0)) return false;
	}
	return true;
}

// 82. Create a function that takes two integers and checks if they are equal.

// White - isEqual("1", 1) ➞ false

const isEqual = (n1, n2) => {
	return typeof n1 === "string" || typeof n2 === "string" ?
		false : n1 === n2;
}

function isEqual(num1, num2) {
	return typeof num1 === "number" && typeof num2 === "number" && num1 === num2;
}

function isEqual(num1, num2) {
	return Number.isInteger(num1,num2) && num1 == num2;
}

// 83. Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// White - countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(start) {
	let result = []; 

	for(let i = start; i >= 0; i--) {
		result.push (i)
	}
	return result; 
}

function countdown(start) {
	return [...Array(start + 1)].map((i) => start - i)
}

// 84. Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

// White - [17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]

function mysteryFunc(arr, num) {
  return arr.map(el => el % num)
} 

const mysteryFunc = (arr, num) => arr.map(el => el % num);

function mysteryFunc(arr, num) {
  var newArr = [];
	for (var i = 0; i < arr.length; i++){
		newArr.push(arr[i]%num);
	}
	return newArr;
}


// 85. Create a function that takes in two arrays: the array of user-typed words, 
// and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) 
// and -1s (incorrectly-typed words).

/* 

Yellow - correctStream(
  ["it", "is", "find"],
	["it", "is", "fine"]
	 ) ➞ [1, 1, -1]

*/

function correctStream(ans, sol) {
  ans.map(e => sol.indexOf(e) !== -1 ? 1 : -1);
}

const correctStream = (ans, sol) =>
  ans.map((ans, i) => (ans === sol[i] ? 1 : -1));

function correctStream(user, correct) {
	let result = [];
	for (let i = 0; i < user.length; i++) {
		if (user[i]=== correct[i]) {
			result.push(1);
		} else {
			result.push(-1);
		}
	}
	return result;
}

// 86. Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

// White - nextElement([3, 5, 7, 9]) ➞ 11


function nextElement(arr) {
	return arr[arr.length - 1] + (arr[1] - arr[0]);
}

const nextElement = arr => {
	const [secondLast, last] = arr.slice(-2);
	return last + (last - secondLast);
}

function nextElement(arr) {
  let result = '';
  let dif = arr[1] - arr[0];
  result = arr.slice(-1)[0] + dif;
  return result;
}

const nextElement = a => (a[1] - a[0]) + a[a.length - 1];

// hello