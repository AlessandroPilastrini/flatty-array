//author: Alessandro Pilastrini
//comment: running script in command-line: node flatty.js

//script - from nested int array to flat int array

var clearZero = function (e){ // function return int > 0 passed to .filter method
	return e > 0; 
};

var inputArray = [[1, 2, [3]],4,[5, [6, [7,8],[]]],null];

var arrayToStr = inputArray.toString(); // It converts array in a string value
var outputArrayInt = arrayToStr.split(',').map(Number).filter(clearZero); // It wraps splitted string values in array and converts all elements inside to numeric values

console.log(outputArrayInt); // --> [1, 2, 3, 4, 5, 6, 7, 8]


//test 
function test(a){
	if (Array.isArray(a)){
		console.log("is an array without 0 or null values!\n");
	}
	else{
		console.log("is not an array!\n")
	}
};

console.log(test(outputArrayInt));