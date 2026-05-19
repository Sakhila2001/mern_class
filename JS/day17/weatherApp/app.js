const API_KEY = "64e30b164b87409a9f441556261805";

const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const weatherData = document.getElementById("weatherData");

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

// Fetch weather by city
const fetchWeatherByCity = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`,
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();

  displayWeather(data);
};

// Fetch weather by coordinates
const fetchWeatherByCoords = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no`,
  );

  if (!response.ok) {
    throw new Error("Weather data not found");
  }

  const data = await response.json();

  displayWeather(data);
};

// Display weather data
const displayWeather = (data) => {
  const { current, location } = data;

  temperature.textContent = `${current.temp_c}°C`;
  condition.textContent = current.condition.text;
  cityName.textContent = `${location.name}, ${location.country}`;
  dateTime.textContent = location.localtime;

  humidity.textContent = `${current.humidity}%`;
  wind.textContent = `${current.wind_kph} km/h`;
  feelsLike.textContent = `${current.feelslike_c}°C`;
  cloud.textContent = `${current.cloud}%`;

  weatherIcon.src = `https:${current.condition.icon}`;

  weatherData.style.display = "block";
  errorMessage.textContent = "";

  hideLoading();
};

// Show loading
const showLoading = () => {
  loading.style.display = "block";
  errorMessage.textContent = "";
  weatherData.style.display = "none";
};

// Hide loading
const hideLoading = () => {
  loading.style.display = "none";
};

// Show error
const showError = (message) => {
  errorMessage.textContent = message;

  weatherData.style.display = "none";

  hideLoading();
};

// Search form submit
weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (city === "") {
    showError("Please enter a city name");
    return;
  }

  showLoading();

  try {
    await fetchWeatherByCity(city);
  } catch (error) {
    showError(error.message);
  }
});

// Location button
locationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    showError("Geolocation is not supported by your browser");
    return;
  }

  showLoading();

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        await fetchWeatherByCoords(latitude, longitude);
      } catch (error) {
        showError(error.message);
      }
    },
    () => {
      showError("Unable to access your location");
    },
  );
});

// Default city on page load
fetchWeatherByCity("Dharan");
