//by value (primitives)
var a = 3;
var b;

b = a;

console.log(a);
console.log(b);


a = 2;


console.log(a);
console.log(b);

function inc(c){
    c += 1;
    console.log(c);
}

inc(a);
console.log(a);


//by reference


var c = {greeting: "Hallo"};
var d;

d = c;

console.log(c);
console.log(d);


c.greeting = "Hi"; //mutate

console.log(c);
console.log(d);


function changeGreeting(a){
    a.greeting = "Hola";
}

changeGreeting(c);

console.log(c);
console.log(d);


//ACHTUNG: {} erzeugt neuen Speicherbereich!
c = {greeting: "howdy"};

console.log(c);
console.log(d);




