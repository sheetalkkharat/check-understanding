const gameName = new String('Sheetal');
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));


const newstring = gameName.substring(0,5) //Do not include the value at index 5
console.log(newstring);

let string2 = gameName.slice(2,5)
console.log(string2);

let string3 = '  sam  '
console.log(string3);
console.log(string3.trim()); // works on whitespaces

const url = "https://sam.com/sam%20Dcousta"
console.log(url.replace("%20",'-'));

console.log(url.includes('sam')); // output is boolean Y/N

console.log(`Hi ${gameName},I am ${string3.trim()}!`);

console.log(gameName.split(""));