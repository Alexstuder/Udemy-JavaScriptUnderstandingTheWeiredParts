
// Expression ; liefert einen Werte zurück
var a;


//Statement, liefert keinen Wert zurück
if(a===3){
    console.log("stimmt");
}

greet();

//Statmen;
function greet(){
    console.log("Hallo");

}

//anonymousGreet(); <== funktioniert nicht ! weil noch nicht definiert !

// Expression
var anonymousGreet = function(){
    console.log("Hallo anonymous")
} 
anonymousGreet();

