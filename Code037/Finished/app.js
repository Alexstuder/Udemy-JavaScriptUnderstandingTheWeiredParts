console.log(this);

function a(){
    this.neueVariable = "Hallo";
    console.log(this);
}

var b = function(){
    console.log(this);
}

a();
b();
console.log(neueVariable);

var c = {
    name: "Das C-Objekt",
    log: function(){
        var self = this;
        
        self.name = "Updated C-Objekt";
        
        
        var setName = function(newName){
            self.name = newName;
        }
        
        setName("Schonwieder geupdated! Das C-Objekt");
        
        console.log(self);
    }
}

c.log();