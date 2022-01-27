const element = document.querySelector("#clear-todos");

// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

let rand = Math.floor(Math.random() * 11 ) ;
console.log(rand);

if(rand <= 3)
{
element.className = "btn btn-primary";
}

if(rand <= 6 && rand > 3)
{
    element.className = "btn btn-secondary";
    element.innerHTML = "<span style = 'color:white'> You're F*ckin Idiot</span>"
}
if(rand <= 10 && rand > 6)
{
    element.className = "btn btn-warning";
    element.textContent = "JS AVUCUMUN İÇİNDE"
}

element.style.color = "#000";
element.style.marginLeft = "50px"
element.href = "https://www.google.com.tr"
element.target = "_blank"

// const liste = document.querySelectorAll(".list-group-item")
// liste.forEach(function(e1){
//     e1.style.color = "red";
//     e1.style.background = "#eee"


// } )

let element2 = document.querySelectorAll("li:nth-child(odd)");

element2.forEach(function(e1){
    e1.style.background = "#ccc"
})

