function greet(vorname, nachname, sprache){
    sprache = sprache || "en";
    
    if(sprache === "en"){
        console.log("Hello " + vorname + " " + nachname);
    }
    
    if(sprache === "de"){
        console.log("Hallo " + vorname + " " + nachname);
    }
    
}

function greetEnglish(vorname, nachname){
    greet(vorname, nachname, "en");
}
function greetGerman(vorname, nachname){
    greet(vorname, nachname, "de");
}


greetEnglish("Jakob", "Schaal");
greetGerman("Jakob", "Schaal");
