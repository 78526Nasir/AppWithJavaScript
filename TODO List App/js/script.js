// set the focus on the textbox 
window.onload = () => {
    let textBox = document.getElementById("txtActivity");
    textBox.focus();
};

var btn = document.getElementById("btnAddActivity");


// when user click the addActivity button
btn.addEventListener("click", function() {
    let newActivity = document.getElementById("txtActivity").value;

    if(newActivity){
        addItemTodo(newActivity);
        document.getElementById("txtActivity").value = "";
    }
    
});

function addItemTodo(activityName){
    // the ul
    var list = document.getElementById("todo");

    // li inside the ul
    var item = document.createElement("li");
    item.textContent = activityName;

    // div inside the li
    var buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // remove/trash button inside the div
    var btnRemove = document.createElement("button");
    btnRemove.classList.add("remove");

    // trash icon 
    var trashIcon = document.createElement("i");
    trashIcon.classList.add("fa");
    trashIcon.classList.add("fa-trash");

    // appending trash icon into remove button
    btnRemove.appendChild(trashIcon);

    /* add eventListener to remove button */
    btnRemove.addEventListener("click", rmvClick);

    // complete button inside the div
    var btnComplete = document.createElement("button");
    btnComplete.classList.add("complete");

    // check icon 
    var checkIcon = document.createElement("i");
    checkIcon.classList.add("fa");
    checkIcon.classList.add("fa-check");
    
    // appending check icon into complete button
    btnComplete.appendChild(checkIcon);

    /* add eventListener to remove button */
    btnComplete.addEventListener("click", comClick);

    // appending button into buttonsDiv
    buttonsDiv.appendChild(btnRemove);
    buttonsDiv.appendChild(btnComplete);

    // appending buttonsDiv inside the li
    item.appendChild(buttonsDiv);

    // appending item/li inside the ul
    list.insertBefore(item, list.childNodes[0]);
}


let removeButtons = document.getElementsByClassName("remove");


for(var i=0 ;i < removeButtons.length ; i++){
    removeButtons[i].addEventListener("click",rmvClick);
}

/* adding event listener with every remove button */ 
function rmvClick(){
    let li = this.parentNode.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
}


let completeButtons = document.getElementsByClassName("complete");

/* adding event listener with every complete button */ 
for(var i=0 ;i < completeButtons.length ; i++){
    completeButtons[i].addEventListener("click", comClick);
}



function comClick(){
    var child = this.childNodes;

    if(child[0].classList.contains("fa-check")){
        child[0].classList.remove("fa-check");    
        child[0].classList.add("fa-check-circle");    
    }else if(child[0].classList.contains("fa-check-circle")){
        child[0].classList.remove("fa-check-circle");    
        child[0].classList.add("fa-check");    
    }

    let li = this.parentNode.parentNode;
    let ul = li.parentNode;
    let id = ul.id;

    var targetUl = (id === "todo")? document.getElementById("completed") : document.getElementById("todo");

    ul.removeChild(li);

    targetUl.insertBefore(li, targetUl.childNodes[0]);
}