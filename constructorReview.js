//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
function myFunction() {
    console.log(this);
}

function Animal(species, name, legs, color, food) {
    this.species = species;
    this. name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
}

Animal.prototype.method = myFunction;
var dog = new Animal('wolf', 'dog', 4, 'multi-color', ['dog food', 'table scraps', 'puparoni'])
dog.method();


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
function person(name, age, height, gender) {
    var newPerson = {
        name: name,
        age: age,
        height: height,
        gender: gender
    }
    return newPerson;
}

console.log(person('brad', 29, '6 feet 0 inches', 'male'));

//Create a animal array and a person array.

  //code here
var arrayAnimals = [];
var arrayPerson = [];

//Create two instances of Animal and push those into your animal array

  //code here
arrayAnimals.push('lions', 'tigers');
arrayAnimals.push('bears');
console.log(arrayAnimals);


//Create two instances of person and push those into your person array.

  //code here
arrayPerson.push('Brad');
arrayPerson.push('Bri');
console.log(arrayPerson);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function() {
    if(this.food && this.food.llength > 0) {
        console.log(this.name + ' ate ' + this.food[Math.floor((Math.random() + this.food.length - 1) + 1 )]+ '.');
    }
}

dog.eat();


//At this point, if we wanted to add something to every instance of person could we?

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/