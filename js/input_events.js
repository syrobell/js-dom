const filter = document.getElementById("filter");

// Focus - Alana odaklandığımızda çalışır
// Blur - Alandan çıktığımızda çalışır

// filter.addEventListener("focus", run);
// filter.addEventListener("blur", run);

// function run(e){
//     console.log(e.type);
// };

// Paste - Copy - Cut - Select isimlerinden de anlaşılacağı üzere bu işlemleri yakalar.

filter.addEventListener("paste", run);
filter.addEventListener("copy", run);
filter.addEventListener("cut", run);
filter.addEventListener("select", run);

function run(e){
    console.log(e.type);
};