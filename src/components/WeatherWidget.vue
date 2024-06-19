<template>
  <div class="weather-widget">
    <h2 class="widget-title">Weather</h2>
    <div class="location-input">
      <label for="location" class="label">Enter Location:</label>
      <input 
        type="text" 
        id="location" 
        v-model="location" 
        placeholder="Type location here..." 
        class="input"
      />
      <button @click="fetchWeatherData" class="button">Search</button>
    </div>
    <div v-if="loading" class="loading">Loading weather data...</div>
    <div v-else-if="weatherData" class="weather-data">
      <div class="weather-info">
        <p class="location">Location: {{ weatherData.name }}</p>
        <p class="temperature">Temperature: {{ weatherData.main.temp }}°C</p>
        <p class="description">Description: {{ weatherData.weather[0].description }}</p>
        <p class="wind">Wind: {{ weatherData.wind.speed }} m/s</p>
        <p class="humidity">Humidity: {{ weatherData.main.humidity }}%</p>
        <p class="air-quality">Air Quality: {{ weatherData.main.pressure }} hPa</p>
        <p class="forecast">Forecast: {{ weatherData.weather[0].main }}</p>
      </div>
    </div>
    <div v-else class="no-data">Enter a location to see the weather.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null,
      loading: false,
    };
  },
  methods: {
    async fetchWeatherData() {
      this.loading = true;
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          this.weatherData = data;
        } else {
          console.error('Error fetching weather data:', data.message);
          this.weatherData = null;
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        this.weatherData = null;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.weather-widget {
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(to right, #87CEEB, #B0E0E6);
  border-radius: 30px;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  margin-top: 4rem;
}

.weather-widget:hover {
  transform: scale(1.05);
}

.widget-title {
  margin-bottom: 20px;
  color: #333;
  font-size: 30px;
  font-weight: bold;
}

.location-input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.label {
  margin-right: 10px;
  font-size: 15px;
  color: #fff;
  background: rgba(148, 148, 148, 0.5);
  padding: 5px 15px;
  border-radius: 15px;
}

.input {
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  border: 1px solid #ccc;
  width: calc(100% - 140px); /* Sesuaikan dengan margin button */
}

.button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 15px;
  border: none;
  background-color: #00aaff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-left: 10px;
}

.button:hover {
  background-color: #0088cc;
}

.weather-data {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-info {
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.8);
  padding: 25px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 5px 0;
}

.location,
.temperature,
.description,
.wind,
.humidity,
.air-quality,
.forecast {
  font-size: 16px;
  color: #333;
  margin: 5px 0;
}

.loading,
.no-data {
  font-size: 16px;
  color: #999;
  margin-top: 10px;
}

.loading {
  margin-top: 20px;
}

.no-data {
  margin-top: 20px;
}
</style>
