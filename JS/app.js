// alert("hello");
showNotes();
let addbtn = document.getElementById("addBtn");
let clearbtn=document.getElementById("clearBtn");

clearbtn.addEventListener("click",function()
{
    localStorage.clear();
    let yournotes = document.getElementById("yournotes");
    yournotes.innerHTML = "";
    yournotes.style.borderStyle = "none";

});

addbtn.addEventListener("click", function () {
    let txtvalue = document.getElementById("addTxt");
    let titlevalue = document.getElementById("addTitle");

    if (txtvalue.value.length != 0 && titlevalue.value.length!=0) 
    {
        let notes = localStorage.getItem("key-value");
        
        // notes is string

        if (notes == null) {
            notesobj = [];
        } 
        else 
        {
            notesobj = JSON.parse(notes);
        }

        let newobj = {
            Title: titlevalue.value,
            Note: txtvalue.value
        }

        notesobj.push(newobj);

        // notesobj.push(txtvalue.value);

        localStorage.setItem("key-value", JSON.stringify(notesobj));

        // console.log("notes "+notes);
        // console.log("newobj "+newobj);
        // console.log("notesobj "+notesobj);
        // console.log("localStorage "+localStorage);

        txtvalue.value = "";
        titlevalue.value = "";
        showNotes();
    }
    else
        alert("Please fill the details ...");
});

function showNotes() {
    let notes = localStorage.getItem("key-value");

    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    let yournotes = document.getElementById("yournotes");

    if (notesobj.length!= 0) {

        yournotes.style.borderStyle = "solid";
        // <h5>Note ${index+1}</h5>
        // <p>${element}</p>

        notesobj.forEach(function (element, index) {
            html += `
            <div class="note-box">
            <h2>${element.Title} </h2>
            <p>${element.Note}</p>
            <button id=${index} onclick="deleteNode(${index})" id="delBtn">Delete Note</button>
            </div>
            `;
        });
    } 
    
    else {
        html += `<p>Nothing to show! Please click on "Add Note" button to add a new note.</p>`;
    }
    yournotes.innerHTML = html;
}

function deleteNode(index)
{
console.log("delete "+index);

let notes = localStorage.getItem("key-value");

if (notes == null) {
    notesobj = [];
} else {
    notesobj = JSON.parse(notes);
}

notesobj.splice(index,1);
localStorage.setItem("key-value", JSON.stringify(notesobj));
showNotes();
}


let search=document.getElementById("searchBox");

search.addEventListener("input",function()
{
    let searchval=search.value.toLowerCase();

    let allnotes=document.getElementsByClassName("note-box");

    Array.from(allnotes).forEach(function(element){
        let matchedtext=element.getElementsByTagName("p")[0].innerText;

        if(matchedtext.includes(searchval))
        element.style.display="block";

        else
        element.style.display="none";

    });
});
