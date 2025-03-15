import './Card.css'
const Card = ({ temp, humidity, condition, windspeed }) => {
  return (
    <>
      <div className="cards">
        <div className="card">
            <h2>Temperature</h2>
            <p>{temp}°C</p>
        </div>
        <div className="card">
            <h2>Humidity</h2>
            <p>{humidity}%</p>
        </div>
        <div className="card">
            <h2>Condition</h2>
            <p>{condition}</p>
        </div>
        <div className="card">
            <h2>Wind Speed</h2>
            <p>{windspeed} kph</p>
        </div>
      </div>
    </>
  );
};

export default Card;
