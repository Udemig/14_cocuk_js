// Javascript Switch-case

// Switch-case bir ifadenin aldığı her bir değer için bir çıktı vermemize olanak tanıyan bir yapıdır.

var günSayısı = 90;

// switch (günSayısı) {
//   case 1:
//     document.write(`Pazartesi <br/>`);
//     break;
//   case 2:
//     document.write(`Salı <br/>`);
//     break;
//   case 3:
//     document.write(`Çarşamba <br/>`);
//     break;
//   case 4:
//     document.write(`Perşembe <br/>`);
//     break;
//   case 5:
//     document.write(`Cuma <br/>`);
//     break;
//   case 6:
//     document.write(`Cumartesi <br/>`);
//     break;
//   case 7:
//     document.write(`Pazar <br/>`);
//     break;
//   default:
//     document.write(`Tanımsız Gün <br/>`);
// }

// Switch-case yapısı bir ifadenin alacağı değerlere karşılık bir çıktı verirken kullanılır.switch(){} yapısında () içerisinde bu ifadenin adı yazılır.{} içerisinde bu ifadenin alacağı her değer case ile yönetilir.Case e karşılık gelen durumda belirtilen işlem yapılır.

// * Javascript İf-else

// if-else javascript de koşullu yapıları yönetmek için kullanılır.

// if(){} şeklindeki yapıda eğer () içerisindeki koşul sağlanıyorsa {} içerisindeki kod çalışır.

var sayı = 9;

// if (sayı > 11) {
//   document.write(`Koşul sağlandı <br/>`);
// } else {
//   document.write(`Koşul sağlanmadı <br/>`);
// }

// if kısımındai koşul sağlanmazsa else {} içerisindeki kod çalışır.

// todo: Sınav notu 50'den büyük eşitse 'Dersten geçtiniz' değilse 'Dersten kaldınız' yazdıran code-script i oluşturunuz.

var öğrenciNotu = 40;

// if (öğrenciNotu >= 50) {
//   document.write(`Dersten geçtiniz.💯 <br/>`);
// } else {
//   document.write(`Dersten kaldınız.😓 <br/>`);
// }

// document.write(`----------------------------------------- <br/>`);

// todo: Kullanıcı notu 50'den küçükse 'Kaldınız' 50'den büyük eşitse 'Geçtiniz' 50-64 aralığındaysa 'Geçtiniz ama belge alamadınız' 65-84 aralığındaysa 'Teşekkür belgesi aldınız' 85 üzerindeyse 'Takdir belgesi aldınız' yazdıran code-scripti oluşturunuz.

var not = 88;

// if (not < 50) {
//   document.write(`Dersten kaldınız.😓😓😓 <br/>`);
// } else if (not >= 50 && not < 65) {
//   document.write(`Geçtiniz ama belge alamadınız😓 <br/>`);
// } else if (not >= 65 && not < 85) {
//   document.write(`Teşekkür belgesi aldınız <br/>`);
// } else {
//   document.write(`Takdir belgesi aldınız 💯 💯 💯  <br/>`);
// }

// if-else yapısında birden fazla koşul kontrol edilecekse ilk ve son koşul haricinde diğer koşullar else if ile yazılır.

// * Javascript DOM ( Document Object Modal)

// Html deki body etiketinin tarayıcıdaki karşılığı javascriptde document'tir.Bizler bu kısıma müdaheleler yapabiliriz.Html deki elemanlara javascript kısımında müdaheleler yapabilmemiz  için önce bunlara javascript de erişmemiz  gerekir.

// Javascript'de Html de bulunan elemanlara erişmek için 4 adet yöntem vardır:

// * 1-) document.getElementsByTagName() ==> Bu metotla Html kısımında bulunan elemanlara tag adına göre erişiriz.

var title = document.getElementsByTagName("h1");

// console.log(title);

// * 2-) document.getElementsByClassName() ==> Bu metotla Html kısımında bulunan elemanlara class adına göre erişiriz.

var title2 = document.getElementsByClassName("title");

// console.log(title2);

// * 3-)  document.getElementById() ==> Bu metotla Html kısımında bulunan elemanlara id lerine göre erişiriz.

var title6 = document.getElementById("title");

// console.log(title3);

// * 4-) document.querySelector() ==> Bu metotla Html kısımında bulunan elemanlara ister id ister class adı ile erişip kullanabiliriz.Kısacası şimdiye kadar olan tüm metotların işini tek başına yapar.

// ! Önemli kısım document.querySelector() ile erişilmek istenen elemanın bu elemana erişirken kullandığımız isiminin bir class adımı yoksa id mi bunu belirtmemiz gerekir.

var paragraf = document.querySelector(".paragraf");

// console.log(paragraf);

// paragraf.style.backgroundColor = "red";
// paragraf.style.padding = "10px";
// paragraf.style.color = "white";
// paragraf.style.fontSize = "30px";

// Javascript dosyasında Htmlden çekilen elemanların still özellikleri yukarıdaki görüldüğü gibi güncellenebilir.Fakat bu bizim için yazım noktasında zorlayıcı olacağından bu yöntem yerine still özelliklerini css dosyasında bir class adı altında toplayarak bu classı javascriptde istenilen elemana vereceğiz.

//  classList.add() ==> Bir elemana class eklemek için kullanılır

paragraf.classList.add("text");

var title5 = document.querySelector("#title1");

// classList.remove() ==> Bir elemandan class çıkarmak için kullanılır.

title5.classList.remove("heading");

// classList.toggle() ==>

var button = document.querySelector(".button");

// * Javascript Olay İzleyicileri

// Javascript de Html kısımında bulunan bir elemanın tıklanma vs olaylarını izleyebiliriz.Bu olayın gerçekleşmesi durumunda bir işlevde tetikleyebiliriz.

button.addEventListener("click", () => {
  alert(`Butona tıklandı`);
});
