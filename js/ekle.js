const newLink = document.createElement("a");
const card = document.getElementsByClassName("card-body")[1];

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

// newLink değişkeni ile <a> elementi oluşturuldu ve aşağıda içi dolduruldu.
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";


// createTextNode ile html tagı içerisine text eklendi
newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"))

// belirlenen card dom'unun sonuna oluşturduğumuz ve doldurduğumuz newLink değişkenini ekledik.
card.appendChild(newLink)

