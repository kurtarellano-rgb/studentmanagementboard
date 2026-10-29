// let mockStudentDb = [
//     // {
//     //     id: Date.now() +1,
//     //     firstName: "kurt",
//     //     lastName: "arellano",
//     //     email: "kurt.arellano@gmail.com"
//     // },
//     // {
//     //     id: Date.now() +1,
//     //     firstName: "Miguso",
//     //     lastName: "Shino",
//     //     email: "sanmigs@gmail.com"
//     // }
// ];


let mockStudentDb = [];

export function getStudentsAPI() {
    return [...mockStudentDb];
}

export function addStudentAPI(newStudentData) {
    const student = {
        id: Date.now() + 1,
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

// const savedStudent = addStudentsAPI(newStudent);

// console.log("Returned Saved Object:", savedStudent);

// //Test case 3
// console.log("Updated DB State:", getStudentsAPI());