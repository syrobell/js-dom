
// ID'ye göre inputu seçtik
const todoInput = document.getElementById("todo");
let element;


element = todoInput;
element = todoInput.classList;

//Seçilen dom'a sınıf ekleme ve çıkarma
todoInput.classList.add("newClass")
todoInput.classList.remove("newClass")
todoInput.classList.add("newClass2")

//Seçilen dom'a güncelleme yapma
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
element = todoInput.setAttribute("placeholder", "Naber cnm")
todoInput.removeAttribute("name")

console.log(element)