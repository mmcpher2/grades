
// Array of test scores
let scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]

// Object of grade arrays
let grades = {
    "A": 0,
    "B": 0,
    "C": 0,
    "D": 0,
    "F": 0
}

// Looping through test scores

for (let i = 0; i < scores.length; i++) {
    let scoresCounter = scores[i];
        if (scoresCounter >= 90) {
            grades.A ++ 
        }
        else if (scoresCounter >= 80) {
            grades.B ++
        }
        else if (scoresCounter >= 70) {
            grades.C ++
        }
        else if (scoresCounter >= 65) {
            grades.D ++
        }
        else if (scoresCounter < 65) {
            grades.F ++    
        }
    }
console.log(grades)