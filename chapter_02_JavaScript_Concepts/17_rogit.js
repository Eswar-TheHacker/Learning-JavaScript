let a = 10;
console.log(a);
if (true) {
    console.log(a);//TDZ -- Temporal Dead Zone  
    let a = 20;

}


/**
 * let a = 10;          // Line 1: Global 'a' is created with value 10
console.log(a);      // Line 2: Prints 10 ✅ (global 'a' is accessible here)
if (true) {          // Line 3: A new block scope starts
    console.log(a);  // Line 4: ❌ ReferenceError! 'a' is in the TDZ
    let a = 20;      // Line 5: A NEW local 'a' is declared for this block
}                    // Line 7: Block scope ends

What happens behind the scenes:
Line 1-2: let a = 10 is declared in the global scope. console.log(a) prints 10 — no problem here.

Line 3 — Entering the if block: Before executing any code inside, JS scans the block and finds let a = 20 on line 5. It registers a new local a for this block scope. This local a shadows (hides) the global a = 10 for the entire block.

Line 4 — console.log(a): JS looks for a. It finds the local a (not the global one, because the local one shadows it). But the local a hasn't been initialized yet (line 5 hasn't run). It's in the Temporal Dead Zone (TDZ) → 💥 ReferenceError!

Line 5 never executes because the program already crashed on line 4.

Key Takeaway
The moment JS sees let a = 20 inside the if block, the global a = 10 becomes invisible inside that entire block. But the local a isn't usable until its declaration line is actually reached. That gap between entering the block and the declaration is the TDZ.

If you removed let a = 20; from line 5, the console.log(a) on line 4 would happily print 10 from the global scope!
 */


