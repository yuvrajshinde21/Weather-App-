# Weather App

A simple weather forecast web application that fetches and displays current weather and forecast data for any city using the OpenWeatherMap API.

## Features

- Enter a city name and get the current temperature, weather description, and a matching weather icon.
- Displays a detailed forecast with temperature and time slots.
- Dynamically updates weather icons based on temperature ranges.
- Error handling for invalid city names or API failures.

## How It Works

- Uses the OpenWeatherMap API to fetch:
  - Current weather data
  - Fetches 5-day / 3-hour forecast data but displays the forecast for the next 8 time slots (about 24 hours)- Processes JSON responses and updates the UI with:
  - City name
  - Current temperature (in Celsius)
  - Weather description (e.g., cloudy, sunny)
  - Weather icons corresponding to temperature ranges
  - Forecasted temperatures and times for the next 8 time slots (~24 hours)
- Alerts user on API errors or invalid city input.

## Technologies Used

- JavaScript (ES6+ with async/await)
- Fetch API for HTTP requests
- OpenWeatherMap API for weather data
- Basic HTML and CSS for UI

## How to Use

1. Enter the city name in the input box.
2. Click the **Search** button.
3. View the current weather and upcoming forecast.
