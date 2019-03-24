// Your Javascript Code Goes Here
function greet() {
    console.log('hi');
}

greet();

// function are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression

var greetMe = function() {
    console.log('Hi Reysmer');
}

greetMe();

// it's first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(() => {
    console.log('Hello Williangel');
});