function greet(){
    console.log("Hallo");
}


var anonymousGreet = function (){
    console.log("Hallo");
}



function log(a){
    a();
}


log(function() {
    console.log("hallo");
});