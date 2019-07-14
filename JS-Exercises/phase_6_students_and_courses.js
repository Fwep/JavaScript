class Student {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.courses = [];
  }

  name() {
    return `${this.fname} ${this.lname}`;
  }

  courseLoad() {
    return this.courses;
  }

  enroll(course) {
    if (this.hasConflict(course)) throw "Course conflicts with current course load";

    if (!course.students.includes(this)) {
      this.courses.push(course);
      course.addStudent(this);
    }
  }

  courseLoad() {
    let map = {};

    this.courses.forEach(course => {
      map[course] = course.numCredits;
    });
    
    return map;
  }

  hasConflict(newCourse) {
    return this.courses.some(course => course.conflictsWith(newCourse));
  }
}

class Course {
  constructor(name, dept, numCredits, days, timeBlock) {
    this.name = name;
    this.dept = dept;
    this.numCredits = numCredits;
    this.days = days;
    this.timeBlock = timeBlock;
    this.students = [];
  }

  addStudent(student) {
   this.students.push(student);
  }

  conflictsWith(course) {
    return (this.days === course.days && this.timeBlock === course.timeBlock); 
  }
}