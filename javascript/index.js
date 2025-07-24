function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Cebu
  let cebuElement = document.querySelector("#cebu");
  if (cebuElement) {
    let cebuDateElement = cebuElement.querySelector(".date");
    let cebuTimeElement = cebuElement.querySelector(".time");
    let cebuTime = moment().tz("Asia/Manila");

    cebuDateElement.innerHTML = cebuTime.format("MMMM	Do YYYY");
    cebuTimeElement.innerHTML = cebuTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Cape Town
  let capeTownElement = document.querySelector("#cape-town");
  if (capeTownElement) {
    let capeTownDateElement = capeTownElement.querySelector(".date");
    let capeTownTimeElement = capeTownElement.querySelector(".time");
    let capeTownTime = moment().tz("Africa/Johannesburg");

    capeTownDateElement.innerHTML = capeTownTime.format("MMMM Do YYYY");
    capeTownTimeElement.innerHTML = capeTownTime.format(
      "h:mm:ss [<small>]A[</small>]"
      //capeTownTime needs to be declared so date and time value can be read for that location
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  //this removes the underscore in the city name
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>   
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
   <a href="/">All cities</a>
  `;
  //code is to update the city name, date and time every time a new city is selected
  //last code is a link to bring you back to home page.
}

updateTime();
setInterval(updateTime, 1000);

//to activate the select portion of app
let citiesSelectElement = document.querySelector("#city");
//refers to <select name="" id="city">
citiesSelectElement.addEventListener("change", updateCity);
