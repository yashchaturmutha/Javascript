var a=100;//Global
let b=200;//Script
const c=300;//Script

//Block
{
    var a=10; //shadows var a=100 in global and block
    let b=20; //shadows let b=200 in block
    const c=30;//shadows let c=300 in block

    console.log(a);
    console.log(b);
    console.log(c);
}
// OR
// function x()
// {
    // var a=10; //shadows var a=100 in global and block
    // let b=20; //shadows let b=200 in block
//     const c=30;//shadows let c=300 in block

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// x()
//Block scope deleted after its execution is done

//accesed from global scope
console.log(a); //10 -> outside and inside block point to same mem. location
console.log(b);//200
console.log(c);//300