const fs = require('fs');
const main = require('../main')
const expect = require('chai').expect;
const sinon = require('sinon');

describe(`Test cases for Student details Problem`, () => {

    const consoleSpy = sinon.spy(console, 'log');

    it('should give the correct output for input1.txt', () => {
        const filename = 'sample_input/input1.txt';
        const finalResult = main.getFinalResult(filename);
        expect(consoleSpy.calledWith("Student ID: 3 | Student Name: Priya")).to.be.true;
        expect(consoleSpy.calledWith("19%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 3 got F")).to.be.true;
        expect(consoleSpy.calledWith("Student ID: 6 | Student Name: Ramu")).to.be.true;
        expect(consoleSpy.calledWith("61%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 6 got D")).to.be.true;
        expect(consoleSpy.calledWith("Student ID: 10 | Student Name: Sony")).to.be.true;
        expect(consoleSpy.calledWith("43%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 10 got F")).to.be.true;
        expect(finalResult).to.equal(2);
    })

    it('should give the correct output for input2.txt', () => {
        const filename = 'sample_input/input2.txt';
        const finalResult = main.getFinalResult(filename);
        expect(consoleSpy.calledWith("Student ID: 2 | Student Name: Surya")).to.be.true;
        expect(consoleSpy.calledWith("52%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 2 got E")).to.be.true;
        expect(consoleSpy.calledWith("Student ID: 4 | Student Name: Indhu")).to.be.true;
        expect(consoleSpy.calledWith("85%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 4 got B")).to.be.true;
        expect(consoleSpy.calledWith("Student ID: 10 | Student Name: Sony")).to.be.true;
        expect(consoleSpy.calledWith("43%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 10 got F")).to.be.true;
        expect(finalResult).to.equal(1);
    })

    it('should give the correct output for input3.txt', () => {
        const filename = 'sample_input/input3.txt';
        const finalResult = main.getFinalResult(filename);
        expect(consoleSpy.calledWith("Student ID: 1 | Student Name: Alex")).to.be.true;
        expect(consoleSpy.calledWith("70%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 1 got D")).to.be.true;
        expect(consoleSpy.calledWith("Student ID: 7 | Student Name: Siva")).to.be.true;
        expect(consoleSpy.calledWith("49%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 7 got F")).to.be.true;
        expect(consoleSpy.calledWith("Student ID: 8 | Student Name: Vibhav")).to.be.true;
        expect(consoleSpy.calledWith("58%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 8 got E")).to.be.true;
        expect(finalResult).to.equal(1);
    })

    it('should give the correct output for input4.txt', () => {
        const filename = 'sample_input/input4.txt';
        const finalResult = main.getFinalResult(filename);
        expect(consoleSpy.calledWith("Student ID: 5 | Student Name: Madhu")).to.be.true;
        expect(consoleSpy.calledWith("91%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 5 got A")).to.be.true;
        expect(consoleSpy.calledWith("Student ID: 3 | Student Name: Priya")).to.be.true;
        expect(consoleSpy.calledWith("19%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 3 got F")).to.be.true;
        expect(consoleSpy.calledWith("Student ID: 9 | Student Name: Suman")).to.be.true;
        expect(consoleSpy.calledWith("76%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 9 got C")).to.be.true;
        expect(finalResult).to.equal(1);
    })

    it('should give the correct output for input5.txt', () => {
        const filename = 'sample_input/input5.txt';
        const finalResult = main.getFinalResult(filename);
        expect(consoleSpy.calledWith("Student ID: 9 | Student Name: Suman")).to.be.true;
        expect(consoleSpy.calledWith("76%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 9 got C")).to.be.true;
        expect(consoleSpy.calledWith("Student ID: 4 | Student Name: Indhu")).to.be.true;
        expect(consoleSpy.calledWith("85%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 4 got B")).to.be.true;
        expect(consoleSpy.calledWith("Student ID: 2 | Student Name: Surya")).to.be.true;
        expect(consoleSpy.calledWith("52%")).to.be.true;
        expect(consoleSpy.calledWith("Student with student id 2 got E")).to.be.true;
        expect(finalResult).to.equal(0);
    })
    
})