interface IPerson {
    id: number;
    sayMyName(): string;
}
class Person implements IPerson{
    readonly id: number;
    protected firstName: string;
    private age: number;

    constructor(id: number, firstName: string, age: number) {
    this.id = id;
    this.firstName = firstName;
    this.age = age;
    }

    sayMyName(): string {
        return this.firstName;
    }
}

class Employee extends Person {
    constructor(id: number, firstName: string, age: number) {
        super(id, firstName, age);
    }
    whoAmI() {
        return this.firstName;

    } 
}

const warley = new Person(1, "Warley", 28);

//Mesma coisa que a classe Person
class PersonRefact {
    constructor(
        readonly id: number,
        protected firstName: string,
        private age: number,
    ) {}
}