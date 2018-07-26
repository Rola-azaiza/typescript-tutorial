// OOP Old Way
function OldPerson(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
//Each object has a private property which holds a link to another object called its prototype.
// Nearly all objects in JavaScript are instances of Object;
// a typical object inherits properties (including methods) from Object.prototype.
OldPerson.prototype.sayHi = function () {
  return 'Hi'
};

const oldPerson = new OldPerson('fadi', 'quader');
const hi = oldPerson.sayHi();
console.log('oldPerson.firstName: ', oldPerson.firstName);
console.log('hi ', hi);
//--------------------
// using decorator
function Course(target) {
  Object.defineProperty(target.prototype, 'getCourse', { value: () => 'angular 6'})
}

@Course
class Person {
  firstName: string;
  lastName: string;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person('ng', 'angular');
const courseName = person.getCourse();
console.log('courseName: ', courseName);

// with config
function Course1(config) {
  return function (target) {
    Object.defineProperty(target.prototype, 'getCourse', { value: () => config.course})
  }
}
// using decorator with configurations
@Course1({
  course: 'ng6'
})
class Person1 {
  firstName: string;
  lastName: string;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person1('ng', 'angular');
const getCourse1 = person1.getCourse();
console.log('getCourse1: ', getCourse1);
