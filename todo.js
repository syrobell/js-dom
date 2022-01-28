// Tüm elemantler
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelectorAll("#filter");
const clearbutton = document.querySelectorAll("#clear-todos");

eventListeners();

function eventListeners(){// Tüm eventleri çağıran fonksiyon
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);

}

function loadAllTodosToUI(){
    let todos = getTodoFromStorage();

    todos.forEach(function(todo){
        addTodoUI(todo);
    });
}

function addTodo(e){
    const newTodo = todoInput.value.trim();

    if(newTodo === ""){
        
    showAlert("danger", "Giriş Alanı Boş Bırakılamaz!");

    }
    else{

    addTodoUI(newTodo);
    showAlert("success", "Tebrikler Kayıt Oluşturuldu!")
    addTodoStorage(newTodo);
    }
    e.preventDefault();
}
function addTodoUI(newTodo){

    //Elementleri Oluşturma
    const listItem = document.createElement("li");
    const linkItem = document.createElement("a");
    // Li Class
    listItem.className = ("list-group-item d-flex justify-content-between");
    
    // A Class ve Özellikleri
    linkItem.href = ("#");
    linkItem.className = ("delete-item");
    linkItem.innerHTML = ("<i class = 'fa fa-remove'></i>");

    // Fonksiyona gelen değeri text olarak eklemek
    listItem.appendChild(document.createTextNode(newTodo));

    // A elementini Li Elementinin içine eklemek
    listItem.appendChild(linkItem);

    // Li Elementini HTML de UL'ye eklemek
    todoList.appendChild(listItem);

    todoInput.value = "";
    renklendir();
}
function renklendir(){
    const liColor = document.querySelectorAll("li:nth-child(odd)")
    liColor.forEach(function(e1){
        e1.style.background = "#ddd"; 
    });

}
function showAlert(type,message){

    const makeAlert = document.createElement("div")
    const closeAlert = document.createElement("button")
    makeAlert.className = `alert alert-${type} alert-dismissible fade show mt-3`
    makeAlert.textContent = message;
    

    closeAlert.type = "button";
    closeAlert.className = "close";
    closeAlert.setAttribute("data-dismiss","alert");
    closeAlert.setAttribute("aria-label","Close");
    closeAlert.innerHTML = "<span aria-hidden='true'>&times;</span>"

    makeAlert.appendChild(closeAlert);

    firstCardBody.appendChild(makeAlert);

    setTimeout(function(){
        makeAlert.remove();
    },3500)
    


    /*<div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
          </div> */
}
function getTodoFromStorage(){
    let todos;

    if(localStorage.getItem("todos") === null ){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}
function addTodoStorage(newTodo){
    let todos = getTodoFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}





{/* <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li> */}
                    