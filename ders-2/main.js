// Bağlantı Kontrolü
// console.log("Selam Js");

/* 

 * Javascript Operatörler

 - Javascript operatörleri değerler ile işlem yapmak için kullanılır.



 * 1-) Toplama(+):


 * 2-) Çıkarma(-):


 * 3-) Çarpma(*): 


 * 4-) Bölme(/): 


*/

var sayı1 = 44;

var sayı2 = 11;

// Toplama İşlemi

document.write("Toplam:", sayı1 + sayı2, "<br/>");

// Çıkarma İşlemi

document.write("Çıkarma:", sayı1 - sayı2, "<br/>");

// Çarpma İşlemi

document.write("Çarpma:", sayı1 * sayı2, "<br/>");

// Bölme İşlemi

document.write("Bölme:", sayı1 / sayı2, "<br/>");

/*

* Javascript Atama ve Değer Kontrolü

Matematikte kullanılan '=' sembolünün Javascript deki karşılığı faklıdır.Bu sembol sağında bulunan değeri alıp solunda bulunan ifadenin değeri olarak belirler yani atama işlemi yapar.Eğer sağ kısımda bir değer yerine bir dizi işlem varsa önce bu işlemleri yapar sonrasında bulduğu sonucu solundaki ifadenin değeri olarak atar.

? Peki Javascript de eşitlik kontrolü nasıl yapılır ?


- Javascript de eşitlik kontorlü '==' ile yapılır.Bu sembol sağında ve solunda bulunan ifadelerin eşitliğini kontrol eder.Ve eğer eşitse 'true' döndürür değilse 'false' döndürür.


*  Javascript Karşılaştırma Operatörleri


* 1-) Eşittir (==)

* 2-) Büyüktür (>)

* 3-) Küçüktür (<)

* 4-) Büyük Eşittir (>=)

* 5-) Küçük Eşittir (<=)


* Matematikte kullanılan bu semboller eğer kontrol ettiği şart sağlanıyorsa 'true' sağlanmıyorsa  'false' döndürür.




*/

var kişiSayısı = 13;

document.write("Kişi Sayısı: ", kişiSayısı, "<br/>");

document.write("Sayı1 ve Sayı2 Eşit Mi ? : ", sayı1 == sayı2, "<br/>");

document.write("Sayı1 44 e  Eşit Mi ? : ", sayı1 == 44, "<br/>");

document.write("-------------------------------------------------- ", "<br/>");

document.write("44 55 den Büyük Mü ? : ", 44 > 55, "<br/>");
document.write("44 55 den Küçük Mü ? : ", 44 < 55, "<br/>");
document.write("44 55 den Büyük Eşit Mi ? : ", 44 >= 55, "<br/>");
document.write("44 46 dan Küçük Eşit Mi ? : ", 44 <= 46, "<br/>");

// * Javascript Literal Templates (Backtick)

// Şimdiye kadar değişken ve string ifadeleri bir arada kullanırken bu yapıları , ile ayırdık.Fakat bu kullanım birden fazla değişken ve string ifade olduğunda bizim için yazım noktasında sıkıntılar çıkaracaktır.Bu yüzden Javascript in yeni sürümlerinde gelen 'bactik' ler kullanılır.Bu yöntem `` arasında string ve değişkenleri daha kolay yönetmemizi sağlar.Stringleri direkt yazarız değişkenleri ise ${} içerisinde yazarız.

var kurumAdı = "Udemig";

var dersAdı = "Javascript ";

var sınıfMevcudu = 12;

document.write(
  kurumAdı,
  " kurumunda ",
  dersAdı,
  " dersinde ",
  sınıfMevcudu,
  " ile ders işliyoruz.",
  "<br/>"
);

document.write(
  `${kurumAdı} kurumunda ${dersAdı} dersinde ${sınıfMevcudu} ile ders işliyoruz. <br/>`
);

// * typeof ==> Bu metot ifadelerin veri tipini kontrol etmek için kullanılır.

document.write(`Kurum Adı Değikeninin veri tipi: ${typeof kurumAdı} <br/>`);
document.write(`44 Sayısının veri tipi: ${typeof 44} <br/>`);
document.write(`------------------------------------- <br/>`);

// * String Metotları

var metin = "JavaScript dilinde string metotlarını öğrenmek oldukça eğlenceli!";

document.write(`Metin: ${metin} <br/>`);

// * length ==> Bu metot string ifadelerin uzunluğunu bulmak için kullanılır.

document.write(`Metinin Uzunluğu: ${metin.length} <br/>`);

// * indexOf ==> String veri içerisinde bir ifadenin kaçıncı sırada olduğunu bulmak için kullanılır.Bu metot () içerisine hangi kelimenin  sırası bulunacaksa bunu "" içerisinde alır.

document.write(
  `Metinin içerisinde öğrenmek kelimesi kaçıncı sırada ? : ${metin.indexOf(
    "öğrenmek"
  )} <br/>`
);

// * slice ==> String veri içerisinde belirlenen aralığı almak için kullanılır.Bu metot () içerisinde hangi aralığı almak istiyorsak bunu belirtmemizi ister.Başlangıç değeri zorunludur.

document.write(
  `Metinin içerisinden 20.,44. aralığı: ${metin.slice(20, 44)} <br/>`
);

// * repleace ==> String veri içerisinde bir ifadeyi başka bir ifade ile değiştirmek için kullanılır.Bu metot () içerisinde iki değer ister.Birincisi hangi ifade değişecek ikincisi birinci ifade hangi ifade ile değişecek.

document.write(
  `Metinin içerisinden 'oldukça' kelimesini 'baya' kelimesi ile değiştir: ${metin.replace(
    "oldukça",
    "baya"
  )} <br/>`
);

// * toLocaleUpperCase ==> String veri içerisindeki tüm harfleri büyük harf olarak düzenler.

document.write(
  `Metinin içerisinden tüm harfleri büyük harf: ${metin.toLocaleUpperCase()} <br/>`
);

// * toLocaleLowerCase ==> String veri içerisindeki tüm harfleri küçük harf olarak düzenler.

document.write(
  `Metinin içerisinden tüm harfleri küçük harf: ${metin.toLocaleLowerCase()} <br/>`
);

// * concat ==> İki ifadeyi birleştirmek için kullanılır.Bu metot () içerisinde birleştirilmek istenen ifadeyi ister.

document.write(
  `Metinin ifadesini ve Udemig i birleştir: ${metin.concat(" UDEMİG")} <br/>`
);

document.write(`------------------------------------- <br/>`);

var sayı = 12.3456543;

document.write(`Sayının Veri Tipi: ${typeof sayı} <br/>`);

// * Javascript Sayı Metotları
