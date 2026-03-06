const students = [
 {id:1, name:"An", score:8},
 {id:2, name:"Binh", score:6},
 {id:3, name:"Chi", score:9},
 {id:4, name:"Dung", score:5}
];

function getExcellentStudents(students) {
    return students
        .filter(student => student.score >= 8)
        .sort((a, b) => b.score - a.score)
        .map(student => ({
            name : student.name,
            score : student.score
        }));
}

const result = getExcellentStudents(students);
console.log(result);