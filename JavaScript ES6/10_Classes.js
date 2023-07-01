const person = {
    name: "Utkarsh",
    walk(){
        console.log(walk);
    }
};

// if you want to use this for new person
// but in this we duplicates the code
// * because if there is any bug and something to change then you have to change all person objects
const person2 = {
    name: "Utkarsh",
    walk(){
        console.log(walk);
    }
};

// * for solve we use classes
// Blueprint / Template
class Person{
    // we setting the name attribute with constructor
    // similar to python __init__(self)
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log("Walking");
    }
}

// creating object with class
// if not add new than Person() this lookls like calling a function
const sneha = new Person("Sneha");
console.log(sneha.name);

