var elements = {
  city: document.querySelector(".city"),
  form: document.querySelector("form"),
  status: document.querySelector(".status"),
  icon: document.querySelector(".icon img"),
  degree: document.querySelector("#degree"),
  details: document.querySelector("#details"),
  humidity: document.querySelector("#humidity"),
  wind: document.querySelector("#wind"),
  rise: document.querySelector("#rise"),
  west: document.querySelector("#west"),
  max: document.querySelector("#max"),
  min: document.querySelector("#min"),
  locations: document.querySelector(".locations"),
};

function renderUi(data) {
  console.log(data);
  // Şehir ismini güncelle
  elements.city.textContent = data.name;
  // Hava durumunu belirleyen içeriği güncelle
  elements.status.textContent = data.weather[0].main;
  // Hava durumunu iconunu güncelle
  elements.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  // Hava sıcaklığını verisini güncelle
  elements.degree.textContent = data.main.temp.toFixed(1) + "°";
  // Hissedilen sıcaklığı güncelle
  elements.details.textContent = data.main.feels_like + "°";
  // Nem değerini güncelle
  elements.humidity.textContent = data.main.humidity + "%";
  // Rüzgar değerini güncelle
  elements.wind.textContent = data.wind.speed + " km/h";
  // Güneşin doğuş saatini güncelle
  elements.rise.textContent = new Date(
    data.sys.sunrise * 1000
  ).toLocaleTimeString("tr");
  // Güneşin batış saatini güncelle
  elements.west.textContent = new Date(
    data.sys.sunset * 1000
  ).toLocaleTimeString("tr");
  // Max sıcaklık değerini güncelle
  elements.max.textContent = data.main.temp_max.toFixed(1) + "°";
  // Min sıcaklık değerini güncelle
  elements.min.textContent = data.main.temp_min.toFixed(1) + "°";
}

export { elements, renderUi };
