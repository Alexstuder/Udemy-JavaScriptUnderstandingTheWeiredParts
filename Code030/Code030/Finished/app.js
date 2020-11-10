var person = new Object();

person["vorname"] = "Jakob";
person["nachname"] = "Schaal";

var vornamenProperty = "vorname";

console.log(person);
console.log(person[vornamenProperty]);



console.log(person.vorname);
console.log(person.nachname);



person.adresse = new Object();
person.adresse.strasse = "Bahnhofstraße 111";
person.adresse.stadt = "Ulm";
person.adresse.bundesland = "Baden-Württemberg";

console.log(person);
console.log(person.adresse.strasse);
console.log(person.adresse.stadt);
console.log(person["adresse"]["bundesland"]);


for(var i = 0; i<128; i++){
    person["SomeValue" + i] = "Irgendein Wert an der Stelle " + i;
}


console.log(person);