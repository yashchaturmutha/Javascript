

getname();//Namaste JS

console.log(x);//undefined (Hoisting)

console.log("getname \n"+getname);
console.log("getname2 \n"+getname2);
console.log("getname3 \n"+getname3);

// getname2();//getname2 behaves like variable as it is arrow func
// getname3();//getname3 also behaves like variable

var x = 7;

//func code copied in memory phase
function getname() 
{
    console.log("Namaste JS");
}

//undefined in memory phase
var getname2=()=>{

}

//undefined in memory phase
var getname3=function(){

}

console.log("getname \n"+getname);
console.log("getname2 \n"+getname2);
console.log("getname3 \n"+getname3);
console.log(x);//7
