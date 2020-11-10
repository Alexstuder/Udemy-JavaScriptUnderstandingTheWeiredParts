function makeGreeting(language){
    
    return function(vorname, nachname){
        
        if(language === "en"){
            console.log("Hello " + vorname + " " + nachname);
        }
        
        if(language === "de"){
            console.log("Hallo " + vorname + " " + nachname);
        }
        
    }
    
}



var greetEnglish = makeGreeting("en");
var greetGerman  = makeGreeting("de");


greetEnglish("Jakob", "Schaal");
greetGerman ("Jakob", "Schaal");