// Class Coding

class Panaverse {
  sectionName: string;
  studentCount: number;
  city: string;
  constructor(sectionName: string, studentCount: number, city: string) {
    this.sectionName = sectionName;
    this.studentCount = studentCount;
    this.city = city;
  }
}

let p1 = new Panaverse('D', 500, 'Lahore');
let p2 = new Panaverse('A', 750, 'Karachi');

// University Class Example

class Person {
  _id: number;
  _name: string;
  _age: number;
  _gender: string;
  constructor(id: number, name: string, age: number, gender: string) {
    this._id = id;
    this._name = name;
    this._age = age;
    this._gender = gender;
  }
  move() {
    console.log(`${this._name} can move.`);
  }
  announceBirthday() {
    console.log(`Todady is ${this._name}'s bithday.`);
  }
}

class Courses {
  _id: number;
  _title: string;
  _duration: number;
  _description: string;
  _creditHour: number;
  constructor(
    id: number,
    title: string,
    duration: number,
    description: string,
    creditHour: number
  ) {
    this._id = id;
    this._title = title;
    this._duration = duration;
    this._description = description;
    this._creditHour = creditHour;
  }
}

class Student extends Person {
  _studentID?: number;
  _department: string;
  _section: string;
  _email: string;
  _coursesEnrolled: Courses[];
  _password!: string;
  _status: boolean = false;
  constructor(
    id: number,
    name: string,
    age: number,
    gender: string,
    studentID: number,
    department: string,
    section: string,
    email: string,
    coursesEnrolled: Courses[]
  ) {
    super(id, name, age, gender);
    this._studentID = studentID;
    this._department = department;
    this._section = section;
    this._email = email;
    this._coursesEnrolled = coursesEnrolled;
  }
  setPassword(password: string) {
    this._password = password;
    console.log('Password set for student');
  }
}

class Faculty extends Person {
  _teacherID: number;
  _department: string;
  constructor(
    id: number,
    name: string,
    age: number,
    gender: string,
    teacherID: number,
    department: string
  ) {
    super(id, name, age, gender);
    this._teacherID = teacherID;
    this._department = department;
  }
}

class LMS {
  _students: Student[] = [];
  _instructors: Faculty[] = [];
  _courses: Courses[] = [];
  signIn(id: number, password: string) {
    const student = this._students.find((student) => {
      student._id === id;
    });
    if (student) {
      if (student._password === password) {
        student._status = true;
      }
    }
  }
}

let student1 = new Student(
  11,
  'Hassan',
  30,
  'Male',
  128,
  'EE',
  'D',
  'j@j.com',
  [
    new Courses(101, 'WMD', 3, 'Web3.0 and Metaverse Development', 1),
    new Courses(102, 'AI', 6, 'Artifical Interlligence', 2),
  ]
);
let student2 = new Student(12, 'Asif', 24, 'Male', 129, 'MBA', 'D', 'a@a.com', [
  new Courses(101, 'CNC', 3, 'Cloud native computing', 1),
]);

let teacher1 = new Faculty(28, 'Zia', 60, 'Male', 1001, 'IT');
let teacher2 = new Faculty(29, 'Hira', 30, 'Female', 1002, 'IT');

console.log(student1);
console.log(student2);
console.log(teacher1);
console.log(teacher2);
