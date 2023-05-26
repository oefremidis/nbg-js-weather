window.addEventListener("load", () => {
  const location = document.querySelector(".location");
  const tempDegree = document.querySelector(".temp-degree");
  const tempDescr = document.querySelector(".temp-descr");

  let long;
  let lat;

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const API_KEY = "0e85ac54eb1fc04016ef35d5a084c415";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          location.textContent = `${data.name}, ${data.sys.country}`;
          let celsius = data.main.temp - 273.15;
          tempDegree.textContent = celsius.toFixed(2);
          tempDescr.textContent = data.weather[0].description;
        });
    });


  } else {
    alert("Geolocation is disabled. Please activate location services...");
  }
});

setInterval(() => console.log(), 1000);