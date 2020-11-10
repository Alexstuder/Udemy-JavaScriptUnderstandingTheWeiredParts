var person = {
    vorname: "Jakob",
    nachname: "Schaal",
    getFullName: function(){
        var fullname = this.vorname + " " + this.nachname;
        return fullname;
    }
};



//function borrowing
var person2 = {
    vorname: "Max",
    nachname: "Mustermann"
};

console.log(person.getFullName.apply(person2));


//function currying
function multiplizieren(a, b){
    return a*b;
}

var verdoppeln = multiplizieren.bind(this, 2);
console.log(verdoppeln(4));

var verdreifachen = multiplizieren.bind(this, 3);
console.log(verdreifachen(4));







