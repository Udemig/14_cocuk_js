// * Javascript Sayı Metotları

var sayı = 12.34534;

document.write(`Sayı: ${sayı} <br/>`);

document.write(`Sayının Veri Tipi: ${typeof sayı} <br/>`);

// * toString ==> İfadeleri string veri tipine çevirir.

document.write(`Sayının Veri Tipi-2: ${typeof sayı.toString()} <br/>`);

// * toFixed ==> Ondalıklı bir sayının . dan sonra kaç basamaktan oluşacağını belirler.toFixed() metodu () içerisinde . dan sonra kaç basamak isteniyorsa bunu belirtmemizi ister.

document.write(`Sayının-2: ${sayı.toFixed(2)} <br/>`);

// * Math.round ==> Sayıyı en yakın tam sayıya yuvarlar.

document.write(`Sayının Yuvarlanmış Hali: ${Math.round(sayı)} <br/>`);

var sayı1 = 44.5;

document.write(`Sayının Yuvarlanmış Hali-1: ${Math.round(sayı1)} <br/>`);

var sayı2 = 24.6;

// * Math.ceil ==> Sayıyı daima bir üst tam sayıya yuvarlar.

document.write(`Sayının Yuvarlanmış Hali-2: ${Math.ceil(sayı2)} <br/>`);

// * Math.floor ==>  Sayıyı daima bir alt tam sayıya yuvarlar.

document.write(`Sayının Yuvarlanmış Hali-3: ${Math.floor(sayı2)} <br/>`);

// parseInt ==> Veriyi number veri tipine çevirir.

var sayı3 = "13";

document.write(`Yeni Sayı: ${sayı3} <br/>`);
document.write(`Yeni Sayının Tipi: ${typeof sayı3} <br/>`);
document.write(`Yeni Sayının Tipi: ${typeof parseInt(sayı3)} <br/>`);

// * Math.max ==> Belirli bir sayı kümesi içerisindeki en büyük sayıyı bulmak için kullanılır.

document.write(`En Büyük Sayı: ${Math.max(1, 2, 54, 76, 987)} <br/>`);

// * Math.min ==> Belirli bir sayı kümesi içerisindeki en küçük sayıyı bulmak için kullanılır.

document.write(`En Küçük Sayı: ${Math.min(1, 2, 54, 76, 987)} <br/>`);

// * Math.random ==> 0 ile 1 arasında rastgele bir sayı oluşturur.

document.write(`Rastgele Sayı: ${Math.random()} <br/>`);

document.write(`Rastgele Sayı 0-10: ${Math.round(Math.random() * 10)} <br/>`);

document.write(
  `--------------------------------------------------------- <br/>`
);

// * Javascript Diziler

// var number1 = 1;
// var number2 = 2;
// var number3 = 3;
// var number4 = 4;
// var number5 = 5;

// ! Javascript diziler verileri daha kolay yönetmek için kullanılır.

// Diziler tıpkı değişken tanımlar gibi var anahtar kelimesi yazıldıktan sonra bu diziye bir isim verilir.Verilen bu isim sonrasında = konulur bu ifadenin sağında [] içerisinde elemanlar yazılır.

var sayılar = [1, 2, 3, 4, 5];

document.write(`Sayılar: ${sayılar} <br/>`);

// console.log(sayılar);

document.write(`Sayıların 2. elemanı: ${sayılar[1]} <br/>`);

// Dizilerin içerisindeki elemanlardan belirli bir tanesine dizi adı sonrasında yazılan [] içerisinde elemanın sırası belirtilerek ulaşılır.Fakat bu işlem sırasında ufak bir hatayla karşılaşırız.Biz 1. elemana eriş dediğimizde bize 2 elemanı 2. eleman eriş dediğimizde bize 3. elemanı getirir.Yani hangi sıradaki elemana erişmek istersek bize bunun bir sonrasındaki elemanı getirir.Bunun sebebiyse dizilerin içerisinde elemanların 1,2,3,... şeklinde değilde 0,1,2,... şeklinde sayılmasıdır.Çözüm olaraksa istenilen elemana erişmek için bu elemanın bir öncesindeki sıra belirtilir.Yani 1. elemana erişilecese [] içerisine 0 yazılır.

