
// Als JSON notiert
var objectLiteral = {
    vorname: "Marie",
    kannProgrammieren: true
    
}
var objectLiteralAsJson = {
    "vorname": "Marie as JSON",
    "kannProgrammieren": true
    
}

console.log(JSON.stringify(objectLiteral));
console.log(objectLiteralAsJson);

var jsonValue = JSON.parse('{"vorname": "Hans", "nachname": " Dampf"}');

console.log(jsonValue);
