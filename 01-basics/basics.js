//Arrow function
const dataTypes = () => {
	console.log("Primitive Data Types")

	const num = 5.3;
	console.log("Number: ", num);

	let failed = false;
	let win = true;
	console.log("Boolean: ", failed, win);

	const greeting = "Hello, world!";
	console.log("String: ", greeting);

	let firstName = undefined;
	let lastName;

	console.log("Undefined: ", firstName, lastName)

	console.log("--------------------------------")

	console.log("Object Data Types")

	const person = {
		name: "Alex",
		age: 31,
		isActive: true
	}
	console.log("Object: ", person)
	// console.log(person.name, person.age, person.isActive)
	let { name, age, isActive } = person;
	console.log(name, age, isActive)

	let fruits = ["apple", "banana", "cherry"]
	console.log("Array: ", fruits)

	console.log(typeof person)
	console.log(typeof fruits)

}

//const testFunction = () => { console.log("Тест") }


//Write a function to reverse a number
// 345 ---> 543
// %


const logicalOperations = () => {


	// &&   ||

	let score = 30;
	let grade = 10;

	console.log(score > 10)	// true
	console.log(grade < 10) // false

	const isGoodScore = score > 25;
	const isGoodGrade = grade >= 10;


	const result = isGoodScore || isGoodGrade;
	if (result) {
		cosole.log("PASS")
	}
	else {
		console.log("Try again")
	}


}


const stringMethods = () => {
	let str1 = "Hello World!";

	console.log(str1.toLowerCase());
	console.log(str1.toUpperCase());

	console.log(str1.substring(2, 5));

	console.log(str1.charAt(0));

	// Write a function to check if a string is a palindrome

}



const arrayMethods = () => {
	let colors = ["red", "green", "blue"];
	colors.push("orange");
	colors.pop();


	console.log(colors)

	console.log(colors.indexOf("green"))
	console.log(colors.slice(0, 2));


};



export { dataTypes, logicalOperations, stringMethods, arrayMethods }

