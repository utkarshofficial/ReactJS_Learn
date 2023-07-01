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
    getRef(){
        console.log(this);
    }
}

person.getRef();

// This will not return Person ref
// It return windwos object (if not in strict mode)
// If strict then return undefined
const Ref = person.getRef;
Ref();

