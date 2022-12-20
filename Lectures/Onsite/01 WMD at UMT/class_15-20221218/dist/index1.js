// Class Coding
class Panaverse {
    sectionName;
    studentCount;
    city;
    constructor(sectionName, studentCount, city) {
        this.sectionName = sectionName;
        this.studentCount = studentCount;
        this.city = city;
    }
}
let p1 = new Panaverse('D', 500, 'Lahore');
let p2 = new Panaverse('A', 750, 'Karachi');
// University Class Example
class Person {
    _id;
    _name;
    _age;
    _gender;
    constructor(id, name, age, gender) {
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
    _id;
    _title;
    _duration;
    _description;
    _creditHour;
    constructor(id, title, duration, description, creditHour) {
        this._id = id;
        this._title = title;
        this._duration = duration;
        this._description = description;
        this._creditHour = creditHour;
    }
}
class Student extends Person {
    _studentID;
    _department;
    _section;
    _email;
    _coursesEnrolled;
    _password;
    _status = false;
    constructor(id, name, age, gender, studentID, department, section, email, coursesEnrolled) {
        super(id, name, age, gender);
        this._studentID = studentID;
        this._department = department;
        this._section = section;
        this._email = email;
        this._coursesEnrolled = coursesEnrolled;
    }
    setPassword(password) {
        this._password = password;
        console.log('Password set for student');
    }
}
class Faculty extends Person {
    _teacherID;
    _department;
    constructor(id, name, age, gender, teacherID, department) {
        super(id, name, age, gender);
        this._teacherID = teacherID;
        this._department = department;
    }
}
class LMS {
    _students = [];
    _instructors = [];
    _courses = [];
    signIn(id, password) {
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
let student1 = new Student(11, 'Hassan', 30, 'Male', 128, 'EE', 'D', 'j@j.com', [
    new Courses(101, 'WMD', 3, 'Web3.0 and Metaverse Development', 1),
    new Courses(102, 'AI', 6, 'Artifical Interlligence', 2),
]);
let student2 = new Student(12, 'Asif', 24, 'Male', 129, 'MBA', 'D', 'a@a.com', [
    new Courses(101, 'CNC', 3, 'Cloud native computing', 1),
]);
let teacher1 = new Faculty(28, 'Zia', 60, 'Male', 1001, 'IT');
let teacher2 = new Faculty(29, 'Hira', 30, 'Female', 1002, 'IT');
console.log(student1);
console.log(student2);
console.log(teacher1);
console.log(teacher2);
export {};
