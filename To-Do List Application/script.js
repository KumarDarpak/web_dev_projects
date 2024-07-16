const listcontainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");


function addTask(){
    if(inputBox.value == '') {
        alert("Can't Be Empty");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        // inputBox.value = ''; my wORk already😎 to make empty 

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedTask();
}

listcontainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedTask();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedTask();
    }

});

function savedTask(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();