class Student {
    constructor(studentID, studentName, studentObj) {
        this.studentID = studentID;
        this.studentName = studentName;
        this.studentObj = studentObj
    }


    // Method
    getStudentDetails() {
        const studentPercentage = this.calculateTotalScore();
        console.log(`Student ID: ${this.studentID} | Student Name: ${this.studentName}`)
        console.log(`${studentPercentage}%`)
        const studentGrade = this.calculateStudentGrade(studentPercentage);
        // console.log(studentGrade)
        console.log(`Student with student id ${this.studentID} got ${studentGrade}`)
    }


    calculateTotalScore() {
        // here is calucating total score and then pass to calculate student grade system
        // console.log("Here calucating total score")
        const totalMarks = this.studentObj['correctAnswers'] * 3 // for every correct answer 120 / 150
        const totalScorePercentage = Math.round(totalMarks * 100 / this.studentObj['totalScore'])
        console.log("totalScore ", totalScorePercentage)
        return totalScorePercentage

    }

    calculateStudentGrade(percentage) {
        //calculate the grading system on the basis of percentage.
        let grade
        switch (true) {
            case 90 <= percentage:
                // code block
                grade =  "A"
                break;
            case (89 <= percentage || percentage >= 81):
                // code block
                grade =  "B"
                break;
            case (80 <= percentage || percentage >= 71):
                // code block

                grade =  "C"
                break;
            case (70 <= percentage || percentage >= 61):
                // code block
                grade =  "D"
                break;
            case (60 <= percentage || percentage >= 51):
                // code block
                grade =  "E"
                break;
            case (50 <= percentage):
                grade =  "F"
                break;
            // code block

            default:
                grade = 'Fail'
                break;
            // code block
        }

        return grade
    }


}

module.exports = {
    Student: Student
}