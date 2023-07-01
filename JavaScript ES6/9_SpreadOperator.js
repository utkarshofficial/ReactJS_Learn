const first = [1,2,3];
const second = [4,5,6];
 
// we need to combine by concat()
const combined = first.concat(second)
console.log(combined);

// * using spread operator
const combinedS = [...first, ...second]

// * real use is when you want to insert elements in between or anywhere
const combinedSr = ["Start", ...first,"Middle", ...second, "End"]
console.log(combinedSr);

// * Spread for objects
const person = {
    name: "Ram",
    age: 19
};
const job = {
    job: "Instructor"
};
const employee = {
    ...person,
    ...job,
    company: "SNUT Institute"
};
console.log(employee);