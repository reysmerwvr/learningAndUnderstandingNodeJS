'use strict';

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}

var jonh = new Person('John', 'Doe');
jonh.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(jonh.__proto__);
console.log(jane.__proto__);
console.log(jane.__proto__ === jonh.__proto__);