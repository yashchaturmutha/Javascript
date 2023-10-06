  interface Speech {
    sayHi(name: string): string; //common JavaScript function 
    sayBye: (name: string) => string; //Arrow function
  }
  
  let sayStuff: Speech = {
    sayHi: function (name: string) {
      return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`,
  };

  console.log(sayStuff.sayHi('Heisenberg 1')); // Hi Heisenberg
  console.log(sayStuff.sayBye('Heisenberg 2')); // Bye Heisenberg
  
  // *****************************************************************************************************

  function circle(radius:number):number{
    return radius*2;
  }

  const circleArrow=(radius:number):number=>{
    return radius*2;
  }

  console.log(circle(2));
  console.log(circleArrow(2));

  // *****************************************************************************************************

  // Using explicit typing 
  const explicitCircle: Function = (diam: number): string => {
    return 'The explicit circumference is ' + Math.PI * diam;
  };

  // Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
  const inferredCircle = (diam: number) => {
    return 'The Inferred circumference is ' + Math.PI * diam;
  };

  console.log(explicitCircle(2));
  console.log(inferredCircle(2));

  // *****************************************************************************************************

  const add = (a: number, b: number, c?: number | string) => {
    console.log(c);

    return a + b;
  };

  console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));

  // *****************************************************************************************************
  
  // Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
  let sayHello: (name: string) => void;

  // Define the function, satisfying its signature
  sayHello = (name) => {
    console.log('Hello ' + name);
  };

  sayHello('Danny'); // Hello Danny

// *****************************************************************************************************

class Person {
  name: string;
  isCool: boolean;
  pets: number;

  constructor(n: string, c: boolean, p: number) {
    this.name = n;
    this.isCool = c;
    this.pets = p;
  }

  sayHello() {
    return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
  }
}

const person1 = new Person('Danny', false, 1);
// const person2 = new Person('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.

console.log(person1.sayHello()); // Hi, my name is Danny and I have 1 pets