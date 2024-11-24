// ! Html elemanına Js dosyasında erişme
var başlık1 = document.querySelector("#title-1");

// console.log(başlık1);

// başlık1.style.color = "red";
// başlık1.style.backgroundColor = "yellow";
// başlık1.style.padding = "20px";
// başlık1.style.textAlign = "center";

// ! Html'den erişilen elemana class ekleme
başlık1.classList.add("başlık");

// (elemanAdı).classList.add ==> Bir elemana class eklemek için kullanılır.

// başlık1.classList.remove("başlık"); ==> Bir elemandan class çıkarmak için kullanılır.

// ! Bir fonksiyon tanımlama
function uyarıVer() {
  alert("Uyarı!! Hatalı işlem...");
}

// ! Htmlden buton elemanına erişme
var alertBtn = document.querySelector("#alert-btn");

// ! Buton elemanına olay izleyicisi ekleme
alertBtn.addEventListener("click", uyarıVer);

var changeBtn = document.querySelector("#change-class-btn");

var başlık2 = document.querySelector("#title-2");

changeBtn.addEventListener("click", () => {
  // ! classList.add elemena class eklemek; classList.remove elemandan class çıkarmak için kullanılır.classList.toggle ise elemanda belirtilen class varsa bunu çıkarmak yoksa bunu eklemek için kullanılır.
  başlık2.classList.toggle("başlık");
});

//  todo: Bir butona tıklanınca ilgili bir div içerisine eleman ekleyen örneği oluşturunuz

// 1-) Butona Js kısmında eriş

var addButton = document.querySelector(".add-btn");

// 2-) Divlerin ekleneceği ana dive Js kısmında eriş
var container = document.querySelector(".container");

// 3-) Div ekleyecek fonksiyon yaz

function createElement() {
  // ! Bir eleman oluştur
  var yeniDiv = document.createElement("div"); // document.createElement ==> Bir Html elemanı oluşturmak için kullanılır.
  //   console.log(yeniDiv);
  // ! Bu elemanın içeriğini belirle
  yeniDiv.innerText = "Yeni Div"; // innerText ==> Bir elemanın içeriğini belirlemek için kullanılır.

  // ! Bu elemana bir class ekle
  yeniDiv.classList.add("appendChild");

  //   console.log(yeniDiv);
  // ! Bu oluşturulan elemanı container içerisine ekle
  container.appendChild(yeniDiv); // appendChild ==> Bir html elemanı içerisine eleman eklemek için kullanılır.
}

// 4-) Butona bir olay izleyicisi ekle.Butona tıklanınca ilgili fonksiyon çalışsın

addButton.addEventListener("click", createElement);

var exampleTitle = document.querySelector(".example");

// ! Bir Html elemanın içeriğini belirlerken iki metot karşımıza çıkar.

// * innerText ==> Bir elemanın yazı içeriğini belirler.

// * innerHTML ==> Bir elemanın Html içerğini belirler.

// exampleTitle.innerHTML = "<img src='https://picsum.photos/200' />";

// ! Formun Gönderilmesi olayını izle

var form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  // Html'deki form elemanı default değer olarak sayfayı yeniler.Bunu önüne geçmek için   e.preventDefault() kullanılır.
  e.preventDefault();
  var name = e.target[0].value;
  var password = e.target[1].value;
});

fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));
