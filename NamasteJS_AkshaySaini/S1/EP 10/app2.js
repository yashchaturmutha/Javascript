function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a=100;
    return y; 

}

var z = x();
console.log(z);  // value of z is entire code of function y.
z(); // 100