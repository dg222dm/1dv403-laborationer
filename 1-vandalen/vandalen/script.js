"use strict"; // Undviker globala variablar

var makePerson = function(persArr){
var minAge;
var maxAge;
var averageAge;
var averageAgeSum;
var names = "";
var ageArray = [];
var nameArray = [];


//AGE HANDLING

ageArray = persArr.map(function(ageObject){
	console.log(ageObject);
	 if(isNaN(ageObject.age)){
	 	throw new Error("FEL. Är inte ett nummer.");
	 } 
	return ageObject.age;
});

//Min Max för Ålder
minAge = Math.min.apply(null, ageArray); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
maxAge = Math.max.apply(null, ageArray);

//Hanterar avrundning
averageAgeSum = ageArray.reduce(function(previousValue, currentValue){return previousValue + currentValue});  //http://codereview.stackexchange.com/questions/14106/how-do-i-make-this-average-function-better-more-elegant
averageAge = Math.round(averageAgeSum / ageArray.length);		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

//END OF AGE HANDLING

//NAME HANDLING

nameArray = persArr.map(function(nameObject){
	 if(!isNaN(nameObject.name)){
	 	throw new Error("FEL. Är inte ett namn.");
	 } 
	return nameObject.name;

}).sort(function (a,b){return a.localeCompare(b, 'sv');});


names = nameArray.toString().split(",").join(", ");

//END OF NAME HANLDING

var result = {minAge: minAge, maxAge: maxAge, averageAge: averageAge, names: names};
return result;

};

try {
	var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
	var result = makePerson(data);
	console.log(result);
} catch (error) {
	console.log(error.message);
}