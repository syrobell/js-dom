// Session Storage

// Buttonlar
const addKey = document.querySelector("#add");
const deleteKey = document.querySelector("#delete");
const clearAll = document.querySelector("#clear");

// Inputlar

const inputKey = document.querySelector("#addKey");
const inputValue = document.querySelector("#addValue");
const inputDelete = document.querySelector("#deleteKey");

addKey.addEventListener("click", add);
deleteKey.addEventListener("click", dlt);
clearAll.addEventListener("click", clear);

function add(e){
    sessionStorage.setItem(inputKey.value, inputValue.value);
    console.log(inputKey.value)
}
function dlt(e){
    sessionStorage.removeItem(inputDelete.value); 
}
function clear(e){
    sessionStorage.clear();
}