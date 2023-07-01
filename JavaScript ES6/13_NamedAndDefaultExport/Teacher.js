import { Person } from "./Person";

// it's also private so we used export
export function promote(){
    //...
}

export class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("Teaching");
    }
}