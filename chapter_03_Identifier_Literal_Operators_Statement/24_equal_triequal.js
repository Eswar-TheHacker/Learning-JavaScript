// ==, ===, =

//console.log(5 = 5); // Error: Invalid left-hand side in assignment

console.log(5 == "5");//true
console.log(5 === "5");// false --> number, string

console.log(null == undefined);//true
console.log(null === undefined);// false --> null, undefined

console.log(5 == 5.0);//true
console.log(5 === 5.0);//true
console.log(5 === 5.01);//false


/**
 * Here's what's happening on each line:

Line 5: console.log(5 == "5"); → true
== is the loose equality (or abstract equality) operator. It compares values after performing type coercion — meaning JS will try to convert both sides to the same type before comparing.

Behind the scenes:

JS sees a number (5) and a string ("5") — different types!
It converts the string "5" → number 5
Now it compares: 5 == 5 → true ✅
Line 6: console.log(5 === "5"); → false
=== is the strict equality operator. It compares both value AND type — no type coercion happens.

Behind the scenes:

JS sees a number (5) and a string ("5")
Types are different (number vs string) → immediately false ❌
It doesn't even bother checking the values!
Quick Summary
Operator	Name	Checks	Type Coercion?	5 __ "5"
==	Loose Equality	Value only	✅ Yes	true
===	Strict Equality	Value AND Type	❌ No	false
💡 Best Practice
Always use === (strict equality) in your code. == can produce unexpected results due to type coercion, for example:

0 == "" → true 😱
0 == false → true 😱
"" == false → true 😱
With ===, all three above are false — which is the behavior you'd expect!


 */