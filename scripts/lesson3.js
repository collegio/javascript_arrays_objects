/*

	Learn to Code JavaScript: Lesson 3
	Arrays and Objects

	Let's look at some examples of storing data by using arrays and objects

*/

// Window message functions can be used to send feedback to the user:

// Alert messages show a message to the user
alert("This is an alert message!");

// Confirm messages require yes/no input from the user
if (confirm("Does your name have more than 5 letters?")) {
	alert("Wow, what a long name!");
}
else {
	alert("Wow, your name is short!");
}

// Prompt messages allow the user to enter a custom message that is placed
// into a variable
var message = prompt("What is your name?");
console.log("The result of your prompt:");
console.log(message);

// We use arrays to hold lists of values. Arrays use the [] operator
var myArray = ['apple', 'orange', 'banana'];

// Arrays can also be declared empty.
var emptyArray = [];

// Array indices always start with 0 when attempting to access specific values
console.log("The Array:");
console.log(myArray);

console.log("At Index 1:");
console.log(myArray[1]);
console.log("At Index 0:");
console.log(myArray[0]);

// You can update a value by updating the array value at the specific index
myArray[1] = 'cherry';
console.log(myArray);

// You can add a new item to the end of an array by using the push() function
myArray.push('strawberry');
myArray.push('blueberry');
myArray.push('peach');
console.log(myArray);

// You can remove an item from the end of an array into a variable by using pop()
var poppedFruit = myArray.pop();
console.log("The removed fruit: "+poppedFruit);
console.log(myArray);

// You can remove an item from the beginning of an array into a variable by  
// using shift()
var shiftedFruit = myArray.shift();
console.log("The removed fruit: "+shiftedFruit);
console.log(myArray);

// The .length attribute of arrays can be used to get the length of an array,
// and is useful when looping through array values
console.log("The array values:");
for (i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
}

// OBJECTS

// Objects are used when using variables to represent real-life objects.
// Object items are key-value pairs and are signified with {}

var myObject = {
	first_name: "John",
	last_name: "Doe",
	age: 25,
	email: 'john@doe.com'
};

// You can access and update object properties with dot notation...
console.log("First Name");
console.log(myObject.first_name);
console.log("Now updated:");
myObject.first_name = "Johnny";
console.log(myObject.first_name);

// ...or with square brackets
console.log(myObject['first_name']);

// You can even add new properties using dot or square notation
myObject.phone = '555-555-5555';
myObject['fax'] = '555-555-5555';
console.log(myObject);

// Remove the property by using the delete keyword
delete myObject.fax;
console.log("Removed fax:");
console.log(myObject);

// Use Object.keys to see all of your object attributes
console.log("The keys:");
console.log(Object.keys(myObject));

// You can even add functions to objects to perform operations. Let's print
// out a string about the user with a function.
// You use the this keyword to access object-specific attributes

myObject.printBio = function() {
   	console.log("Hi, my name is " + this.first_name 
   		+ " " + this.last_name + ", I'm " + this.age + " years old, and my email is "
   		+ this.email + ".");
};

myObject.printBio();