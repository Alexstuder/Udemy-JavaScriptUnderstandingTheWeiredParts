// function statment
function greet(name){
    console.log("Hallo " + name);
}
greet("Jakob");



// function expression
var greetFunc = function(name){
    console.log("Hallo " + name);
};
greetFunc("Jakob");



//Immediatly Invoked Function Expression (IIFE)
var greeting = function(name){
    return "Hallo " + name;
}("Jakob");

console.log(greeting);







3;
"Ich bin ein String";
{
    name: "Jakob"
};




(function(name){
    var greeting = "Hallo";
    console.log("IIFE: " + greeting + " " + name);
})("Jakob");



