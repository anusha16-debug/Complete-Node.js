
var events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();

//Subscribe for FirstEvent
em.on('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');





//Extending event emitter
var EventEmitter = require('events')

class EmitterClass extends EventEmitter {}

myEmitter = new EmitterClass()

myEmitter.on('ExtendingEvent', (data) => {
    console.log('an event occured ' +data)
})



myEmitter.on('event with zero args',  () => {
   console.log('Event with zero args occured')
})

myEmitter.emit('ExtendingEvent', 'Extending EventEmitter example');

myEmitter.emit('event with zero args');