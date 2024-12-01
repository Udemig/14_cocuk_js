import { renderUi } from "./ui.js";

// Api Key
var apiKey = "d4dbd406439d567485abdbaaa5c46db6";

// Api'dan verileri alacak fonksiyon
async function getWeatherData(city) {
  // Apı'a istek at
  var response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  // Json verisini javascript nesnesine çevir
  var data = await response.json();

  renderUi(data);
}

export { getWeatherData };
