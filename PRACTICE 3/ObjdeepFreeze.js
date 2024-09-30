const profile = {
    name: "Abin",
    age: 22,
    address: {
        city: "Chennai",

    }
}

const prof = JSON.parse(JSON.stringify(profile), (key, value) => {

    if (typeof value === 'object' && value !== null) {
        return Object.freeze(value)
    }

    return value;
})

prof.address.city = "Vignesh"

console.log(prof);




// The JSON.parse(JSON.stringify(profile), (key, value) => {...}) expression you provided is using a custom reviver function as the second argument to JSON.parse(). This reviver function is invoked for each property and value in the parsed JSON string, and it allows you to modify the resulting JavaScript object as it's being created.

// In the reviver function, the value parameter represents the value being parsed from the JSON string. Even though value was originally a string when it was serialized using JSON.stringify(), during the parsing process, JSON.parse() converts the JSON string back into its original JavaScript data types. Therefore, within the reviver function, value could be of any data type that JSON supports, including objects, arrays, strings, numbers, booleans, or null.

// In your code, the typeof value === 'object' && value !== null condition checks if value is an object (excluding arrays and null). If this condition is true, it means that the current value being parsed from the JSON string is an object. At this point, you are choosing to freeze the object using Object.freeze(value) to make it immutable.

// To clarify:

// Yes, value was originally a string when serialized using JSON.stringify().
// During parsing with JSON.parse(), value is restored to its original JavaScript data type based on the content of the JSON string.
// If value represents an object in the JSON string, it will be parsed into a JavaScript object by JSON.parse(), and hence typeof value === 'object' will evaluate to true.
// Therefore, the condition typeof value === 'object' && value !== null allows you to detect object values during the parsing process, even though they were represented as strings in the JSON string.
// So, it's possible for typeof value to be equal to 'object' inside the reviver function because value has been parsed from a JSON string back into its original JavaScript data type during the parsing process.