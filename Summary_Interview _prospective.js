// DataTypes - Primitive & Non-primitive/reference type

/* primitive - 7 types - call by value
// string,number, boolean,null, undefined,symbol, BigInt
// symbol for unique values!

Javascript statistical or dynamically typed?

reference type/ non primitive
// Array,Objects,functions

*/
const heros =["Ajay","Shahrukh", "Salman"];  // array
let myObject = {              // object
    name: 'Sam',
    age: 22
}

// a function saved in a variable

const myFunction =function(){
    console.log("Hello");
}



// Memory : stack(primitive), heap(Non-primitive)

/* primitive values goes in stack gives you copy and non-primitive gives reference,
which means - any changes made in stack will keep the original and give changes in copy.
And in Heap - changes will be made to original.
*/