const API_KEY = "64e30b164b87409a9f441556261805";
const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");

const loading = document.getElementById("loading");
const error = document.getElementById("errorMessage");
const weatherData = document.getElementById("weather-data");

const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const cityName = document.getElementById("cityName");
const dateTime = document.getElementById("dateTime");

const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const cloud = document.getElementById("cloud");

const weatherIcon = document.getElementById("weatherIcon");
const locationBtn = document.getElementById("locationBtn");

//fetch weather data according to city name
const fetchWeatherByCity = async (city) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`,
  );
  if (!response.ok) {
    throw new Error("City not found"); //edge case handle
  }
  const data = await response.json();
  display();
};

//fetch weather data according to latitude and longitude
const fetchWeatherByCoords = async (latitude, longitude) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude}.${longitude}&aqi=no`,
  );
  if (!response.ok) {
    throw new Error("The Weather of the location is not found");
  }
  const data = await response.json();
  displayWeather(data);
};

//display weather data
const displayWeather = (data) => {
  const { current, location } = data;
  temperature.textContent = `${current.temp_c}°C`;
  condition.textContent = current.condition.text;
  cityName.textContent = `${location.name}, ${location.country}`;
  dateTime.textContent = location.localtime;

  humidity.textContent = `${current.humidity}%`;
  wind.textContent = `${current.wind_kph} `;
  feelsLike.textContent = `${current.feelslike_c}°C`;
  cloud.textContent = `${current.cloud}%`;

  weatherIcon.src = current.condition.icon;
  weatherData.style.display = "block";
  errorMessage.textContent = "";
};
//show loading
const showLoading = () => {
  loading.style.display = "block";
  errorMessage.textContent = "";
  weatherData.style.display = "none";
};

//hide loading
const hideLoading = () => {
  loading.style.display = "none";
};

//show error message
const showError = (error) => {
  errorMessage.textContent = error;
  weatherData.style.display = "none";
  loading.style.display = "none";
};

//event listener
//search button
weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value;
  if (city.trim() === "") {
    showError("Please enter city name");
    return;
  }
  showLoading();
  try {
    await fetchWeatherByCity(city);
  } catch (error) {
    showError(error.message);
  }
});

//location button
locationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    showError("Geolocation is not supported by your browser");
    return;
  }
  //p=position
  navigator.geolocation.getCurrentPosition(async (p) => {
    const { latitude, longitude } = p.coords; //gives our current location
    fetchWeatherByCoords(latitude, longitude);
  },
  () => {
    showError("Geolocation is not supported by your browser");
  }
);
});

//default location
