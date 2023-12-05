"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import SubmitButton from "../components/SubmitButton";
import SlideInBottom from "../components/SlideInBottom";

interface WeatherData {
  name: string;
  weather: { id: number; main: string; description: string; icon: string }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
}

export default function Dashboard() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getWeatherEmoji = (description: string) => {
    if (description.includes("cloud")) return "☁️";
    if (description.includes("rain")) return "🌧";
    if (description.includes("sun")) return "☀️";
    if (description.includes("snow")) return "🌨️";
    if (description.includes("thunder")) return "⛈️";
    return "🌦"; // default
  };

  const getTemperatureEmoji = (temp: number) => {
    if (temp <= 0.9) return "❄️";
    if (temp <= 16.9) return "🥶";
    if (temp <= 19.9) return "🌡️";
    return "🔥";
  };

  const getHumidityEmoji = (humidity: number) => {
    if (humidity < 30) return "🌵";
    if (humidity < 60) return "🌿";
    return "💦";
  };

  const getWindSpeedEmoji = (speed: number) => {
    if (speed < 3) return "🍃";
    if (speed < 7) return "🌬️";
    return "💨";
  };

  const capitalizeWords = (str: string) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleWeatherCheck = async () => {
    if (!location.trim()) {
      setError("Please enter a location");
      return;
    }
    setError(null); // clear any existing error
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        setError("Location not found. Please enter a valid location.");
        return;
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError("Failed to fetch weather data, please try again.");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      <div className={`transition-up ${weatherData ? "mt-[-100px]" : "mt-0"}`}>
        <Search onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div>
        <SubmitButton onClick={handleWeatherCheck} />
      </div>
      {error && <p className="text-red-500 text-lg mt-4">{error}</p>}
      {weatherData && (
        <div className="flex flex-col justify-center items-center mt-6 p-6 bg-gray-700 bg-opacity-75 rounded-lg shadow-lg">
          <SlideInBottom>
            <h1 className="text-3xl font-bold mb-4">{weatherData.name}</h1>
            <div className="flex items-center mb-4 text-2xl font-semibold">
              <p className="mr-2">
                {getWeatherEmoji(
                  weatherData.weather[0].description.toLowerCase()
                )}
              </p>
              <p>
                Weather: {capitalizeWords(weatherData.weather[0].description)}
              </p>
            </div>
            <div className="flex items-center mb-2 text-2xl font-semibold">
              <p className="mr-2">
                {getTemperatureEmoji(weatherData.main.temp)}
              </p>
              <p>Temperature: {weatherData.main.temp} °C</p>
            </div>
            <div className="flex items-center mb-2 text-2xl font-semibold">
              <p className="mr-2">
                {getHumidityEmoji(weatherData.main.humidity)}
              </p>
              <p>Humidity: {weatherData.main.humidity}%</p>
            </div>
            <div className="flex items-center mb-2 text-2xl font-semibold">
              <p className="mr-2">
                {getWindSpeedEmoji(weatherData.wind.speed)}
              </p>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
          </SlideInBottom>
        </div>
      )}
    </div>
  );
}
