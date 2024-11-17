// * Javascript Tarih Objesi

var tarih = new Date();

document.write(`Tarih: ${tarih} <br/>`);

// Gün verisini alma
var gün = tarih.getDate();

document.write(`Gün: ${gün} <br/>`);

// Ay verisini alma
var ay = tarih.getMonth();

document.write(`Ay: ${ay + 1} <br/>`);

// Yıl verisini alma
var yıl = tarih.getFullYear();

document.write(`Yıl: ${yıl} <br/>`);

// Saat verisini alma
var saat = tarih.getHours();

document.write(`Saat: ${saat} <br/>`);

// Dakika verisini alma
var dakika = tarih.getMinutes();

document.write(`Dakika: ${dakika} <br/>`);

// Saniye verisini alma
var saniye = tarih.getSeconds();

document.write(`Saniye: ${saniye} <br/>`);

// Haftanın hangi günü olduğunu alma
var haftanıngünü = tarih.getDay();

document.write(`Gün: ${haftanıngünü} <br/>`);

document.write(`------------------------------- <br/>`);

// Dizi içerisinde obje kullanımı

var arabalar = [
  { marka: "BMW", model: "M3", renk: "Siyah", yıl: 2017 },
  { marka: "Mercedes", model: "AMG", renk: "Siyah", yıl: 2020 },
];

// console.log(arabalar);

// console.log(arabalar[0]);

// console.log(arabalar[0].marka);

// todo: Bir bilgisayar mağzasında farklı bilgisayarların verilerini dizi içerisinde objeler şeklinde yönetiniz.

var bilgisayarlar = [
  { marka: "Apple", model: "M2 Air", ram: 16, hafıza: 256, renk: "silver" },
];

// * Javascript Koşullu Yapılar(if-else)

// todo: Bir kişinin yaşı 18'den büyük eşitse ehliyet alabilir değilse ehliyet alamaz.Yaş değişkenine göre kullanıcının ehliye alıp alamayacağını belirleyen code-scripti oluşturunuz.

var yaş = 16;

if (yaş >= 18) {
  document.write(`Kişi ehliyet alabilir. <br/>`);
} else {
  document.write(`Kişi ehliyet alamaz. <br/>`);
}
document.write(`------------------------------- <br/>`);

var not = 88;

// ? 50'den küçük mü ?
if (not < 50) {
  document.write(`Dersten kaldınız. <br/>`);
}
// ? 50'den büyük eşit ve 64 'den küçük mü ?
else if (not >= 50 && not < 64) {
  document.write(`Dersten geçtiniz ama belge alamadınız. <br/>`);
}
// ? 64'den büyük  ve 85 'den küçük mü ?
else if (not >= 64 && not < 85) {
  document.write(`Dersten geçtiniz ve teşekkür belge aldınız. <br/>`);
}
// ? 85 'den büyük mü ?
else {
  document.write(
    `Tebrikler dersi başarıyla geçtiniz ve Takdir belgesi aldınız. <br/>`
  );
}
document.write(`------------------------------- <br/>`);
// * Javascript Switch-case

// todo: Üniversite öğrencisinin not ortalaması 1 ise 'Ders başarınız çok kötü daha çok çalışın' 2 ise 'Ders başarınız iyi değil daha çok çalışın' 3 ise 'Ders başarınız ortalama' 4 ise 'Ders başarınız iyi' 5 ise 'Ders başarınız harika' yazıdırınız.

var dersOrtalaması = 8;

switch (dersOrtalaması) {
  case 1:
    document.write(`Ders başarınız çok kötü daha çok çalışın <br/>`);
    break;
  case 2:
    document.write(`Ders başarınız iyi değil daha çok çalışın <br/>`);
    break;
  case 3:
    document.write(`Ders başarınız ortalama <br/>`);
    break;
  case 4:
    document.write(`Ders başarınız iyi <br/>`);
    break;
  case 5:
    document.write(`Ders başarınız harika <br/>`);
    break;
  default:
    document.write(`Tanımsız değer <br/>`);
}

document.write(`------------------------------- <br/>`);

// * Javascript Döngüler

// document.write(`Merhaba Javascript <br/>`);
// document.write(`Merhaba Javascript <br/>`);
// document.write(`Merhaba Javascript <br/>`);
// document.write(`Merhaba Javascript <br/>`);
// document.write(`Merhaba Javascript <br/>`);
// document.write(`Merhaba Javascript <br/>`);
// document.write(`Merhaba Javascript <br/>`);
// document.write(`Merhaba Javascript <br/>`);
// document.write(`Merhaba Javascript <br/>`);
// document.write(`Merhaba Javascript <br/>`);

var sayı = 10;

document.write(`Sayı:${sayı} <br/>`);

// sayı = sayı + 1;
sayı++;

document.write(`Sayı-1:${sayı} <br/>`);

// sayı = sayı - 1;

sayı--;

document.write(`Sayı-2:${sayı} <br/>`);

// sayı = sayı + 5;
sayı += 5;

document.write(`Sayı-3:${sayı} <br/>`);

document.write(`------------------------------- <br/>`);

// * For Döngüsü
var sayaç;
for (sayaç = 0; sayaç < 10; sayaç++) {
  document.write(`Merhaba Javascript <br/>`);
}
document.write(`------------------------------- <br/>`);

// todo: Ekrana for döngüsü kullanarak 5 defa 'Udemig akademiden selamlar' yazdırınız.

var sayı1;

for (sayı1 = 0; sayı1 < 5; sayı1++) {
  document.write(`Udemig akademiden selamlar <br/>`);
}
document.write(`------------------------------- <br/>`);

// * While Döngüsü

let değer = 0;

while (değer < 10) {
  document.write(`Javascript dersinden selamlar<br/>`);
  değer++;
}

// todo: Ekrana 1'den 100'e kadar olan çift sayıları yazdırınız.

let number = 0;

while (number <= 100) {
  document.write(`${number} <br/>`);

  number += 2;
}

// * do-while

var number2 = 11;

do {
  document.write(`Javascript dersinden selamlar<br/>`);
  number2++;
} while (number2 < 10);

// * Javascript DOM

var başlık1 = document.getElementsByTagName("h1");

// console.log(başlık1);

var başlık2 = document.getElementsByClassName("title-2");

// console.log(başlık2);

var başlık3 = document.getElementById("title-3");

// console.log(başlık3);

var başlık4 = document.querySelector(".title-4");

console.log(başlık4);
