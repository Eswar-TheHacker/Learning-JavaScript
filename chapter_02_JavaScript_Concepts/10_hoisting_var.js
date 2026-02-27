console.log(greeting);//output: undefined
var greeting = "Hello!";
console.log(greeting);


//---Behind the scenes---
//var greeting; -->Hoisted with Undefined
//console.log(greeting); -->Undefined
//greeting = "Hello!"; --> Assignment stays in place
//console.log(greeting); -->"Hello!"


