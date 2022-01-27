const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item")


console.log(todoList);
console.log(todos)

// todos[0].remove();

//////// Child silmek için ////////////

//// todoList.removeChild(todoList.lastElementChild)

todoList.removeChild(todos[3])
