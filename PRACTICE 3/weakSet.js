const object = {
    name: "Abin",
    age: 22
};

const weak = new WeakSet([object]); // Note: Use an array to create a WeakSet with initial values

console.log(weak); // Output: WeakSet { [Object] }
