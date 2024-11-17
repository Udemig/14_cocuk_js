// * Javascript Nedir ?

// Javascript dinamik web siteleri oluşturmak için kullanılan bir programlama dilidir.Şimdiye kadar gördüğümüz Html ve Css bir programlama dili değildir.

// Bir yapının programlama dili olarak değerlendirilmesi için dinamik işlemler yapabilmesi gerekir.Ör: Telefonlarda kullanılan dark mode özelliği,Bir e ticaret sitesinde sepete ürün ekleme vs.

// ! Javascript aktif olarak dünya üzerinde kullanılan en popüler yazılım dilidir.

// * Javascript Çıktı Metotları

// ! Çıktı metotları kullanıcıya bir geri dönüş sağlayan yapılardır.Bu noktada Javascript içerisinde 3 adet çıktı metodu göreceğiz:

// 1-) alert(): Bu yapı sayesinde tarayıcıda kullanıcıya açılır kapanır bir mesaj kutusu sunulur.Bu yapı alert() şeklinde kullanılır.ve () içerisinde kullanıcıya verilecek uyarı metni yazılır.

// alert("Udemig Akademiden Selamlar !");

// 2-) console.log(): Bu yapı  bağlantı kontrolleri ve veri kontrolleri için kullanılır.Tarayıcıda bulunan 'console' yapısına çıktı vererek bağlantı ve veri kontrolü yapılır.

// ? Peki tarayıcıdaki console a nasıl erişilir ? Bunun için tarayıcıda sağ tık yapıp açılan pencerede incele kısımına tıklanır.Sonrasında aşağıda yer alan console sekmesine gidilir.console.log() yapısında () içerisinde yazılan yazı bu kısımda görükecektir.Bu kısım eğerki projemizde bir hata varsa bunu bize söyleyen mesajların yazdırıldığı kısımdır

// console.log("Javascript dersinden selamlar");

// 3-) document.write(): Tarayıcıdaki beyaz alana yazı yazdırmak için kullanılır.Html kısımında yer alan body 'nin Javascript deki karşılığı document'tir.Bu alana write komutu ile yazı yazdırılır.

// document.write("Merhaba Javascript Dersinden Selamlar !!");

// * Javascript Değişkenler

// Değişkenler verileri kolay bir şekilde yönetmek için kullanılır.Bir değişkeni kullanabilmek için önce bunu tanımlamamız gerekir.

// ? Bir değişken nasıl tanımlanır ?

// *  Değişkenler tanımlanırken önce var anahtar kelimesi yazılır.Bu anahtar kelime bilgisayarın belleğinde bir yer açar.Sonrasında ise bu değişkene bir isim verilir.İstediğimiz isimi verebiliriz.Fakat vereceğimiz bu isim değişkenin içeriği ile alakalı olmalıdır.Bu yazılımcılar arasında bir kuraldır. Verilen bu isim sonrasında = konulur ve devamında bu değişkenin değeri yazılır.

var isim = "Yusuf";
document.write("Ad:", isim, "<br/>");

var yaş = 22;
document.write("Yaş:", yaş, "<br/>");

var kurum = "Udemig";
var kuruluşYılı = 2017;
document.write("Kurum:", kurum, "<br/>");
document.write("Kurum Kuruluş Yılı:", kuruluşYılı, "<br/>");

// todo: Kendi isminiz,soyisiminiz ve yaşınız için birer değişken oluşturunuz.Ve bu değişkenleri ekrana yazdırınız.

// var öğrenciadı = "Enes";
// Yukarıdaki gibi birden fazla kelimeden oluşan bir değişken isimi kullanılacaksa bunu 'camelCase' isimlendirme kuralıyla yazarsak daha kolay bir okunurluk elde edilir.
// ? camelCase Kuralı Nedir ?

// Bu kural birden fazla kelimeden oluşan bir değişken için isimlendirme yapılırken ilk kelimenin tüm harflerinin küçük bundan sonra gelecek tüm kelimelerin ise sadece ilk harfinin büyük olarak yazıldığı  bir isimlendirmedir.
var öğrenciAdı = "Enes";
var öğrenciSoyadı = "Özkan";
var öğrenciYaşı = 15;
document.write("Öğrenci Adı:", öğrenciAdı, "<br/>");
document.write("Öğrenci Soyadı:", öğrenciSoyadı, "<br/>");
document.write("Öğrenci Yaşı:", öğrenciYaşı, "<br/>");
