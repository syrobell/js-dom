// Element Id'e göre seçme

let element;
let element2;


element = document.getElementById("todo-form");
element2 = document.getElementById("tasks-title");

// Element Class'a göre seçilebilir fakat bu class da bulunan tüm
// elementlere uygulama yapar.

let element3 = document.getElementsByClassName("list-group-item")
let element4 = document.getElementsByClassName("card-header")

// Element Tag'e göre seçme

let element5 = document.getElementsByTagName("li")

// Query Selector - Hepsini yapabiliyor ama çoklu seçimde tek element döner
// ilkini

let element6 = document.querySelector("#todo-form")
let element7 = document.querySelector("#task-title")

// element7 = document.querySelector(".list-group-item") class'ı bu olanın en başını seçer
// element7 = document.querySelector("li") en başta ki liyi seçer


console.log(element)
console.log(element2)
console.log(element3)
console.log(element4)
console.log(element5)
console.log(element6)
console.log(element7)