// Import the required data structures
const { Stack, Queue } = require('./dataStructures');

// Create a new stack
const stack = new Stack();

// Push elements into the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Print the stack
console.log('Stack:', stack.getStack());

// Pop an element from the stack
const poppedElement = stack.pop();
console.log('Popped element:', poppedElement);

// Create a new queue
const queue = new Queue();

// Enqueue elements into the queue
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

// Print the queue
console.log('Queue:', queue.getQueue());

// Dequeue an element from the queue
const dequeuedElement = queue.dequeue();
console.log('Dequeued element:', dequeuedElement);