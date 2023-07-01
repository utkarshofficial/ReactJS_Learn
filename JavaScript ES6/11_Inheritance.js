class Person{
    constructor(name){
       this.name = name;
    }

    walk(){
        console.log("Walking");
    }
}

class Teacher extends Person{
    teach(){
        console.log("Teaching");
    }
    // teacher also walk we don't want to duplicate
    // * We can solve it with inheritance or composition
    // but we inherit the person class
    // walk(){
    //     console.log("Walking");
    // }
}

const sneha = new Teacher("Sneha");
// sneha.teach();
// sneha.walk();

// --------------------------------------------
// ! Now in teacher class we need to add degree
// * calling constructor in inheritance
// when we create object of child class we must have to call constructor of it's parent class using 'super()'
class TeacherDeg extends Person{
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("Teaching");
    }
}

const utkarsh = new TeacherDeg("Utkarsh","B.Tech");
console.log(utkarsh.degree)


// * Conclusion
// In ReactJS, Whenever we create a component we should have that component extends the base component that is define in react

