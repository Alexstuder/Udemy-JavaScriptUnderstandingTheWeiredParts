function greet(vorname, nachname, sprache, ...other){
    sprache = sprache || "de";
    
    if(arguments.length === 0){
        console.log("Parameter fehlen!");
        console.log("--------");
    }
    
    
    console.log(vorname);
    console.log(nachname);
    console.log(sprache);
    console.log(arguments);
    console.log("arg 3 : " + arguments[3]);
    console.log("--------");
}

greet();
greet("Jakob");
greet("Jakob", "Schaal");
greet("Jakob", "Schaal", "en");
greet("Jakob", "Schaal", "de", "Bahnhofstraße 111", "Ulm");