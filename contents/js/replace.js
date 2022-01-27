const cardBody = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h3");

// <h5 class="card-title" id = "tasks-title">Todolar</h5> //

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.appendChild(document.createTextNode("Yeni Todo List"))

const oldElement = document.querySelector("#tasks-title");

cardBody.replaceChild(newElement,oldElement);

console.log(newElement)