var jakob = { 
    vorname: "Jakob", 
    nachname: "Schaal",
    adresse: {
        strasse: "Bahnhofstraße 111",
        stadt: "Ulm",
        bundesland: "Baden-Württemberg"
    }
};

function greet(person){
    console.log("Hallo " + person.vorname);
}


greet(jakob);
greet({
    vorname: "Marie",
    nachname: "Müller"
});

jakob.adresse2 = {
    strasse: "Anderestraße 333"
}