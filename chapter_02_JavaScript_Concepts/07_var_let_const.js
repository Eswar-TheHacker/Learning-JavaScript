// var, let, const

// var - Function Scoped

// var a = 10; // Global Scope
// console.log(a);

// // Defination of the function
// function printHello(){
//         console.log("Hello TheTestingAcademy!");
//         var a = 20; // Local Scope
//         console.log(a);
//         if(true){
//             var a = 30;
//             console.log(a); // 30
//         }
//         console.log("F ->",a);
// }


// // Calling of the function 
// printHello();


// // var also allows re-declaration:
// var a = 10;
// var a = 20; // No error, re-declaration is allowed
// console.log(a); // 20
//let - Block Scope

let b = 20;//Global Scope
console.log(b);

//Definition of the function

function printHello() {
    console.log("Hello TheHackerAcademy");
    let b = 30;//Local Scope
    console.log(b);
    if (true) {
        let b = 5;
        console.log(b);//5
    }
    console.log("let ->", b);
}
//calling of the function
printHello();


// let does NOT allow re-declaration in the same scope
// let b = 40; //Error: Identifier 'b' has already been declared
// let a = 10;

let a = 10;
a = 20;
console.log(a);//20

//var nn = "eswar";
//let nn = "eswar";// Error: Identifier nn has already been declared

const pi = 3.14;
console.log(pi);
pi = 3.14; //Error: Assignment to constant variable.

