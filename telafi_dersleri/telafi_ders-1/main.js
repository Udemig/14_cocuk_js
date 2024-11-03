// * Javascript Çıktı Metotları

// document.write("Javascript Telafi Dersinden Selamlar :)");

// console.log("Javascript dünyadaki en popüler yazılım dilidir.");

// alert("İnternet bağlantınızı kontrol ediniz.");

// * Javascript Değişkenler

var isim = "Enes";

document.write(isim, "<br/>");

var yıl = 2024;

document.write(yıl, "<br/>");

// * Javascript Templates Literal (backtick)

var kurum = "Udemig";

var kişiSayısı = 9;

document.write(
  kurum,
  " kurumunda 14 Çocuk sezonunda ",
  kişiSayısı,
  " kişiyle javascript telafi dersleri işlenmektedir.",
  "<br/>"
);

document.write(
  `${kurum} kurumunda 14 Çocuk sezonunda ${kişiSayısı} kişiyle javascript telafi dersleri işlenmektedir. <br/> `
);

// * Javascript Değişken Tipleri

// String ==> Metin verilerinin veri tipi javascript de 'STRİNG' olarak geçer.String veriler tanımlanırken '' içerisinde tanımlanır.

var ülke = "Türkiye";
document.write(`Ülke Adı: ${ülke} <br/>`);

// Number ==> Sayı verilerinin veri tipi javascript'de 'NUMBER' olarak geçer.Number veriler tanımlanırken direkt olarak tanımlar.

var ilSayısı = 81;

document.write(`Türkiyedeki İl Sayısı: ${ilSayısı} <br/>`);

// * Javascript Matematiksel Operatörler
var sayı1 = 12;

var sayı2 = 3;

// Toplama (+)
document.write(`Toplama İşlemi: ${sayı1 + sayı2} <br/>`);

// Çıkarma (-)
document.write(`Çıkarma İşlemi: ${sayı1 - sayı2} <br/>`);

// Çarpma (*)
document.write(`Çarpma İşlemi: ${sayı1 * sayı2} <br/>`);

// Bölme (/)
document.write(`Bölüm İşlemi: ${sayı1 / sayı2} <br/>`);

// ! '+' javascript'de iki görev üstlenir.Birincisi toplama ikincisi birleştirme.Toplama aynı veri tipinde değerler ile yapılır.Birleştirme ise farklı veri tiplerindeki değerler ile yapılır.

// * Javascript Karşılaştırma Operatörler

var sayı3 = 100;

var sayı4 = 44;

var sayı5 = 123;

// Küçüktür (<)
document.write(`Sayı4 Sayı3 'den küçük mü: ${sayı4 < sayı3} <br/>`);
document.write(`Sayı3 Sayı4 'den küçük mü: ${sayı3 < sayı4} <br/>`);

// Büyüktür (>)
document.write(`Sayı3 Sayı4 'den büyük mü: ${sayı3 > sayı4} <br/>`);
document.write(`Sayı4 Sayı3 'den büyük mü: ${sayı4 > sayı3} <br/>`);

// Eşittir (==): Matematikte (=) sembolü eşittir demektir.Fakat bu sembol programlamada 'ATAMA' işlemine denk gelir.İşte bu sebepten eşitlik kontrolleri programlamada '==' ile yapılır.
document.write(`Sayı3 Sayı4 'e eşit mü: ${sayı3 == sayı4} <br/>`);
document.write(`Sayı3 100 'e eşit mü: ${sayı3 == 100} <br/>`);

// Küçükeşittir (<=)
document.write(`Sayı4 Sayı3 'den küçükEşit mi: ${sayı4 <= sayı3} <br/>`);

document.write(`Sayı4 44 'den küçükEşit mi: ${sayı4 <= 44} <br/>`);

// Büyükeşittir (>=)
document.write(`Sayı4 Sayı3 'den büyükEşit mi: ${sayı4 >= sayı3} <br/>`);

document.write(`Sayı4 44 'den büyükEşit mi: ${sayı4 >= 44} <br/>`);

document.write(`------------------------------------------ <br/>`);

// * Javascript String Metotları

var metin = `Merhaba,Udemig akademide javascript öğreniyoruz.Güzel geçen dersler neticesinde javascripti çok çok iyi şekilde öğreneceğiz.`;

document.write(`Metin: ${metin} <br/>`);

// ! length ==> String ifadenin uzunluğunu ölçmek için kullanılır.

document.write(`Metinin Uzunluğu: ${metin.length} <br/>`);

// ! indexOf ==> Metin ifadelerin içerisinde bulunan bir değerin sırasını bulmak için kullanılır.

document.write(
  `Metinin içerisinde iyi kelimesinin sırası : ${metin.indexOf("iyi")} <br/>`
);

// ! slice ==> Metin ifadeler içerisinde belirli aralığı almak için kullanılır.Bu metod bizden iki adet değer ister.Birincisi ve zorunlu olanı başlangıç değeridir.Yani bu aralığın kaçıncı sıradan başlayacağı.İkinci  değer ise bitiş değeri.

document.write(`Metinin içerisinde 40-67 arası : ${metin.slice(40, 67)} <br/>`);

// ! replace ==> Metin ifade içerisinde belirli bir kelimeyi başka bir kelimeyle değiştirmek için kullanılır.Bu metod bizden hangi değerin hangi değerle değiştirileceğini belirtmemizi ister.

document.write(
  `Metinin içerisinde 40-67 arası : ${metin.replace("Güzel", "HARİKA")} <br/>`
);

// ! toLocaleLowerCase ==> Metin ifade içerisinde tüm harfleri küçük harf olarak düzenler.

document.write(
  `Metinin içerisinde tüm harfleri küçük harf : ${metin.toLocaleLowerCase()} <br/>`
);

// ! toLocaleUpperCase ==> Metin ifade içerisinde tüm harfleri büyük harf olarak düzenler.

document.write(
  `Metinin içerisinde tüm harfleri küçük harf : ${metin.toLocaleUpperCase()} <br/>`
);

// ! concat ==> Metin ifadeyi başka ifadelerle birleştirmek için kullanılır.

var paraBirimi = "Dolar";

document.write(
  `Metinin 1234 ile birleştirilmesi : ${metin.concat(1234, paraBirimi)} <br/>`
);

document.write(`------------------------------------------ <br/>`);

// * Javascript Sayı Metotları

var sayı = 145.98754372;

document.write(`Sayı : ${sayı} <br/>`);

// ! toFixed ==> Ondalıklı bir sayının noktadan sonra kaç basamaktan oluştuğunu ayarlamak için kullanılır.

document.write(
  `Sayının . dan sonra 3 basamaklı hali : ${sayı.toFixed(3)} <br/>`
);

// ! Math.round ==> Kendisine verilen sayıyı en yakın tam sayıya yuvarlar.

document.write(
  `Sayının en yakın tam sayıya yuvarlanmış hali : ${Math.round(sayı)} <br/>`
);
