var person = {  vorname : "Alex" 
              , nachname : "Studer"
              , adress:{
                         strasse : "Bahnhofstrasse"
                       , Bundesland: "Berlin"
                       }
             } ;


greet(person);


function greet(person){

console.log("Hallo : " + person.vorname);    
    
}

greet({vorname: "Marie"})
