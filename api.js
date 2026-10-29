
let counter = 0;

let mockStudentDb = [
    // {
    //     id: Date.now() + counter++,
    //     firstName: "kurt",
    //     lastName: "arellano",
    //     email: "kurt.arellano@gmail.com"
    // },
    // {
    //     id: Date.now() + counter++,
    //     firstName: "Miguso",
    //     lastName: "Shino",
    //     email: "sanmigs@gmail.com"
    // }
];

// let mockStudentDb = [];

export function getStudentsAPI() {
    return [...mockStudentDb];
}

export function addStudentAPI(newStudentData) {
    const student = {
        id: Date.now() + counter++,
        ...newStudentData
    };

    mockStudentDb.push(student);

    return student;
}

// //Test case 1
// console.log("Initial DB State:", getStudentsAPI());

// //Test case 2
// const newStudent = {
//     firstName: "Rai",
//     lastName: "Suke",
//     email: "Rai.Suke@example.com"
// };

// const savedStudent = addStudentAPI(newStudent);

// console.log("Returned Saved Object:", savedStudent);

// //Test case 2
// const newStudent2 = {
//     firstName: "Rai1",
//     lastName: "Suke2",
//     email: "Rai.Suke2@example.com"
// };

// const savedStudent2 = addStudentAPI(newStudent2);
// console.log("Returned Saved Object:", savedStudent2);



// //Test case 3
// console.log("Updated DB State:", getStudentsAPI());

