const fs = require("fs");
const {Student} = require("./Student")
const StudentData = require("./Student.json")

const getFinalResult = (filename) => {
    try {
        // parse the file and then apply your appropriate logic to get the desired output
        // Print student details, total score and message as specified in the problem statement
        // add the id's of students who got failed into an array and return the length of that array.
        //  ( Note: It is mandatory to return the above output for the test cases to run correctly. )


        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) throw err;
            // console.log(data.replace(/\s/g, "").split(""))

            // console.log(StudentData)
         
            const studentIds = data && data.replace(/\s/g, "").split("").map(id => parseInt(id))
            // console.log(studentIds)
            const student_data = StudentData.filter(stdObj => studentIds.includes(stdObj['studentId']))
            console.log("filter value")
            console.log(student_data)


            if(student_data && student_data.length){
                for (student of student_data){
                    const {studentId, studentName, ...studentObj} = student
                    const stud = new Student(studentId, studentName, studentObj)
                    //console.log(stud.getStudentDetails())
                    stud.getStudentDetails()
                }
            }
           


        });

    } catch (error) {
        console.error(error);
    }
}

const filename = process.argv[2];

getFinalResult(filename);

module.exports = { getFinalResult }