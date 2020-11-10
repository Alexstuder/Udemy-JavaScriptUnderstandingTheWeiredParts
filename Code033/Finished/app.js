var objectLiteral = {
    vorname: "Marie",
    kannProgrammieren: true
}



/*{
    "vorname": "Marie",
    "kannProgrammieren": true
}*/


console.log(JSON.stringify(objectLiteral));



var jsonValue = JSON.parse('{"vorname": "Marie","kannProgrammieren": true}');

console.log(jsonValue);