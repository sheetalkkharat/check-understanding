//Jan 1 1970 - dates are calculated from this date

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());

let myNewDate = new Date(2023,0,23) // months start with "0"
console.log(myNewDate.toDateString());

// Time stamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);


