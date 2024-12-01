// Diğer dosyalardan gelen elemanların importu
import { getWeatherData } from "./api.js";
import { elements } from "./ui.js";

// Formun gönderilmesini izleyerek input içerisindeki değere erişme
elements.form.addEventListener("submit", (e) => {
  // Sayfa yenilemesini iptal et
  e.preventDefault();

  var input = e.target[0];
  // Input içerisindeki değere eriş
  var city = input.value;

  // Input içerisindeki değere bağlı olarak Api'dan verileri al
  getWeatherData(city);

  // Input'u temizle
  input.value = "";
});

// Locations divi içerisinde yer alan butonlara tıklanınca bu butonların içerisinde yazan şehir ismine bağlı olarak hava durumunu güncelle

elements.locations.addEventListener("click", (e) => {
  // Eğer buttona tıklandıysa api isteği atacağız.Bunun için tıklanan yerin buton olup olmadığını kontrol et

  if (e.target.tagName === "BUTTON") {
    var city = e.target.innerText;
    // Tıklanma sonucunda ilgili buton elemanının içerisinde yer alan yazıyla api'a istek at
    getWeatherData(city);
  }
});
