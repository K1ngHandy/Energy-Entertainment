// Declaring an array literal
const concerts = ['April 26', 'April 29', 'May 5', 'May 10', 'May 17'];

// Accessing elements in an array
console.log('European Tour Dates!');
concerts[0]; // April 26
concerts[1]; // April 29
concerts[2]; // May 5
concerts[3]; // May 10
concerts[4]; // May 17

// Setting elements in an array
concerts[0] = 'May 26';
concerts[1] = 'May 29';

// Set new element in concerts array
concerts[5] = 'May 1';

// Dates out of order now. Reorder like this: 
concerts[0] = 'May 1';
concerts[1] = 'May 5';
concerts[2] = 'May 10';
concerts[3] = 'May 17';
concerts[4] = 'May 26';
concerts[5] = 'May 29';

// Working with array lengths
console.log(`2BU will be live in ${dates.length} concerts for their comeback World Tour!`);
// prints "2BU will be live in 55 concerts for their comeback World Tour!"
// Assumes Team Lead has already created 'dates' array

// Display last tour date
console.log(`Your last chance to see 2BU is ${dates[dates.length - 1]}!`);
// prints "Your last chance to see 2BU is December 22!"

// Alternative last tour date
console.log('Your last chance to see 2BU is ${dates.at(-1)}!');
// prints "Your last chance to see 2BU is December 22!"
