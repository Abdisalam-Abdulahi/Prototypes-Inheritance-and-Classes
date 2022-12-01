// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.

const Person = class {
  name;
  age;
  hobby;
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
  speak() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old. I love ${this.hobby}`
    );
  }
};
const result = new Person("cali", 21, "playing Football");
result.speak();
// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

// Extend Person class and create one class for each member of your family.
class memberOfTheFamily1 extends Person {
  constructor(name, age, hobby) {
    super();
    this.name = "axmed";
    this.age = 25;
    this.hobby = "swimming";
  }
  speak() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old. I love ${this.hobby}`
    );
  }
}
const result2 = new memberOfTheFamily1();
result2.speak();

class memberOfTheFamily2 extends Person {
  constructor(name, age, hobby) {
    super();
    this.name = "naciimo";
    this.age = 21;
    this.hobby = "cleaning";
  }
  speak() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old. I love ${this.hobby}`
    );
  }
}
const result3 = new memberOfTheFamily2();
result3.speak();
class memberOfTheFamily3 extends Person {
  constructor(name, age, hobby) {
    super();
    this.name = "Abdisamad";
    this.age = 16;
    this.hobby = "watching movies";
  }
  speak() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old. I love ${this.hobby}`
    );
  }
}
const result4 = new memberOfTheFamily3();
result4.speak();
