class Person {
    constructor() {
        if (typeof Person.instance === 'object') {
            return Person.instance;
        }

        Person.intance = this;
        return this;
    }
}

export default Person;