let a = "Eswar";

if (true) {

    console.log(a);// Local Variable, TDZ--> Temporal Dead Zone
    let a = "temp";
}

/** 
 *  This is a great example to understand how let scoping and the Temporal Dead Zone (TDZ) work in JavaScript.

 Let's break down what happens when this code runs:

The Code Breakdown
--------------------

let a = "Eswar";       // Line 1: Global variable 'a' is declared and initialized

if (true) {          // Line 3: A new block scope begins
    console.log(a);  // Line 5: Tries to print 'a'. Throws a ReferenceError!
    let a = "temp";  // Line 6: Local variable 'a' is declared and initialized
}

What happens here? (The Output)
If you run this code, it will crash with an error: ReferenceError: Cannot access 'a' before initialization

Why does it error instead of printing "Eswar"?
You might expect console.log(a) to print "Eswar" from outer scope before being redefined as "temp". However, because of Hoisting and the Temporal Dead Zone (TDZ) with let variables, this doesn't happen.

Here is exactly what the JavaScript Engine does behind the scenes:

Global Execution Phase: First, JS sees let a = "Eswar" in the global scope. It sets up that variable.
Block Scope Phase (entering the if block):
Before executing any code inside the if block, JS scans the block for variable declarations.
It finds let a = "temp"; inside the block.
It "hoists" (registers) this local a to the very top of the block scope.
Crucial step: Because it is declared with let (or const), JS makes this new local a take over the name a for the entire if block. It blocks access to the global a = "Eswar".
The Temporal Dead Zone (TDZ): From the start of the if block until the exact line where let a = "temp"; is evaluated, the local variable a is in a state called the Temporal Dead Zone. Any attempt to read or write to a inside this zone will throw a ReferenceError.
Execution hits console.log(a):
JS tries to find a.
It knows a exists in this block (because it scanned it earlier), but a has not been officially initialized on line 6 yet.
Because it is currently paused in the TDZ, it throws the ReferenceError.
Summary
Variables declared with let (and const) are hoisted to the top of their block scopes.
However, unlike var (which is initialized to undefined), let and const remain uninitialized.
The time between entering the block and the actual line of declaration is the Temporal Dead Zone. You cannot touch the variable while it is in the TDZ.
 **/