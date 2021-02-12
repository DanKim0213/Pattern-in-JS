const expect = require('chai').expect;
const Person = require('../../src/notes/hello');
import Person_es6 from '../../src/notes/hello';


// describe('msg', suite-fn(...it('msg', fn())));
// suite means a set of connected rooms. 
// room in this context means "it". 
// i.e. "describe a suite of it"
// The reason why mocha needs its function as an arg is
// we need to define the behavior of our class on our own. 
describe('Hello test', () => {
    it('Hello using Function object', () => {
        let john = new Person('John', 30);
        let barbie = new Person('Barbie', 32);
        expect(john.sayHi()).to.equal('I am from Earth');

        expect(john.planet).to.equal('Mars');
        expect(john.planet).to.equal(barbie.planet);
        
        expect(john.hasOwnProperty('name')).to.true;
        expect(Object.getPrototypeOf(john).hasOwnProperty('planet')).to.true;
    });

    it('Hello using Class (es6)', () => {
        let james = new Person_es6('James', 30);
        let janifer = new Person_es6('janifer', 32); 
        Object.getPrototypeOf(james).planet = 'pluto'; // **

        // this can hover a hint of sayHi() method
        expect(james.sayHi()).to.equal('I am from Earth');
        expect(janifer.planet).to.equal('pluto'); 

        
        expect(james.hasOwnProperty('name')).to.true;
        expect(Object.getPrototypeOf(james).hasOwnProperty('planet')).to.true;
    });
});

/**
 * Prototype-chain:
 * https://stackoverflow.com/a/32114607
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 * 
 * Monkey-patching (e.g. Object.getPrototypeOf(instance).prop = 123) 
 * should be avoided and, instead, use hasOwnProperty() method.
 * https://en.wikipedia.org/wiki/Monkey_patch#Pitfalls
 */