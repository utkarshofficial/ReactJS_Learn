// * in 11 lecture you can see there is multiple classes in one file it looks messi so saving multiple class in one file -> we create different files for different classes called modularity
// Called Modules 


// * Default -> import ... from '';
import Teacher from "./Teacher";

// * Named   -> import { ... } from '';
import { promote } from "./Teacher";

// * Default + Named
import Teacher, { promote } from "./Teacher";

// * Third Party library directly imported without ./
// import React, { Component } from "react";

const surjeet = new Teacher("Surjeet","Masters");
surjeet.teach();