// Arrow Function
// ! They don't rebind this
// Example
const person = {
    talk(){
        // this will return person object
        console.log("This",this);
    },
    talk2(){
        // it take callback() and timeout time
        setTimeout(function(){
            // this will return windows object why because callback fun() is not part of any object
            // it's a standalone funciton
            console.log(this);
        },1000);
    },
    // * solution of the problem (old days)
    talkOldDaysSol(){
        var self = this;
        setTimeout(function(){
            // this will return windows object why because callback fun() is not part of any object
            // it's a standalone funciton
            console.log(self);
        },1000);
    },
    // * Solution by Arrow Function
    talkArrow(){
        setTimeout(() =>{
            // by arrow fun() 'this' is not reset instead it inherits this keyword
            console.log(this);
        },1000);
    }
}
person.talk2();
person.talkOldDaysSol();
person.talkArrow();