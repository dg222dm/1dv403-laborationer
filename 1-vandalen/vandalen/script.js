"use strict"; // Undviker globala variablar

var makePerson = function(persArr){

var minAge;
var maxAge;
var averageAge;
var averageAgeSum;
var names = "";
var ageArray = [];


//AGE HANDLING

for(var i = 0; i < persArr.length; i += 1){ 
	
	ageArray[i] = persArr[i].age;
	
}

//Min Max för Ålder
minAge = Math.min.apply(null, ageArray); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
maxAge = Math.max.apply(null, ageArray);

//Hanterar avrundning
averageAgeSum = ageArray.reduce(function(a, b){return a + b});  //http://codereview.stackexchange.com/questions/14106/how-do-i-make-this-average-function-better-more-elegant
averageAge = Math.round(averageAgeSum / ageArray.length);		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

//END OF AGE HANDLING


console.log(ageArray);
console.log(minAge);
console.log(maxAge);
console.log(averageAgeSum);
console.log(averageAge);
/*
	nameArray.sort(function (a,b){return a.localeCompare(b, 'sv');});
	function (a,b){return a.localeCompare(b, 'sv');}
*/

return {minAge: minAge, maxAge: maxAge, averageAge: averageAge};

};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);