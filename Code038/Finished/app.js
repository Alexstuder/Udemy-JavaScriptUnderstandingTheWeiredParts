var arr = [
    1, 
    false, 
    {
        name: "Jakob",
        adresse: "Bahnhofstraße 111"
    },
    function(name){
        var greeting = "Hallo ";
        console.log(greeting + name);
    },
    "Hallo",
    undefined
];


console.log(arr);

arr[3](arr[2].name);