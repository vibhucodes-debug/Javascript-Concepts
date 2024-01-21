
// DEFINING CLASSES

// Create two classes: Animal and Dog
// The Animal class should take two parameters in the constructor : name and animalType. Set them as its public properties.
// In addition, the Animal class should have two functions sayName and sayAnimalType initialized in the constructor.


function Animal(name,type){
    this.name = name;
    this.animalType = type;
    
    this.sayName = function(){console.log(this.name)};
    // this.sayAnimalType = function(){console.log(this.animalType)};
}

var man = new Animal('Ranbir','Man');
console.log(man);
man.sayName();
// man.sayAnimalType();  // man.sayAnimalType is not a function
Animal.prototype.sayAnimalType = function(){
    console.log(this.animalType);
}

man.sayAnimalType();

// Inherit Animal class by creating a Dog Class and then copy its prototype

function Dog(name){
    Animal.call(this, name, "Dog");
}

// copy over the methods 
Dog.protoype = Object.create(Animal.prototype);
var myAnimal = new Animal("ditto","pokemon");
myAnimal.sayName(); // 
myAnimal.sayAnimalType();

var myDog = new Dog("Candy","dog");
myDog.sayName();
Dog.prototype.sayAnimalType = function(){
    console.log(this.animalType);
}

myDog.sayAnimalType();
