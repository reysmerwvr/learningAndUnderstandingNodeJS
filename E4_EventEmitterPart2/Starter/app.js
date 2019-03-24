var Emitter = require('events');
var eventConfig = require('./config');

var emtr = new Emitter();

emtr.on(eventConfig.events.GREET, function() {
    console.log('Somewhere, someone said hello');
});

emtr.on(eventConfig.events.GREET, function() {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.events.GREET);