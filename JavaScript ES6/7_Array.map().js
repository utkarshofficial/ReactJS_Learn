/*
* Definition
• creates a new array from calling a function for every array element.
• does not execute the function for empty elements.
• does not change the original array.

* Syntax
! array.map(function(currentValue, index, arr), thisValue)

*/

const colors = ['red','green','yellow','blue']

// without arrow
const items = colors.map(function(color){
    return `<li>${color}</li>`;
});

// * with arrow also used template literals ``
const itemsArrow = colors.map(color => `<li>${color}</li>`)

console.log(items);
console.log(itemsArrow);