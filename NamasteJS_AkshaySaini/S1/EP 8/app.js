// console.log(a);//Hoisting of let variable
//Referece Error as let var cant be accesses b4 initialization
//** TDZ **
console.log("Hello");

let a =10;//Temporal Dead Zone Ends
console.log(a);//let variable can be Accessed

//Uncaught SyntaxError: Identifier 'a' has already been declared
// Not a single line from code will be executed
//Syntax error
// let a=100;

var b=100;

const x=100;

//Uncaught SyntaxError: Missing initializer in const declaration
const c;
c=100;
