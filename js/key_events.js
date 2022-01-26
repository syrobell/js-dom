// Klavye Eventleri

const header = document.querySelector(".card-header");
const todoInput = document.getElementById("todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e){
    header.textContent = e.target.value
}

// Keypress - Sadece Harfler ve Sayılara tıkladığımız zaman çalışır.
// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which) ASCII kodunu verir
//     console.log(e.key)
// }

// Keydown - basılan tüm karakterleri gösterir (Arrow, Caps, Tab vs vs)
// document.addEventListener("keydown",run);

// function run (e){
//     console.log(e.key)
// }

// Keyup - basılan tüm karakterleri butondan elinizi kaldırınca gösterir

// document.addEventListener("keyup",run);

// function run (e){
//     console.log(e.key)
// }
