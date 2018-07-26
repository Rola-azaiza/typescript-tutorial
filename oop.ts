
class Animal {
  constructor(public name: string) { }
  move(meters: number) {
      console.log(this.name + " moved " + meters + "m.");
  }
}

class Snake extends Animal {
  move() {
    console.log("S: Slithering...");
    super.move(5);
  }
}

class Horse extends Animal {
  move() {
    console.log("H:Galloping...");
    super.move(45);
  }
}

const sam = new Snake("Sam the Python")
const tom: Animal = new Horse("Tommy the Palomino")

sam.move();
tom.move(34);
// ----
// Person1 === Person2
class Person1 {
  private firstName: string;
  private lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
class Person2 {
  constructor( private firstName: string, private lastName: string) {
  }
}

// interfaces
interface Human {
  firstName: string;
  lastName: string;
  age?: number;
}

class Person3 implements Human {
  firstName: string;
  lastName: string;
}
