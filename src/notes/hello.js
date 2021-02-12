// constructor
function Person(name, age) { 
    this.name = name;
    this.age = age;
    this.origin = "Earth";
}

// shared by all People
Person.prototype.planet = "Mars";
Person.prototype.sayHi = function() {
    return "I am from " + this.origin;
}


// es6
class Person_es6 {
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.origin = "Earth";
    }
    
    sayHi() {
        return "I am from " + this.origin;
    }

}

// not working; 
// Object.getPrototypeOf(Person_es6).planet = "Pluto";

module.exports = Person;
export default Person_es6;