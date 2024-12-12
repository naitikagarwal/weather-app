import './styles/Temp.css'

const Temp = () => {
  return (
    <div className="flex min-w-full justify-around">
        <div className="temp border-2 rounded-lg px-5 my-4 pb-2">
            <img src="https://cdn.weatherapi.com/weather/64x64/night/113.png" alt=""  />
            <p className='font-bold text-3xl text-center'> 10.0 °</p>
            <p className="text-center">Feels like 8.1 °C</p>
            <p className="text-center">Clear</p>
        </div>
        <div className="other-info border-2 rounded-lg px-5 my-4 py-2">
            <p>Wind : 37.1.0 km/h</p>
            <p>Wind Direction : W</p>
            <p>Humidity : 58%</p>
            <p> Cloud Cover: 75%</p>
            <p>UV index : 2.0</p>
            <p>Visibility : 10km</p>
        </div>
    </div>
  )
}

export default Temp
