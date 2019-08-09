'use strict';

export class GradeSchool {
  constructor(){
    this.students = [];
  }

  roster() {
    const studentRoster = {};
    this.students.forEach(student => {
      if(!studentRoster[student.grade]){
        studentRoster[student.grade] = [];
      }
      studentRoster[student.grade].push(student.name);
    });
    const grades = Object.keys(studentRoster);
    grades.forEach(grade => {
      studentRoster[grade].sort();
    })
    return studentRoster;
  }

  add(name, grade) {
    this.students.push({name, grade});
  }

  grade(number) {
    const studentsInGrade = this.students
      .filter(student => student.grade === number)
      .map(student => student.name)
      .sort();
    return studentsInGrade;
  }
}
