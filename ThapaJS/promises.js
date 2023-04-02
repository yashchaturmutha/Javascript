global.fetch = require("node-fetch");
console.log("This is tutorial 43");

// async function harry(){
//     console.log('Inside harry function');
//     const response = await fetch('https://api.github.com/users');
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved')
//     return users;

//     // return "harry";
// }

// console.log("Before calling harry")
// let a = harry();
// console.log("After calling harry")
// console.log(a);
// // a.then(data => console.log(data))
// console.log("Last line of this js file")

// fetch('https://icanhazdadjoke.com',
// {
//   headers: {Accept:'application/json'}
// })
// .then((res)=>res.json())

// .then((data)=>{
// console.log(data.joke);
// })
// .catch((err)=>{
//   console.log(err);
// });

const generatejokes=async()=>{

    try{
        const res=await  fetch('https://icanhazdadjoke.com',
        {
          headers: {Accept:'application/json'}
        });
       const data=await res.json();
        
        console.log(data.joke);
       
    }
    catch(err){
      console.log(err);
    }
}

generatejokes();