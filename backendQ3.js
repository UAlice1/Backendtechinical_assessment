
function findTopScorers(students, threshold) {
    return students.filter(student => student.score > threshold).map(student => student.name);
}


function sortStudentsByScore(students) {
    return [...students].sort((a, b) => b.score - a.score);
}


function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let num of arr) {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
        }
    }
    return uniqueArr;
}


function getMedianScore(scores) {
    scores.sort((a, b) => a - b);
    let mid = Math.floor(scores.length / 2);
    return scores.length % 2 === 0 ? (scores[mid - 1] + scores[mid]) / 2 : scores[mid];
}


const students = [
    { name: "Alice", score: 85 },
    { name: "Ange", score: 92 },
    { name: "Celine", score: 78 },
    { name: "Bonte", score: 95 },
];

console.log(findTopScorers(students, 80)); 
console.log(sortStudentsByScore(students)); 
console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5, 6])); 
console.log(getMedianScore([85, 92, 78, 95])); 

// discus how sorting algorith affect performance and the time complexibility of different dorting algo
//sorting is way converting something into another one 
// sorting is the best way of changing the program 
// sorting is the way  you can found the solution in easy way 
//Sorting help us to do every thing we need in easyway and clearyway 
//sorting affect algorithm performance because this was really good and understandable 
//
