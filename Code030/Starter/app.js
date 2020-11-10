var person = new Object();

person["vorname"] = "Alex";
person["nachname"] = "Studer";

var vornameproperty = "vorname";

console.log(person);
console.log(person[vornameproperty]);

console.log(person.vorname);
console.log(person.nachname);

person.adresse = new Object();
person.adresse.strasse = "Bahnhofstrasse 111";
person.adresse.nr = "111";


console.log(person.adresse);

for(var i = 0 ; i < 128 ; i++){
    person["SomeValue: " + i ] = "Hier ist der Wert :" + i ;
}


console.log(person);