let task=document.getElementById("inputfield");
let buttons=document.getElementById("btn");
let newdiv=document.getElementById("todocontainer");

buttons.addEventListener("click",function()
{
var para=document.createElement("p");
para.innerText=task.value;
para.classList.add("paragraph-styling");
newdiv.appendChild(para);
task.value="";

para.addEventListener("click", function(){
    para.style.textDecoration = "line-through";
});
para.addEventListener("dblclick", function(){
    newdiv.removeChild(para);
});

});