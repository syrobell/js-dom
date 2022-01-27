const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.getElementById("tasks-title");


// Click Event - Tıklanınca Çalışır.

// title.addEventListener("click", run);

// function run(e){
//     console.log(e.type)
// }

// Mouse Down - Tıklayınca Çalışır

// title.addEventListener("mousedown", run)

// function run(e){
//     console.log(e.type)
// }

// Mouse Up - Tık Bırakılınca Çalışır

// title.addEventListener("mouseup", run)

// function run(e){
//     console.log(e.type)
// }

// Mouse Over - Seçili Elementin üzerine gelince çalışır elementin childlarının üzerine
// gelindiği zaman tekrar çalışır.

// cardBody.addEventListener("mouseover", run)

// function run(e){
//     console.log(e.type)
// }

// Mouse Out - Seçili Elementin üzerinden ayrılınca çalışır elementin childlarının üzerine
// gelindiği zaman tekrar çalışır.

// cardBody.addEventListener("mouseout", run)

// function run(e){
//     console.log(e.type)
// }

// Mouse Enter ve Leave Mouse Out ve Mouse Over gibi çalışır tek farkı elementin childları sayılmaz!

cardBody.addEventListener("mouseenter", run)
cardBody.addEventListener("mouseleave", run)

function run(e){
    console.log(e.type)
}