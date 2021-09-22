import axios from 'axios'
import React, {useState} from 'react'
import 'bootstrap'

export const Weather = () => {
  const apiKey = 'b2aa9137771fc6187fd285b4eb1aff1f';
  const [city, setCity] = useState("Paris");
  const [country, setCountry] = useState("FR");
  const [temp, setTemp] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const getWeatherData = async(city, country) => {
    await axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    }).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="container">
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
      placeholder="City name" />
      <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}
      placeholder="Country name" />
      <button 
        onClick={() => getWeatherData(city, country)} 
        className="btn btn-primary"
        >
          Get weather
      </button>
    </div>
  )
}
export default Weather;