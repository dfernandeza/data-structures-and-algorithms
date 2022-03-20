# Arrays

The array data structure is use to store a collection of elements and provides a very convenient way of accessing these elements `array[]`. Arrays have a fixed size thought, meaning that adding and removing element from the beginning or the middle of the array could be an expensive operation as the elements need to be shifted over.

> How exactly arrays are implemented depends on the specific JavaScript interpreter or VM. The following explanation assumes we are using the V8 JavaScript engine.

In JavaScript, arrays are in fact dynamic meaning that the array will automatically resize. When adding an extra item to an existing array, for instance by calling `Array.prototype.push()`, the engine will allocate a new, bigger array, copy the existing elements over, and then add the new value.

_The above won't be true for "sparse" arrays, (arrays are arrays with a lot of empty spots in the middle) in which case the array will be treated by the engine as a hash map._

One last important thing to mention is that JavaScript array implementation defers from other languages in the sense that you can create an array that contains multiple different data types.

## Time complexity analysis

| Operation          | Time complexity |
| ------------------ | --------------- |
| Access nth element | O(1)            |
| Insert             | O(N)            |
| Delete             | O(N)            |
