// Tüm elemantler
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearbutton = document.querySelector("#clear-todos");
const clearChosen = document.querySelector("#clear-chosen");

eventListeners();

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


function eventListeners(){// Tüm eventleri çağıran fonksiyon
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteToDo);
    filter.addEventListener("keyup", filterToDos);
    clearbutton.addEventListener("click", clearAllTodos);
    clearChosen.addEventListener("click", clearChosenTodos);
    secondCardBody.addEventListener("click", choseForClear);
}
function choseForClear(e){

    const check = document.createElement("i")
    check.className = "fas fa-check flex-shrink-1 mr-3 mt-1"
    check.style = "color: #ff8000"
    
    
    if(e.target.parentElement.className === "list-group-item d-flex bd-highlight"){
        e.target.parentElement.className = "list-group-item d-flex bd-highlight checked"
        e.target.parentElement.style = "background: #666"
        insertAfter(check , e.target)
        
        
    }
    else if(e.target.parentElement.className === "list-group-item d-flex bd-highlight checked"){
        e.target.parentElement.className = "list-group-item d-flex bd-highlight"
        e.target.parentElement.style = "background: "
        e.target.nextSibling.remove()
        
        
    }
    if(e.target.className === "list-group-item d-flex bd-highlight"){
        e.target.className = "list-group-item d-flex bd-highlight checked"
        e.target.style = "background: #666"
        insertAfter(check , e.target.firstElementChild)
        
        
    }
    else if(e.target.className === "list-group-item d-flex bd-highlight checked"){
        e.target.className = "list-group-item d-flex bd-highlight"
        e.target.style = "background: "
        e.target.firstElementChild.nextSibling.remove()
        
    }
        

}


function clearChosenTodos(){
    let chosens = document.querySelectorAll(".checked")

    chosens.forEach(function(chosen){
        chosen.remove();
        deleteToDoFromStorage(chosen.textContent);
        
    })
    showAlert("success", "Seçilen İçerikler Başarıyla Silindi!")
    
e.preventDefault();
}

function clearAllTodos(e){
    if (confirm("Tümünü silmek istediğinize emin misiniz?")){
        // Arayüzden Todoları Temizleme
        // todoList.innerHTML = ""; // Yavaş Çalışır
        while (todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos")
    }
}

function filterToDos(e){
    const text = e.target.value.toLowerCase();
    const filters = document.querySelectorAll(".list-group-item");

    filters.forEach(function(filter){
        const filterText = filter.textContent.toLowerCase();
        console.log(filterText)

        if(filterText.indexOf(text) === -1){
            filter.setAttribute("style", "display: none !important")
            
        }
        else{
            
            filter.setAttribute("style", "display: block")
            
        };

        
    });
    
    
}

function deleteToDo(e){
    console.log(e.target.className)
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteToDoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo Başarıyla Silindi!")
    }

}

function deleteToDoFromStorage(deletetodo){
    let todos = getTodoFromStorage();

    todos.forEach(function(todo,index){
        if (todo === deletetodo){
            todos.splice(index,1);
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
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
    };
    e.preventDefault();
}
function addTodoUI(newTodo){

    //Elementleri Oluşturma
    const listItem = document.createElement("li");
    const divItem = document.createElement("div")
    const linkItem = document.createElement("a");
    // Li Class
    listItem.className = ("list-group-item d-flex bd-highlight");
    
    //span
    divItem.className = ("w-100 bd-highlight")
    
    // A Class ve Özellikleri
    linkItem.href = ("#");
    linkItem.className = ("delete-item flex-shrink-1");
    linkItem.innerHTML = ("<i class = 'fa fa-remove'></i>");

    // Fonksiyona gelen değeri text olarak eklemek
    divItem.append(document.createTextNode(newTodo));

    listItem.appendChild(divItem);

    // A elementini Li Elementinin içine eklemek
    listItem.appendChild(linkItem);

    // Li Elementini HTML de UL'ye eklemek
    todoList.appendChild(listItem);

    todoInput.value = "";
    
    
    
}
function renklendir(){
    const liColor = document.querySelectorAll("li:nth-child(odd)");
    liColor.forEach(function(e1){
        e1.style.background = "#ddd"; 
    });

}
function showAlert(type,message){

    const makeAlert = document.createElement("div");
    const closeAlert = document.createElement("button");
    makeAlert.className = `alert alert-${type} alert-dismissible fade show mt-3`;
    makeAlert.textContent = message;
    

    closeAlert.type = "button";
    closeAlert.className = "close";
    closeAlert.setAttribute("data-dismiss","alert");
    closeAlert.setAttribute("aria-label","Close");
    closeAlert.innerHTML = "<span aria-hidden='true'>&times;</span>";

    makeAlert.appendChild(closeAlert);

    firstCardBody.appendChild(makeAlert);

    setTimeout(function(){
        makeAlert.remove();
    },3500);
    


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
    };

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
                    