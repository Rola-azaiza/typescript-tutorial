//string
let fullName: string = 'Nate Murray';
// number
let age: number = 36;
// boolean
let married: boolean = true;
// array
let jobs: Array<string> = ['IBM', 'Microsoft', 'Google']; // or let jobs: string[] = [...]
let func: Function; // function type
// any: is the default type if we omit typing for a given variable
let something: any = 'as string';

let num = 5;
// num = 'hi'

/*
enums

Enums work by naming numeric values. For instance,
 if we wanted to have a fixed list of roles a person may have we could write this:

enum Role {Employee, Manager, Admin};

The default initial value for an enum is 0, though you can set the starting enum number like this:
instead of Employee being 0, Employee is 3.
enum Role {Employee = 3, Manager, Admin};

we can even set individual values:
 enum Role {Employee = 3, Manager = 5, Admin = 7};
*/
enum Role {Employee, Manager, Admin};
let role: Role = Role.Employee;
console.log('role: ', role);

// Template string
let dummy: string = 'dummy text';
let dummyContent = `content: ${dummy}`;

// object
const obj = { first: 1, second: 'hi' };
const { first: f, second: b } = obj;
console.log('f: ', f, ', b: ', b);

const { first, second } = obj;
console.log('first: ', first, ', second: ', second);

const obj3  = {
  ...obj,
  name: 'wamd',
};
console.log('obj3 ', obj3);
//

// array
const arr = [1, 'a', 'c', 'e'];
const [x, y, ...rest] = arr;
console.log('x: ', x, ', y: ', y, 'rest: ', rest);
//

// arrow function
const sum = (a: number, b: number) => a + b;
const sum1 = (a: number, b: number) => {
  return a + b;
};
// equal to =>
const sum2 = function (a: number, b: number) {
  return a + b;
};

const objFunc = () => ({ a: 1, b: 2 });
// equal to =>
const objFunc1 = function() {
  return { a: 1, b: 2 }
};
//
const sepFunc = (...params: any[]) => {
  console.log('params: ', params);
  console.log('params[0]: ', params[0])
};

sepFunc(1, 3, 5, 54);

// functions and return type;
const sqr: Function = (a: number): number => {
  return a * a;
};
const log: Function = (msg: string): void => {
  console.log('Log: ', msg)
}
