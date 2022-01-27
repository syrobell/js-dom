const filterFocus = document.getElementById("filter")
const todoForm = document.getElementById("todo-form")

todoForm.addEventListener("submit",submitForm)

function submitForm(e){
    console.log(e)



    // PreventDefault sayfanın default ayarlarını engelliyor. Örneğin bir butona tıkladığınızda default
    // olarak yönlendirme yapmaya çalışır fakat biz burda yönlendirme istemiyoruz.
    e.preventDefault();
}





// filterFocus.addEventListener("focus",function(e){
//     console.log("yine aynı ama daha kullanışlı");
//     console.log(e)
//     console.log(e.target)
//     console.log(e.type)
//     console.log(e.target.placeholder)
//     console.log(e.target.className)
// });



// filterFocus.onfocus = function(){
//     console.log("selamlar cnm");
// }