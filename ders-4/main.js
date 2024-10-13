function toplamaİşlemi(a, b) {
  var toplam = a + b;
  document.write("Toplam:", toplam, "<br/>");
}
// toplamaİşlemi fonksiyonu return satırına sahip olmadığından içerisinde bulunan değeri dışarı çıkaramaz.
var sonuç = toplamaİşlemi(12, 44);

document.write("sonuç:", sonuç, "<br/>");

// Fonksiyonların bir değer döndürmesi istenebilir.Bu durumda fonksiyonun dışarıya döndürmesi istenen değeri return satırında yazarız.

function stokToplam(girdi, çıktı) {
  var stok = girdi - çıktı;

  return stok;
}

var stokAdet = stokToplam(100, 20);

document.write("Stok:", stokAdet, "<br/>");

// * Javascript Objeler

// Objeler içerisinde değişken,dizi,fonksiyon vs. özellikler tutmaya olanak tanıyan javascript yapılarıdır.Bu yapılar içerisinde değerleri key-value (anahtar-değer) çiftleri halinde tutarlar.

// Bir obje tıpkı değişken tanımlar gibi var anahtar kelimesi yazılıp devamında bu objeye bir isim veriler tanımlanır.Bu objenin sahip olacağı değerler ={} yapısı oluşturulduktan sonra {} içerisinde key-value çiftleri halinde yazılır.

var kişi = {
  isim: "Yusuf",
  soyisim: "YAMAN",
  yaş: 22,
  email: "yusufyaman@gmail.com",
  hobiler: ["Yazılım", "Müzik", "Spor", "Yüzme"],
  bilgiVer: function () {
    document.write("Kişi objesinden selamlar.", "<br/>");
  },
  kişiTanıtım: function () {
    // Obje içerisinde objenin içerisinde yer alan bir değere erişmek istersek bu değerin başına 'this.' yapısı konulmalıdır.
    document.write(
      `Kişi adı: ${this.isim}\nKişi soyad: ${this.soyisim}\nKişi yaş: ${this.yaş}  <br/>`
    );
  },
};
// Objeye erişme
// console.log(kişi);

// Objenin içerisindeki elemanlara erişmek için obje adından sonras '.' konulur ve erişilmek istenen değerin adı yazılır.

// console.log(kişi.isim);
// console.log(kişi.soyisim);
// console.log(kişi.yaş);
// console.log(kişi.email);

// Obje içerisindeki diziye erişme
// console.log(kişi.hobiler);
// Obje içerisindeki dizinin bir elemanına erişme
// console.log(kişi.hobiler[0]);

kişi.bilgiVer();

kişi.kişiTanıtım();

document.write(`---------------------------------------- <br/>`);

// * Javascript Döngüler:

// Döngüler javascript de tekrar gerektiren durumlar yönetmek için kullanılır.Ör 100 defa ekrana 'selamlar javascript 💯' yazdırmak.

// * For Döngüsü :

// Bu döngü sayaç mantalitesiyle çalışır.Bu döngüye kontrol edeceği bir değişken verilir.Bu değişkenin nasıl arttırılacağı söylenir ve bir üst limit konulur.

// var sayı1 = 10;

// console.log(sayı1);

// sayı1 = sayı1 + 1;
// sayı1++;

// console.log(sayı1);

// document.write(`Selamlar Javascript 💯 <br/>`);
// document.write(`Selamlar Javascript 💯 <br/>`);
// document.write(`Selamlar Javascript 💯 <br/>`);
// document.write(`Selamlar Javascript 💯 <br/>`);

for (var sayaç = 0; sayaç < 10; sayaç++) {
  document.write(`Selamlar Javascript 💯 <br/>`);
}
document.write(`---------------------------------------- <br/>`);
// For döngüsü, ilk olarak bir başlangıç değeri alır. İkinci olarak, döngünün devam edebilmesi için bir koşul belirtilir. Üçüncü olarak ise başlangıç değerinin nasıl güncelleneceği tanımlanır.

// todo: 1 den 50 ye kadar olan sayıları ekrana yazdırınız.

for (var sayı = 1; sayı <= 50; sayı++) {
  document.write(` ${sayı} <br/>`);
}
document.write(`---------------------------------------- <br/>`);
// * While Döngüsü:

// while döngüsü  () içerisinde bir koşul ister.Bu koşul sağlanırsa {} içerisinde kalan alandaki işlem gerçekleştirilir.Fakat bu durumda uygulama sonsuz döngüye girer.Bunu engellemek için {} içerisinde koşul durumunda kullanılan değer güncellenir.

var sayaç1 = 2;

while (sayaç1 < 10) {
  document.write(` Selamlar Dünya <br/>`);

  sayaç1++;
}

document.write(`---------------------------------------- <br/>`);

// * Do-while Döngüsü:

//  Do-while döngüsü whiledan farklı olarak işlemi bir defa geçekleştirir sonra şarta bakar.Yani koşul sağlanmasa bile bir defa çalışır.

var sayaç2 = 10;

do {
  document.write(` Selamlar Dünya !!! <br/>`);
  sayaç2++;
} while (sayaç2 < 5);

document.write(`---------------------------------------- <br/>`);
// Javascript Dizilerde Döngüler

var kişiler = ["Yusuf", "Enes", "Ertuğrul", "Tahir", "Yılmaz", "Mehmet"];

document.write(`Dizi: ${kişiler} <br/>`);

// document.write(`Dizi-1: ${kişiler[0]} <br/>`);
// document.write(`Dizi-2: ${kişiler[1]} <br/>`);

function yazdır(kişi) {
  document.write(`${kişi} <br/>`);
}

// forEach ==> Bu metod bir dizinin tüm elemanları için bir işlev yaptıran bir döngüdür.

kişiler.forEach(yazdır);

document.write(`---------------------------------------- <br/>`);

// map ==> Bu metod bir dizinin tüm elemanlarını dönerek yeni bir dizi oluşturur.

var sayılar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.write(`Sayılar: ${sayılar} <br/>`);

function ikiyleÇarp(sayı) {
  return sayı * 2;
}

var yeniSayılar = sayılar.map(ikiyleÇarp);

document.write(`Yeni Sayılar: ${yeniSayılar} <br/>`);

// ! map ve forEach fonksiyonun farkı forEach bir diziyi sadece döner.map ise bir diziyi dönerken geriye yeni bir dizi daha oluşturur.Bu sayede bir dizinin elemanlarını güncelleyebilir.

// ! Kısacası bir dizinin tüm elemanları için bir işlem gerçekleştirilecekse dizilerde döngü kullanılır.Bu noktada karşımıza 2 seçenek çıkar map && forEach.Eğer bir dizinin elemanları güncellenecekse map kullanılır eğer sadece dizinin elemanları dönülecekse bunun içim forEach kullanılır.
