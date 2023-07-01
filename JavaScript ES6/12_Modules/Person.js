// By default this class is private so it is not visible
// class Person{
//     constructor(name){
//        this.name = name;
//     }

//     walk(){
//         console.log("Walking");
//     }
// }
// * for make it visible/public we use 'export'
// beacuse we used it in Teacher class
export class Person{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log("Walking");
    }
}