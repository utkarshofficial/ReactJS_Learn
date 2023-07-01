const person = {
    name: "Ram",
    dob: 2003,
    currentYear: 2023,
    age: function(){
        console.log(this.name,"'s Age:",this.currentYear - this.dob)
    },
    sayName(){
        console.log("Name:",this.name);
    }
}

person.age();
person.sayDob = ()=>{
    console.log("DOB:",person.dob);
}
person.sayDob();
person.name = "Time"
person.kim = "Tim"
console.log(person['time']);
person.sayName();