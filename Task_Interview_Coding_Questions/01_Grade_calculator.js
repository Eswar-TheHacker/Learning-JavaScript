
// Score 90–100 → A
// Score 80–89  → B
// Score 70–79  → C
// Score 60–69  → D
// Score 0–59   → F
// Invalid      → Error message


let grade;

let score = "Eswar";

if (typeof score !== "number") {
    console.log("Are you fool, why you are giving score <0 or >100");
    return;
}

if (score < 0 || score > 100) {
    console.log("Are you fool,why you are giving score < 0 or > 100");

}

if (score >= 90) {
    grade = "A";
} else if (score >= 85) {
    grade = "B";
}
else if (score >= 80) {
    grade = "C";
}
else if (score >= 75) {
    grade = "D";
}
else if (score >= 70) {
    grade = "F";
}

console.log("For the score", score, "Grade is --> ", grade);

console.log(`For the score ${score} "Grade is --> ", ${grade}`);
