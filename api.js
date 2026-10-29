//Initial Array
const mockStudentDb = [
    {
        id: Date.now(),
        firstName: "Kurt",
        lastName: "Arellano",
        email: "kurt.arellano@example.com"
    },
    {
        id: Date.now() + 1,
        firstName: "Shino",
        lastName: "Miguso",
        email: "emma.baumgarten@example.com"
    }
];
//To print the array
export function getStudentsAPI() {
    return mockStudentDb;
}
/**
 * Adds a new student record to the mock database.
 */
export function addStudentsAPI(newStudentData) {
    const savedStudent = {
        id: Date.now(),
        ...newStudentData
    };

    mockStudentDb.push(savedStudent);

    return savedStudent;
}

//Test case 1
console.log("Initial DB State:", getStudentsAPI());

//Test case 2
const newStudent = {
    firstName: "Rai",
    lastName: "Suke",
    email: "Rai.Suke@example.com"
};

const savedStudent = addStudentsAPI(newStudent);

console.log("Returned Saved Object:", savedStudent);

//Test case 3
console.log("Updated DB State:", getStudentsAPI());
