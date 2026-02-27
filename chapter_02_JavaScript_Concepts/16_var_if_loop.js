var a = "Eswar";

if (true) {
    console.log(a);
    var a = "temp";
    console.log(a);

}

/** Code Breakdown
----------------

var a = "Eswar";         // Line 1: Declare and assign 'a'

if (true) {              // Line 3: Enter a block
    console.log(a);      // Line 4: Prints "Eswar"
    var a = "temp";      // Line 5: Re-assigns 'a' to "temp"
    console.log(a);      // Line 6: Prints "temp"
}



 * Why does this work perfectly (unlike the let example)?
The key difference is that var is function-scoped, NOT block-scoped.

Here's what happens behind the scenes:

Hoisting Phase: JS scans for all var declarations. It finds var a twice (line 1 and line 5). Since var allows re-declaration, it simply hoists one var a to the top of the global scope (because there's no function here). It becomes var a = undefined;.

Execution Phase:

a = "Eswar" → a is now "Eswar"
Enters the if block
console.log(a) → Prints "Eswar" ✅ (the variable is already initialized)
a = "temp" → a is now "temp" (same global a, just reassigned)
console.log(a) → Prints "temp" ✅
Key Difference: var vs let in blocks
Behavior	var	let
Scope	Function-scoped (ignores if/for blocks)	Block-scoped (respects {})
Hoisting	Hoisted and initialized to undefined	Hoisted but NOT initialized (TDZ)
Re-declaration in same scope	✅ Allowed	❌ Error
Inside if block	Same variable as outside	Creates a new separate variable
So in your previous let example, the let a inside the if block created a brand new local variable that shadowed the outer one and caused a TDZ error. But here with var, the var a inside the if block is the exact same variable as the outer var a — there's no new scope, no shadowing, and no TDZ. It just reassigns the value from "Eswar" to "temp".


 */