var title = document.querySelector(".title");

// console.log(title);

// * class ekleme
title.classList.add("heading-1");

var title2 = document.querySelector(".title-2");

// console.log(title2);

// * class çıkarma
title2.classList.remove("heading-3");

// * Olay İzleyicileri

// Elemanlara olay izleyicisi vermek için addEventListener kullanılır.Bu metot bir dinleyici birde bu dinleme olayı gerçekleştiğinde çalışacak bir fonksiyon ister.

var alertButton = document.querySelector("#give-alert");

alertButton.addEventListener("click", () => {
  alert("Butona tıklandı");
});

function focusToInput() {
  console.log("Focuslama işlemi");
}

// todo: Html'de bulunan bir butona tıklayınca dark-light mode özelliğini çalıştırınız.

var changeButton = document.querySelector(".change-thema");

changeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // classList.add class ekler classList.remove class ı çıkarır.classList.toggle metoduysa class varsa bunu çıkarır yoksa bu classı ekler.
});

// * Elemanların İçeriğini Güncelleme

var paragraf = document.querySelector(".paragraf");
var title6 = document.querySelector("#title-6");

// * innerText ==> Elemenın içeriği günceller.
paragraf.innerText = "Javascript Dersinden Selamlar !!";

// * innerHTML ==> Elemanın Html i günceller.

title6.innerHTML = `<img src='https://picsum.photos/200' />`;

title2.innerHTML = `<i>Selamlar Js</i> `;

// todo: Html'de istediğiniz bir etiketi oluşturunuz.Sonrasında bu etikete javascript'den erişip içeriğini güncelleyiniz.

var eleman = document.querySelector(".eleman");

eleman.innerHTML = `<img src='https://picsum.photos/204' />`;

// * Javascript'den Html kısımında Eleman Oluşturma

// todo: Html'de bir 'div ekle' butonu birde boş bir container olsun.Bu 'div ekle' butonuna tıklayınca container'ın içerisine yeni divler ekleyiniz.

// 1-) Htmlde ilgili elemanları oluştur.

// 2-) Bu elemanlara javascript den eriş

var addDivButton = document.querySelector(".add-div");
var container = document.querySelector(".container");

// 3-) Div ekle butonuna tıklayınca eleman oluşturan bir fonksiyon oluştur.

function createDiv() {
  // Html'de bir eleman oluştur
  // Javascript'de Html elemanı oluşturmak için 'document.createElement()' metodu kullanılır.
  var newDiv = document.createElement("div");
  newDiv.innerText = "Yeni Div";
  newDiv.classList.add("new-div");
  // appendChild ise  javascript de oluşturulan elemanı Html yapısı içerisine eklemek için kullanılır.
  container.appendChild(newDiv);
}

// 4-)Bu butona tıklayınca container içerisine div ekle
addDivButton.addEventListener("click", createDiv);

//   https://jsonplaceholder.typicode.com/users

//   https://jsonplaceholder.typicode.com/todos
