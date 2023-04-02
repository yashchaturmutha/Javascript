function x() {
    var a = 7;
    function y() {
        console.log(a);
    }

    // y func + alongwith its lexical scope is returned
    // y func + reference to vars of x persist
    // y remembers reference to memory locn of a
    // y func + alongwith its lexical scope is returned
    return y; 
}

// OR
// function x() {
//     var a = 7;

//     // y func + alongwith its lexical scope is returned
//     return function y() {
//         console.log(a);
//     }
     
// }

var z = x();
console.log(z);  // value of z is entire code of function y.

//Tries to find reference to a
z(); // 7