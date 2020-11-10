//IIFE
(function(global, name) {
	var greeting = "Hallo";
	console.log(greeting + " " + name);
    global.greeting = greeting;
}(this, "Jakob")); // IIFE

console.log(greeting);

