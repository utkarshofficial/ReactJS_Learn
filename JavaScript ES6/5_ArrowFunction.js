// simple function
const square = function(number){
    return number * number;
}

// Arrow Function (single argument & direct return)(one liner funciton)
// Samse functionality like  above
const squareArrow = number => number * number;
console.log(squareArrow(10));

// Arrow Function (multiple argument)
const power = (n,p) => {
    num = n;
    for(let i=2;i<=p;i++){
        n*=num;
    }
    return n;
}
console.log(power(2,1));

// Arrow funciton are really useful in
// Array of jobs object
const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
]

// we need only active jobs
// this like compare funciton we pass in sort(,comp)
// * This is normal 
// const slistOfActiveJobs = jobs.filter(function(jobs){
//     return jobs.isActive==true;
// })
// * This with Arrow
const listOfActiveJobs = jobs.filter(jobs => jobs.isActive==true);
console.log(listOfActiveJobs);
