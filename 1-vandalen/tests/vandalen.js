test( "Datatyper", function() {
  var indata = [{name: "John Häggerud", age: 45}, {name: "Johan Leitet", age: 37},  {name: "Mats Loock", age: 32}];

  ok( typeof makePerson(indata) == "object" , "Funktionen returnerar ett objekt." );
  
  ok( makePerson(indata).hasOwnProperty('names')  , "Svarsobjektet innehåller egenskapen 'names'" );
  ok( makePerson(indata).hasOwnProperty('minAge') , "Svarsobjektet innehåller egenskapen 'minAge'" );
  ok( makePerson(indata).hasOwnProperty('maxAge') , "Svarsobjektet innehåller egenskapen 'maxAge'" );
  ok( makePerson(indata).hasOwnProperty('averageAge') , "Svarsobjektet innehåller egenskapen 'averageAge'" );

});

test( "Namnhantering (names)", function() {

  var indata = [{name: "John Häggerud", age: 43}, {name: "Johan Leitet", age: 34},  {name: "Mats Loock", age: 23}];
  var indata2 = [{name: "Ö", age: 43}, {name: "Å", age: 23},  {name: "Ä", age: 34}];


  equal( makePerson(indata).names, "Johan Leitet, John Häggerud, Mats Loock" , "Namn returneras sorterat" );
  equal( makePerson(indata2).names, "Å, Ä, Ö" , "Sortering fungerar även för svenska tecken." );
 	
});

test( "Åldershantering (maxAge, minAge, aveargeAge)", function() {

  var indata2 = [{name: "John Häggerud", age: 12}, {name: "Johan Leitet", age: 23},  {name: "Mats Loock", age: 23}];
  var indata = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36},  {name: "Mats Loock", age: 46}];
  
  equal( makePerson(indata).maxAge, 46, "maxAge är 46" );
  equal( makePerson(indata).minAge, 36, "minAge är 36" );
  equal( makePerson(indata).averageAge, 40, "averageAge är 40" );	
  
});

test( "Uppgiften totalt", function() {

  var indata = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36},  {name: "Mats Loock", age: 46}];
  
  deepEqual( makePerson(indata), {minAge: 36, maxAge: 46, averageAge: 40, names: "Johan Leitet, John Häggerud, Mats Loock"}, "Uppgiften avklarad på Nivå 1" );
  deepEqual( makePerson(indata), {minAge: 36, maxAge: 46, averageAge: 40, names: "Johan Leitet, John Häggerud, Mats Loock"}, "Uppgiften avklarad på Nivå 2" );
});
