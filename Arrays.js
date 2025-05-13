// const myArr = [0,1,2,3,4,5]
// // Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log((myArr));

// console.log(myArr.unshift(9)); // Puts the value at 0th index
// console.log(myArr.shift());// removes values on 0th index
// console.log(myArr.includes(10)); // tells if 10 is there or not (T/F)

// const newArr = myArr.join() // converts array to string and joins it , comma separated

// // slice and splice difference - slice will not include the last given index value and let the original array be same
// // where as splice takes the last given value too and removes the spliced part from original array.
// console.log("A", myArr);
// const newArr1 = myArr.slice(1,3)
// console.log(newArr1);

// console.log("B", myArr);
// const newArr2 = myArr.splice(1,3)
// console.log(newArr2);


// console.log("C", myArr);


// const heros = ['Shahrukh', 'Salman', 'Aamir']
// const heros2 = ['Sidharth', 'Ranbir', 'Vicky']

// const allHeros = heros.concat(heros2)
// console.log(allHeros);

// const allHeros2 = [...heros,...heros2] -- //This is spread method, this works same as concat, it spreads the arrays in individual elements to make it one array
// console.log(allHeros2);

// const multiArr = [1,2,3,[4,5,6],7,[6,7,[10,11]]]
// let oneArr = multiArr.flat(Infinity)
// console.log(oneArr);


console.log(Array.isArray("Sheetal")); // question - is a array (T/F)
console.log(Array.from("Sheetal")); // converts to array
console.log(Array.from({name: "Sheetal"})) // will return empty array as long as  not given the specific key or value instructions


let Sc1 =100
let Sc2 = 200
let Sc3 = 300
console.log(Array.of(Sc1,Sc2,Sc3));