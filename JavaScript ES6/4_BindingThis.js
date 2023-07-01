const person = {
    name: "Ram",
    dob: 2003,
    currentYear: 2023,
    age: function(){
        console.log(this.name,"'s Age:",this.currentYear - this.dob)
    },
    sayName(){
        console.log("Name:",this.name);
    },
    sou(){
        console.log("Time");
    },
    getRef(){
        console.log(this);
    }
}

person.getRef();

// This will not return Person ref
// It return windwos object (if not in strict mode)
// If strict then return undefined
// const Ref = person.getRef;


// * For solve this problem we bind this with the function
const Ref = person.getRef.bind(person);
Ref();