var kişiler = ["Yusuf", "Ahmet", "Ali", "Enes", "Buse", "Melek"];

document.write(`Kişiler: ${kişiler} <br/>`);

var dizi = ["Hasan", 44, "Kaan", 23];

document.write(`Dizi: ${dizi} <br/>`);

document.write(
  `--------------------------------------------------------- <br/>`
);

// * Dizi Metotları

// Dizi metotları dizilerin içerisindeki elemanları daha kolay şekilde yönetmek için kullanılır.

var arabalar = ["Bmw", "Mercedes", "Audi", "Jeep", "Volkswagen"];

document.write(`Arabalar Dizisi: ${arabalar} <br/>`);

// * length ==> Bir dizinin uzunluğunu ölçmek için kullanılır.Bu metot diziye eklenecek elemanı () içerisinde ister.

document.write(`Arabalar Dizisinin Uzunluğu: ${arabalar.length} <br/>`);

// * push ==> Diziye sondan eleman eklemek için kullanılır.

arabalar.push("Bugatti");
arabalar.push("Ferrari");

document.write(`Arabalar Dizisi-1: ${arabalar} <br/>`);

// * pop ==> Dizinin sonundan eleman çıkarır.

arabalar.pop();

document.write(`Arabalar Dizisi-2: ${arabalar} <br/>`);

// * unshift ==> Dizin başına eleman ekler.Bu metot eklenecek elemanı () içerisinde ister.

arabalar.unshift("Tesla");
arabalar.unshift("Ford");
arabalar.unshift("Lamborghini");
arabalar.unshift("Togg");

document.write(`Arabalar Dizisi-3: ${arabalar} <br/>`);

// *  shift ==> Dizinin  başından eleman çıkarır.

arabalar.shift();

document.write(`Arabalar Dizisi-4: ${arabalar} <br/>`);

document.write(`Arabalar Dizisinin Uzunluğu-1: ${arabalar.length} <br/>`);

document.write(
  `--------------------------------------------------------- <br/>`
);

// * Javascript Fonksiyonlar

// Fonksiyonlar belirli bir işlevi gerçekleştirmek için kullanılan özelleştirlmiş kod parçacıklarıdır.

// Bir fonksiyonun belirlenen işlevi gerçekleştirmesi için önce tanımlanması sonraysa çağırılması gerekir.

// Bir fonksiyon tanımlanırken 'function' anahtar kelimesi yazılır sonrasında bu fonksiyona bir isim verilir.Verilen bu isimden sonra sırasıyla (){} yazılır buradaki {} içerisinde bu fonksiyonun yapacağı işlev kodlanır.

// ! Fonksiyon Tanımlanması
function selamla() {
  document.write(`Javascript dersinden selamlar !!! <br/>`);
}

// ! Fonksiyon Çağırılması

selamla();

// todo: İki adet sayıyı toplayan ve sonucu ekran yazdıran bir fonksiyonu oluşturunuz.

// ! Fonksiyonun Tanımlanması

function toplama() {
  var sayı1 = 44;
  var sayı2 = 12;
  var toplam = sayı1 + sayı2;

  document.write(`Toplam: ${toplam} <br/>`);
}

// ! Fonksiyon Çağırılması

toplama();

// ? Peki fonksiyonlar nasıl dinamik değerlerle  işlemler yapar ?

// ! Fonksiyonlarda parametre kullanımı

// Fonksiyonlarda paramatre kullanımı dinamik işlemler elde etmek içindir.Bir fonksiyona parametre geçmek için () kullanılır.() içerisinde fonksiyona paramtre geçilir.

function parametreliToplama(s1, s2) {
  var toplam = s1 + s2;
  document.write(`Toplam: ${toplam} <br/>`);
}

// parametreliToplama(); Bu şekilde bir kullanımda Nan çıktısı verir.Yani not a number [bir sayı değil].Çünkü bu fonksiyona parametre vermedik.

parametreliToplama(44, 55);
parametreliToplama(132, 4543);
