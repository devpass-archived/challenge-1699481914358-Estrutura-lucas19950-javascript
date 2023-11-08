const { Stack, Queue } = require('./dataStructures');

test('Stack operations', () => {
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.getStack()).toEqual([1, 2, 3]);

  const poppedElement = stack.pop();
  expect(poppedElement).toBe(3);
  expect(stack.getStack()).toEqual([1, 2]);
});

test('Queue operations', () => {
  const queue = new Queue();

  queue.enqueue('a');
  queue.enqueue('b');
  queue.enqueue('c');

  expect(queue.getQueue()).toEqual(['a', 'b', 'c']);

  const dequeuedElement = queue.dequeue();
  expect(dequeuedElement).toBe('a');
  expect(queue.getQueue()).toEqual(['b', 'c']);
});