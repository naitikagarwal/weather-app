// import Temp from "./Temp"
// import Forecast from './Forecast'
import MainSec from './MainSec'
type data = {
  temp_c: number | null;
  wind_kph: number | null;
  humidity: number | null;
  icon: string | undefined;
  text: string | null;
  sunset: string | null;
  sunrise: string | null;
  t_hour: object |null;
  name: string|null;
}
const Home = (props : data) => {

  return (
    <div className="flex flex-col gap-3">
      <MainSec 
        humidity={props.humidity} 
        temp_c={props.temp_c}
        wind_kph={props.wind_kph}
        icon={props.icon}
        text={props.text}
      />
      <div className="flex items-center justify-center md:hidden mb-2">
      <span className="material-symbols-outlined ">location_on</span>
      <h2 className=''>{props.name}</h2>
      </div>
      <div className="astro flex justify-center gap-10">
        <div className="flex flex-col items-center rounded-lg border p-3 shadow-md"><img src="https://cdn-icons-png.freepik.com/512/14337/14337308.png?ga=GA1.1.2069686478.1728888784" alt="" className='h-7'/>Sunrise
        <div className="font-semibold">{props.sunrise}</div></div>
        <div className="flex flex-col items-center border rounded-lg p-3 shadow-md"><img src="https://cdn-icons-png.freepik.com/512/5324/5324890.png?ga=GA1.1.2069686478.1728888784" alt="" className='h-7'/>Sunset<div className="font-semibold">{props.sunset}</div></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* <Forecast /> */}
      </div>
      
    </div>
  )
}

export default Home
