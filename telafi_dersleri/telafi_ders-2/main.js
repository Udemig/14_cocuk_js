var sayı1 = 41.546393;
var sayı2 = 41.346393;

document.write(`Sayı: ${sayı1} <br/>`);

document.write(`Sayı-2: ${sayı2} <br/>`);

// ! Javascript Sayı Metotları

// ? Math.round() ==> Verilen sayıyı en yakın tam sayıya yuvarlar

document.write(`Sayı: ${Math.round(sayı1)} <br/>`);

document.write(`Sayı-2: ${Math.round(sayı2)} <br/>`);

// ? Math.floor() ==> Verilen sayıyı en yakın bir alt tam sayıya yuvarlar.

document.write(`Sayı-1: ${Math.floor(sayı1)} <br/>`);

// ? Math.ceil() ==> Verilen sayıyı en yakın bir üst tam sayıya yuvarlar.

document.write(`Sayı-2: ${Math.ceil(sayı2)} <br/>`);

// ? toFixed() ==> Verilen sayının ondalıklı kısmında kaç basamak olacak bunu belirler.

document.write(`Sayı-2: ${sayı2.toFixed(3)} <br/>`);

// ? Math.max() ==> Belirli adet sayı grubu içerisinden en büyük olanı bulmak için kullanılır

document.write(`En büyük sayı: ${Math.max(1, 34, 56, 89, 234, 58, 987)} <br/>`);

// ? Math.min() ==> Belirli adet sayı grubu içerisinden en küçük olanı bulmak için kullanılır

document.write(`En büyük sayı: ${Math.min(1, 34, 56, 89, 234, 58, 987)} <br/>`);

// ! typeof ==> Bu metod belirli ifadelerin veri tipini bulmak için kullanılır.

var number = 123;

var isim = "Yusuf";

document.write(`Number: ${typeof number} <br/>`);

document.write(`İsim: ${typeof isim} <br/>`);

document.write(`Sayı-2: ${typeof sayı2} <br/>`);

// ? toString ==> İfadeleri string veri tipine çevirir.

document.write(`Sayı-2: ${typeof sayı2.toString()} <br/>`);

var number2 = "123";

// ? parseInt ==> İfadeleri number veri tipine çevirir.

document.write(`Sayı-->: ${typeof number2} <br/>`);

document.write(`Sayı-->: ${typeof parseInt(number2)} <br/>`);

// ? Math.random() ==> Bize 0-1 arasında rastgele şekilde sayı oluşturur.
document.write(`Rastgele Sayı: ${Math.round(Math.random() * 10)} <br/>`);

document.write(`------------------------------------- <br/>`);

// * Javascript Diziler

// var kişi1 = "Yücel";
// var kişi2 = "Tahir";
// var kişi3 = "Melek";
// var kişi4 = "Enes";
// var kişi5 = "Ahmet";

var kişiler = ["Yücel", "Tahir", "Melek", "Enes", "Ahmet"];

document.write(`Kişi Dizisi: ${kişiler} <br/>`);

var puanlar = [100, 98, 67, 83, 25];

document.write(`Puanlar Dizisi: ${puanlar} <br/>`);

document.write(`Kişi Dizisinin 3 .Elemanı: ${kişiler[2]} <br/>`);

document.write(`------------------------------------- <br/>`);

// ! Dizilerin sahip olduğu metotlar

var şehirler = ["MALATYA", "ANKARA", "İSTANBUL", "İZMİR", "KONYA", "SİVAS"];

document.write(`Şehirler: ${şehirler} <br/>`);

// ! push() ==> Bir diziye sondan eleman eklemek için kullanılır.Bu metot diziye eklenecek elemanı () içerisinde yazmamızı ister.

şehirler.push("ÇANAKKALE");
şehirler.push("DÜZCE");

document.write(`Şehirler-1: ${şehirler} <br/>`);

// ! pop() ==> Bir dizinin son elemanını diziden kaldırır.

şehirler.pop();

document.write(`Şehirler-2: ${şehirler} <br/>`);

// ! unshift() ==> Bir dizinin başına eleman eklemek için kullanılır.Bu metot diziye eklenecek elemanı () içerisinde yazmamızı ister.

şehirler.unshift("ADANA");

document.write(`Şehirler-3: ${şehirler} <br/>`);

// ! shift()==> Bir dizinin başındaki elemanı kaldırmak için kullanılır.

şehirler.shift();

document.write(`Şehirler-4: ${şehirler} <br/>`);

// ! length ==> Bir dizinin uzunluğunu ölçmek için kullanılır.

document.write(`Şehirler Dizisinin Uzunluğu: ${şehirler.length} <br/>`);

document.write(`------------------------------------- <br/>`);

// * Javascript Fonksiyonlar
// ! Fonksiyonun oluşturulması
function selamla() {
  document.write(`Javascript dersinden selamlar <br/>`);
}
// ! Fonksiyonun çağırılması
selamla();

function toplamaİşlemi() {
  var sayı1 = 23;
  var sayı2 = 65;

  var toplam = sayı1 + sayı2;

  document.write(`Toplam: ${toplam} <br/>`);
}

toplamaİşlemi();
// toplamaİşlemi();
// toplamaİşlemi();

// ! Fonksiyonlarda Parametre Kavramı

function toplama(a, b) {
  var toplam = a + b;

  document.write(`toplam: ${toplam} <br/>`);
}

toplama(12, 34);

toplama(99, 35);

// ! Fonksiyonlarda return kavramı

function çarpma(x, y) {
  var sonuç = x * y;

  return sonuç;
}

var çarpmaSonuç = çarpma(10, 44);

document.write(`Çarpım Sonuç: ${çarpmaSonuç} <br/>`);

// * Javascript Objeler

var öğrenci = {
  isim: "Enes",
  soyisim: "Özkan",
  yaş: 14,
  diller: ["Html", "Css", "Javascript", "Sql"],
  adres: {
    ülke: "Almanya",
    şehir: "Düsseldorf",
    postaKodu: 40876,
  },
  öğrenciTanıt: function () {
    console.log(
      `${this.isim} ismindeki ${this.yaş}'yaşındaki öğrencimiz yazılım serüveninde çok iyi ilerlemekte.Bildiği bazı diller: ${this.diller} `
    );
  },
};
// Objeye Erişme
console.log(öğrenci);

// Objenin değerlerine erişme

console.log(öğrenci.isim);
console.log(öğrenci.soyisim);
console.log(öğrenci.yaş);

console.log(öğrenci.diller);
console.log(öğrenci.diller[0]);

console.log(öğrenci.adres);

öğrenci.öğrenciTanıt();
