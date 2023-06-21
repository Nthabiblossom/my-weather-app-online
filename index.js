let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let currentTime = document.querySelector("div .current-time");
currentTime.innerHTML = `${hours}:${minutes}`;

let currentDate = document.querySelector("div .current-date");
currentDate.innerHTML = `${day} ${month} ${date}`;

function search(event) {
  event.preventDefault();
}
let form = document.querySelector("#search-form");

form.addEventListener("submit", search);

function showTemperature(response) {
  console.log(response.data.name);
  console.log(response.data.main.temp);
}
let city = document.querySelector("form#inputPassword2");

let apiKey = "3f6be1c407b0d9d1933561808db358ba";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=lisbon
&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
form.addEventListener("submit", showTemperature);
