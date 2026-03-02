//true statements

if ("Hello") console.log("String is truthy"); //"Hello" = truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy");
if ([]) console.log("Empty array is truthy!");


// False Results
if ("") console.log("Empty string is false");//--> Falsy result
if (0) console.log("Zero is false");
if (null) console.log("Null is false");
if (undefined) console.log("Undefined is false");
if (NaN) console.log("NaN is false");   