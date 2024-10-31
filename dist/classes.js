"use strict";
class Person {
    constructor(id, firstName, age) {
        this.id = id;
        this.firstName = firstName;
        this.age = age;
    }
    sayMyName() {
        return this.firstName;
    }
}
class Employee extends Person {
    constructor(id, firstName, age) {
        super(id, firstName, age);
    }
    whoAmI() {
        return this.firstName;
    }
}
const warley = new Person(1, "Warley", 28);
class PersonRefact {
    constructor(id, firstName, age) {
        this.id = id;
        this.firstName = firstName;
        this.age = age;
    }
}
