import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState({
    temp: "",
    humidity: "",
    condition: "",
    windspeed: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (city) => {
    if(!city) return;
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=f568ac4bbdbe4da9b4b11833240307&q=${city}`
      );
      const data = await res.json();
      setCityData({
        temp: data.current.temp_c,
        humidity: data.current.humidity,
        condition: data.current.condition.text,
        windspeed: data.current.wind_kph,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search City"
          style={{
            fontSize: "1.2em",
            padding: "0.6em 1.2em",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button onClick={() => handleSearch(city)}>Search</button>
      </div>

      {isLoading ? (
        <p id="loading">Loading data...</p>
      ) : cityData.temp !== "" ? (
        <div className="card_container">
          <Card
            temp={cityData.temp}
            humidity={cityData.humidity}
            condition={cityData.condition}
            windspeed={cityData.windspeed}
          />
        </div>
      ) : null}
    </>
  );
}

export default App;

//temperature, humidity, condition, windspeed
