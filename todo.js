const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelectorAll("#filter");
const clearButton = document.querySelectorAll("#clear-todos");

eventListeners()

function eventListeners(){
    form.addEventListener("submit",addTodo);
    
}

function addTodo(e){
    const newTodo = todoInput.value.trim();

    if(newTodo === ""){
        showAlert("danger","Lutfen bir todo girin...");
    }else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo basari ile eklendi")
    }
    e.preventDefault()
}

function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos= [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos;
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`
    alert.textContent = message;

    firstCardBody.appendChild(alert)

    setTimeout(function(){
        alert.remove();
    },1000);
}

function addTodoToUI(newTodo){

    const listItem = document.createElement("li")
    
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"
    
    listItem.className = "ist-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link)

    todoList.appendChild(listItem);
    todoInput.value = "";

}