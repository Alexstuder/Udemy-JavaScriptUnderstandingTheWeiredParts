function sayHiLater(){
    
    var greeting = "Hi!";
    
    setTimeout(function(){
        console.log(greeting);
    }, 3000);
    
}


sayHiLater();

//jQuery benutzt Function Expressions und First-Class-Functions!
//$("button").click(function(){
//    
//});


function tellMeWhenDone(callback){
    var a = 1000; //some work
    var b = 2000; //some work
    
    callback();
}


tellMeWhenDone(function(){
    console.log("Bin fertig!");
});


tellMeWhenDone(function(){
    alert("Bin fertig!");
});


tellMeWhenDone(function(){
    console.log("Bin mit allem fertig!");
});











