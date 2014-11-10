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


ageArray = persArr.map(function(ageArr){ 
	return ageArr.age;	
});

//Min Max för Ålder
minAge = Math.min.apply(null, ageArray); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
maxAge = Math.max.apply(null, ageArray);

//Hanterar avrundning
averageAgeSum = ageArray.reduce(function(a, b){return a + b});  //http://codereview.stackexchange.com/questions/14106/how-do-i-make-this-average-function-better-more-elegant
averageAge = Math.round(averageAgeSum / ageArray.length);		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

//END OF AGE HANDLING

//NAME HANDLING

nameArray = persArr.map(function(nameArr){
	return nameArr.name;
});



nameArray.sort(function (a,b){return a.localeCompare(b, 'sv');}); // hur fan funkar denna?
names = nameArray.toString();
names = names.split(",").join(", ");


//END OF NAME HANLDING

return {minAge: minAge, maxAge: maxAge, averageAge: averageAge, names: names};
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);