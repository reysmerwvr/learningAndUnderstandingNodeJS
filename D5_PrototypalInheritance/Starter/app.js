// Your Javascript Code Goes Here
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

var me = new Person('Reysmer', 'Valle');

Person.prototype.greet = function() {
    console.log(`Hello, ${this.firstname} ${this.lastname}`)
}

console.log(me.firstname);
me.greet();

var jane = new Person('Jane', 'Valle');
jane.greet();

console.log(me.__proto__);
console.log(jane.__proto__);
console.log(jane.__proto__ === me.__proto__);